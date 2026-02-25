import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  publishedAt: string;
  category: {
    title: string;
    slug: string;
  };
  readingTime: number;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  featuredImage,
  publishedAt,
  category,
  readingTime,
}: BlogPostCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log('BlogPostCard:', title, 'featuredImage:', featuredImage);

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      <Link href={`/blog/${slug}`}>
        {/* Imagen destacada */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-4xl">🐕</span>
            </div>
          )}
          {/* Categoría badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              {category.title}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-dark transition-colors group-hover:text-primary">
            {title}
          </h3>
          
          <p className="mb-4 line-clamp-3 text-gray-600">{excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de lectura</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
