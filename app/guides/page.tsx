import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/data/articles";
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Guides & Teardowns | LinkGrow Private Vault",
  description:
    "Explore forensic analysis, iOS privacy teardowns, and cryptographic architecture guides by LinkGrow security engineers.",
  openGraph: {
    title: "LinkGrow Security Guides & Investigations",
    description: "Deep dives into mobile cryptography, iOS privacy leaks, and zero-knowledge vault engineering.",
    url: "https://linkgrow.app/guides",
    type: "website",
  },
};

export default function GuidesPage() {
  const featured = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const restArticles = ARTICLES.filter((a) => a.slug !== featured.slug);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3 pt-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Research & Guides</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Security Guides & Forensic Teardowns
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Technical investigations, cryptographic teardowns, and actionable privacy protocols written by LinkGrow security engineers.
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 border border-indigo-100 p-8 sm:p-10 shadow-[0_4px_24px_-4px_rgba(99,102,241,0.08)] hover:shadow-[0_12px_36px_-6px_rgba(99,102,241,0.12)] transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white uppercase tracking-wider text-[10px]">
                    Featured Investigation
                  </span>
                  <span className="font-semibold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md">
                    {featured.category}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <Link href={`/guides/${featured.slug}`} className="block group">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                </Link>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {featured.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                      {featured.author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featured.author.name}</p>
                      <p className="text-[11px] text-slate-500">{featured.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/guides/${featured.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-indigo-600 transition-colors shadow-sm"
                  >
                    <span>Read Investigation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Decorative side callout */}
              <div className="lg:col-span-4 bg-white/90 border border-indigo-100 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Key Takeaways</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {featured.takeaways.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Grid of Other Articles */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-bold text-slate-900">All Security Articles & Teardowns</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restArticles.map((article) => (
                <div
                  key={article.slug}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>·</span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>

                    <Link href={`/guides/${article.slug}`}>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {article.title}
                      </h4>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center border border-slate-200">
                        {article.author.avatar}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {article.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/guides/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom App Download Callout */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">Protect your photos with LinkGrow today</h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Zero accounts. Pure client-side AES-256-GCM encryption. Free on the iOS App Store.
              </p>
            </div>
            <a
              href="/#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all whitespace-nowrap shadow-md"
            >
              <span>Download Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
