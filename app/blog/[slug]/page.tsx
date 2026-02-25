import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { Calendar, Clock, Tag, User, Share2 } from 'lucide-react';
import { getBlogPostBySlug } from '@/lib/sanity/helpers';
import { calculateReadingTime } from '@/lib/sanity/helpers';
import { ShareButtons } from '@/components/ui/ShareButtons';
import Link from 'next/link';
import Image from 'next/image';

// Revalidar cada 1 hora (3600 segundos)
export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Componentes personalizados para PortableText
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold text-dark">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-3 mt-6 text-xl font-bold text-dark">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="pl-2">{children}</li>,
    number: ({ children }: any) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-dark">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary-dark underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${post.title} | Blog El Peluperro`,
    description: post.excerpt || `Artículo sobre ${post.category?.title || 'cuidado canino'}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'José Antonio Camacho'],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = post.content ? calculateReadingTime(post.content) : 5;
  const formattedDate = new Date(post.publishedAt || '').toLocaleDateString(
    'es-ES',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  // Schema.org Article markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    image: post.featuredImage
      ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}/og-image.jpg`
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || 'José Antonio Camacho',
    },
    publisher: {
      '@type': 'Organization',
      name: 'El Peluperro',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${slug}`,
    },
    articleSection: post.category?.title || 'General',
    keywords: post.tags?.join(', '),
  };

  return (
    <article className="min-h-screen bg-light py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          {post.category && (
            <>
              <Link
                href={`/blog/categoria/${post.category.slug.current}`}
                className="hover:text-primary transition-colors"
              >
                {post.category.title}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {/* Categoría */}
          {post.category && (
            <Link
              href={`/blog/categoria/${post.category.slug.current}`}
              className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              {post.category.title}
            </Link>
          )}

          {/* Título */}
          <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author || 'José Antonio Camacho'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de lectura</span>
            </div>
          </div>
        </header>

        {/* Imagen destacada */}
        {post.featuredImage && (
          <div className="mb-8 overflow-hidden rounded-lg">
            {post.featuredImage.asset._ref.startsWith('/images/') ? (
              <div className="aspect-video w-full relative">
                <Image
                  src={post.featuredImage.asset._ref}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">🐕</span>
              </div>
            )}
          </div>
        )}

        {/* Contenido */}
        <div className="prose prose-lg max-w-none mb-12">
          {post.content && (
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Tag className="h-5 w-5 text-gray-500" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Botones de compartir */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-dark">
              <Share2 className="h-5 w-5" />
              Compartir este artículo
            </h3>
            <ShareButtons
              url={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${slug}`}
              title={post.title}
            />
          </div>
        </div>

        {/* Navegación a otros posts */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
          >
            ← Volver al blog
          </Link>
        </div>
      </div>
    </article>
  );
}
