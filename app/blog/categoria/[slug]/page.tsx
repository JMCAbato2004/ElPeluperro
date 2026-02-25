'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { Pagination } from '@/components/ui/Pagination';
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
  description?: string;
}

const POSTS_PER_PAGE = 10;

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;

  const [category, setCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { getCategoryBySlug, getBlogPostsByCategory } = await import(
          '@/lib/sanity/helpers'
        );
        const [fetchedCategory, fetchedPosts] = await Promise.all([
          getCategoryBySlug(categorySlug),
          getBlogPostsByCategory(categorySlug),
        ]);
        setCategory(fetchedCategory);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error loading category data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [categorySlug]);

  // Calcular posts para la página actual
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  if (!category) {
    return (
      <div className="min-h-screen bg-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 text-center">
            <h1 className="mb-4 text-4xl font-bold text-dark">
              Categoría no encontrada
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              La categoría que buscas no existe.
            </p>
            <Link
              href="/blog"
              className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Volver al blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-900">{category.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
            Categoría
          </div>
          <h1 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
            {category.title}
          </h1>
          {category.description && (
            <p className="text-lg text-gray-600">{category.description}</p>
          )}
          <p className="mt-4 text-sm text-gray-500">
            {posts.length} artículo{posts.length !== 1 ? 's' : ''} en esta
            categoría
          </p>
        </div>

        {/* Posts grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => {
                const readingTime = post.content
                  ? calculateReadingTime(post.content)
                  : 5;

                // Determinar la imagen a mostrar
                let imageUrl: string | undefined = undefined;
                if (post.featuredImage?.asset?._ref) {
                  const ref = post.featuredImage.asset._ref;
                  // Si la referencia es una ruta de imagen real, usarla directamente
                  if (ref.startsWith('/images/')) {
                    imageUrl = ref;
                  }
                }

                return (
                  <BlogPostCard
                    key={post._id}
                    slug={post.slug.current}
                    title={post.title}
                    excerpt={post.excerpt || ''}
                    featuredImage={imageUrl}
                    publishedAt={post.publishedAt || new Date().toISOString()}
                    category={{
                      title: post.category?.title || category.title,
                      slug: post.category?.slug.current || categorySlug,
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
              No hay artículos en esta categoría todavía.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-block text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Ver todos los artículos →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
