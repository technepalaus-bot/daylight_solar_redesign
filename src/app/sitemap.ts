import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { blogPosts } from '@/constants/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.daylightsolar.com.au';

  // Get all published blogs from database
  let dbBlogs: { slug: string; updatedAt: Date }[] = [];
  try {
    dbBlogs = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
  } catch {
    console.log('Database not available, using static blog posts');
  }

  // Static pages with enhanced SEO priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/checksolarsubsidy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-solar-assessment`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // Dynamic blog pages from database
  const dbBlogPages: MetadataRoute.Sitemap = dbBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Static blog posts from constants (fallback)
  const staticBlogPages: MetadataRoute.Sitemap = blogPosts.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Merge blog pages (prefer database, fallback to static)
  const allBlogPages = dbBlogPages.length > 0 ? dbBlogPages : staticBlogPages;

  return [...staticPages, ...allBlogPages];
}
