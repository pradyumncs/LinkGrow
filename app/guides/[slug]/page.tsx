import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES, Article } from "@/data/articles";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Share2,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | LinkGrow",
    };
  }

  return {
    title: `${article.title} | LinkGrow Security Guides`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      url: `https://linkgrow.online/guides/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  // Article JSON-LD Schema for Google & AI Engines
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LinkGrow",
      url: "https://linkgrow.online",
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://linkgrow.online/guides/${article.slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="flex-1 pt-28 pb-20 bg-grid-pattern">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-indigo-600 transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </div>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-2.5 py-0.5 rounded-full">
                {article.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {article.description}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {article.author.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
                  <p className="text-xs text-slate-500">{article.author.role}</p>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-medium hidden sm:block">
                Verified Security Review
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200/80 p-6 sm:p-7 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span>Key Findings & Takeaways</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {article.takeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Body Content */}
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 text-base leading-relaxed">
            {article.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight pt-2 border-t border-slate-100">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                    {p}
                  </p>
                ))}

                {/* Optional Alert Box */}
                {section.alert && (
                  <div
                    className={`p-4 rounded-xl border flex items-start gap-3 my-4 ${
                      section.alert.type === "warning"
                        ? "bg-amber-50 border-amber-200 text-amber-900"
                        : section.alert.type === "important"
                        ? "bg-rose-50 border-rose-200 text-rose-900"
                        : "bg-sky-50 border-sky-200 text-sky-900"
                    }`}
                  >
                    {section.alert.type === "warning" && (
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    {section.alert.type === "important" && (
                      <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    {section.alert.type === "tip" && (
                      <Lightbulb className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {section.alert.text}
                    </span>
                  </div>
                )}

                {/* Optional Table */}
                {section.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200 my-6 shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 sm:p-4">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3 sm:p-4 ${
                                  cIdx === 1 ? "font-semibold text-indigo-700 bg-indigo-50/30" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* In-Article Conversion Banner */}
          <div className="my-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold">Safeguard your photos with LinkGrow</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                No accounts. Unbroken AES-256-GCM encryption. Plausible deniability.
              </p>
            </div>
            <a
              href="/#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all whitespace-nowrap shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get Free on App Store</span>
            </a>
          </div>

          {/* Related Articles Section */}
          <div className="pt-10 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Recommended Security Guides</h3>
              <Link
                href="/guides"
                className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
              >
                <span>View all guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/guides/${item.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
