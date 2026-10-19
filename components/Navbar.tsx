"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Globe, Menu, X, ArrowUpRight, Check, BookOpen } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt-br", name: "Português (BR)", flag: "🇧🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-hant", name: "繁體中文", flag: "🇹🇼" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "he", name: "עברית", flag: "🇮🇱" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
  { code: "ca", name: "Català", flag: "🇪🇸" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-sky-500 p-[1px] flex items-center justify-center shadow-[0_2px_10px_rgba(99,102,241,0.25)] group-hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)] transition-all">
            <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
              <Shield className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
              LinkGrow
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/70">
                Vault
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <Link href="/#features" className="hover:text-indigo-600 transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="hover:text-indigo-600 transition-colors">
            How It Works
          </Link>
          <Link href="/#security" className="hover:text-indigo-600 transition-colors">
            Security
          </Link>
          <Link href="/#compare" className="hover:text-indigo-600 transition-colors">
            Compare
          </Link>
          <Link href="/#tools" className="hover:text-indigo-600 transition-colors">
            Tools
          </Link>
          <Link href="/guides" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            <span>Guides</span>
          </Link>
          <Link href="/#faq" className="hover:text-indigo-600 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-2xl p-2 z-50 text-xs">
                <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Available in 32 Languages
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                      currentLang === lang.code
                        ? "bg-indigo-50 text-indigo-700 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="/#download"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-indigo-600 text-white shadow-sm hover:shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-all hover:-translate-y-0.5"
          >
            <span>Get App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in fade-in duration-150">
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            How It Works
          </Link>
          <Link
            href="/#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Security Architecture
          </Link>
          <Link
            href="/#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Compare Competitors
          </Link>
          <Link
            href="/#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Free Tools
          </Link>
          <Link
            href="/guides"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-indigo-600 bg-indigo-50/60"
          >
            Guides & Articles
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            FAQ
          </Link>
          <div className="pt-2">
            <a
              href="/#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white"
            >
              <span>Download LinkGrow</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
