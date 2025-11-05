import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export const metadata = {
  title: "Blog | David Smart",
  description: "Articles about AI, software development, and tech innovations",
};

const blogPosts = [
  {
    id: 1,
    title: "Building SafeLink: An AI-Powered URL Safety Scanner",
    slug: "safelink-url-scanner",
    excerpt:
      "How I built an intelligent security agent using Mastra AI and integrated it with Telex.im for real-time threat detection.",
    date: "November 5, 2025",
    readTime: "10 min read",
    tags: ["AI", "Security", "Mastra", "TypeScript"],
    featured: true,
  },
  // Add more blog posts here as you write them
];

const BlogPage = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <div className="pb-20 pt-36">
          {/* Spotlight Effects */}
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="top-10 left-full h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight
              className="top-28 left-80 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Blog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Insights on AI development, software engineering, and building
              innovative solutions
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block p-6 bg-black-200 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                {post.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/20 rounded-full mb-4">
                    Featured
                  </span>
                )}

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-gray-400 bg-white/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="mt-4 text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                  Read more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State (if no featured posts) */}
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                More articles coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
