"use client";

import type { BlogPost } from "@/constants/blog";
import { blogPosts } from "@/constants/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Share2, Clock, User, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts: BlogPost[] = blogPosts
    .filter((p: BlogPost) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Back Button & Breadcrumb */}
      <div className="globalContainer pt-8 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="globalContainer pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-200">
            <User className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {post.author}
              </p>
              <p className="text-xs text-gray-500">
                {post.category} Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="globalContainer pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="globalContainer pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph: string, index: number) => {
              // Check if paragraph starts with a heading (ends with :)
              if (paragraph.includes(":") && paragraph.length < 80) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-primary mt-8 mb-4"
                  >
                    {paragraph.replace(":", "")}
                  </h2>
                );
              }

              // Check if it's a list
              if (paragraph.includes("- ")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-gray-700 font-light">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Check if it's a numbered list
              if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-gray-700 font-light">
                        {item.replace(/^\d+\.\s/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={index}
                  className="text-gray-700 font-light leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Share this post:</span>
              <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="globalContainer">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: BlogPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </p>
                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-light mb-3 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="globalContainer text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto font-light">
            Get your free solar assessment today and discover how much you can
            save with solar energy.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-primary font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg"
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
