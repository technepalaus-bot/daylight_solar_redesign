import { Metadata } from "next";
import { blogPosts } from "@/constants/blog";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Daylight Solar",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Daylight Solar Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "solar energy",
      "solar panels",
      "Brisbane solar",
      "renewable energy",
      "solar tips",
      "solar guide",
      ...post.title.toLowerCase().split(" ").filter((word) => word.length > 3),
    ],
    alternates: {
      canonical: `https://www.daylightsolar.com.au/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.daylightsolar.com.au/blog/${post.slug}`,
      siteName: "Daylight Solar Australia",
      images: [
        {
          url: `https://www.daylightsolar.com.au${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_AU",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://www.daylightsolar.com.au${post.image}`],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
