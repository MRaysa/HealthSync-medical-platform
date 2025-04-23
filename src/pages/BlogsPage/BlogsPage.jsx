import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

const BlogsPage = () => {
  const { blogs } = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  // loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Loading Header */}
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="w-24 h-1 bg-gray-200 mx-auto mb-6 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
          </div>

          {/* Loading Blog List */}
          <div className="space-y-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-sm p-6 md:p-8 animate-pulse"
              >
                <div className="flex items-center mb-4 justify-between">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            React Development Insights
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 transition-all duration-300 group-hover:w-32"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert articles on React concepts and best practices
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-8 border border-transparent hover:border-blue-100 relative overflow-hidden"
            >
              {/* Hover effect elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Blog Meta */}
              <div className="flex items-center mb-4 justify-between">
                <span className="text-sm text-blue-600 font-medium mr-4 group-hover:text-blue-700 transition-colors">
                  {blog.date}
                </span>
                <div className="flex space-x-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <div className="prose prose-blue max-w-none text-gray-700">
                  {blog.content.split("\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-4 last:mb-0 leading-relaxed group-hover:text-gray-800 transition-colors"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Blog Author */}
              <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  By {blog.author}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
