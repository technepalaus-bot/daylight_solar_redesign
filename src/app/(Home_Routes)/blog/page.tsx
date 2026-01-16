"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/constants/blog";
import { blogPosts, blogCategories } from "@/constants/blog";
import { MoveRight, Sparkles, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

// Blog Page Schema for SEO
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Daylight Solar Blog",
  description: "Expert solar energy insights, tips, and guides for Australian homeowners and businesses.",
  url: "https://www.daylightsolar.com.au/blog",
  publisher: {
    "@type": "Organization",
    name: "Daylight Solar",
    logo: {
      "@type": "ImageObject",
      url: "https://www.daylightsolar.com.au/img/logo.png",
    },
  },
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts: BlogPost[] =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post: BlogPost) => post.category === selectedCategory);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white animate-fadeIn">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/solar1.jpeg"
            alt="Solar Energy Blog Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="globalContainer relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-slideUp">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Latest Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Latest Solar <span className="text-secondary">Insights</span> & Tips
            </h1>
            <p className="text-tertiary text-lg md:text-xl font-light max-w-2xl mx-auto">
              Stay informed about the latest trends, benefits, and technology in
              solar energy. Learn how to maximize your solar investment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="globalContainer py-8 sm:py-12 md:py-16">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
          {blogCategories.map((category: string, idx: number) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="globalContainer pb-16 sm:pb-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredPosts.map((post: BlogPost, idx: number) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="inline-block bg-primary text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Read More indicator */}
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-white text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2">
                        Read More <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    {/* Date and Read Time */}
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {post.readTime} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-xs sm:text-sm font-light mb-3 sm:mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                          {post.author[0]}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">
                          {post.author}
                        </span>
                      </div>
                      <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 text-base sm:text-xl font-medium">
              No blog posts found in this category.
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">Try selecting a different category</p>
          </div>
        )}
      </section>
    </main>
  );
}
