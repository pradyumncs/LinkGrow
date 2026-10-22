import React from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export default function LatestGuidesSection() {
  const previewArticles = ARTICLES.slice(0, 3);

  return (
    <section className="py-24 border-t border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Security Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Guides & Teardowns
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Learn the mechanics of mobile surveillance, iOS privacy loopholes, and zero-knowledge storage.
            </p>
          </div>

          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline shrink-0"
          >
            <span>View all {ARTICLES.length} guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewArticles.map((article) => (
            <div
              key={article.slug}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-[11px] font-medium">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/guides/${article.slug}`}>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  By {article.author.name}
                </span>

                <Link
                  href={`/guides/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:text-indigo-700"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
