'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Metadata } from 'next';
import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { Pagination } from '@/components/ui/Pagination';
import { SearchBar } from '@/components/ui/SearchBar';
import { BlogFilters } from '@/components/ui/BlogFilters';
import { calculateReadingTime } from '@/lib/sanity/helpers';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  content?: any[];
  featuredImage?: any;
  publishedAt?: string;
  author?: string;
  category?: {
    _id: string;
    title: string;
    slug: { current: string };
  };
  tags?: string[];
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

const POSTS_PER_PAGE = 10;

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // Filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Cargar posts y categorías
  useEffect(() => {
    async function loadData() {
      try {
        const { getBlogPosts, getCategories } = await import('@/lib/sanity/helpers');
        const [fetchedPosts, fetchedCategories] = await Promise.all([
          getBlogPosts(),
          getCategories(),
        ]);
        setAllPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Obtener todos los tags disponibles
  const availableTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags || []))
  ).sort();

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...allPosts];

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(
        (post) => post.category?.slug.current === selectedCategory
      );
    }

    // Filtrar por tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.some((tag) => post.tags?.includes(tag))
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset a la primera página cuando cambian los filtros
  }, [searchQuery, selectedCategory, selectedTags, allPosts]);

  // Calcular posts para la página actual
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleCategoryChange = useCallback((categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  }, []);

  const handleTagsChange = useCallback((tags: string[]) => {
    setSelectedTags(tags);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p className="text-gray-600">Cargando artículos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
            Blog de El Peluperro
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Consejos y artículos sobre cuidado canino, higiene, alimentación y
            salud de tu mascota.
          </p>
        </div>

        {/* Búsqueda */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Layout con filtros y posts */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar con filtros */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 rounded-lg bg-white p-6 shadow-md">
              <BlogFilters
                categories={categories}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                availableTags={availableTags}
                onCategoryChange={handleCategoryChange}
                onTagsChange={handleTagsChange}
              />
            </div>
          </aside>

          {/* Posts grid */}
          <div className="lg:col-span-3">
            {currentPosts.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-sm text-gray-600">
                    Mostrando {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} de{' '}
                    {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="mb-12 grid gap-8 sm:grid-cols-2">
                  {currentPosts.map((post) => {
                    const readingTime = post.content
                      ? calculateReadingTime(post.content)
                      : 5;

                    return (
                      <BlogPostCard
                        key={post._id}
                        slug={post.slug.current}
                        title={post.title}
                        excerpt={post.excerpt || ''}
                        featuredImage={
                          post.featuredImage?.asset?._ref
                            ? `/api/placeholder/400/300`
                            : undefined
                        }
                        publishedAt={post.publishedAt || new Date().toISOString()}
                        category={{
                          title: post.category?.title || 'General',
                          slug: post.category?.slug.current || 'general',
                        }}
                        readingTime={readingTime}
                      />
                    );
                  })}
                </div>

                {/* Paginación */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="rounded-lg bg-white p-12 text-center shadow-md">
                <p className="text-lg text-gray-600">
                  {searchQuery || selectedCategory || selectedTags.length > 0
                    ? 'No se encontraron artículos con los filtros seleccionados.'
                    : 'No hay artículos disponibles en este momento.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
