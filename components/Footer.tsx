import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  const languageList = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "pt-br", label: "Português (BR)" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "简体中文" },
    { code: "ar", label: "العربية" },
    { code: "hi", label: "हिंदी" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "it", label: "Italiano" },
    { code: "ko", label: "한국어" },
    { code: "nl", label: "Nederlands" },
    { code: "pl", label: "Polski" },
    { code: "ru", label: "Русский" },
    { code: "sv", label: "Svenska" },
    { code: "th", label: "ไทย" },
    { code: "tr", label: "Türkçe" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "zh-hant", label: "繁體中文" },
    { code: "uk", label: "Українська" },
    { code: "he", label: "עברית" },
    { code: "cs", label: "Čeština" },
    { code: "fi", label: "Suomi" },
    { code: "sk", label: "Slovenčina" },
    { code: "ca", label: "Català" },
    { code: "hr", label: "Hrvatski" },
    { code: "da", label: "Dansk" },
    { code: "hu", label: "Magyar" },
    { code: "pt-pt", label: "Português (PT)" },
    { code: "el", label: "Ελληνικά" },
    { code: "ro", label: "Română" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-indigo-600" />
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                LinkGrow
              </span>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              LinkGrow is a zero-knowledge local-first photo vault for iOS. Encrypted on your phone with AES-256-GCM, unlocked only by a pattern you draw. No accounts, no identity tracking, no centralized keys.
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-xs pt-1 font-medium">
              <span>FIPS 140-3 Standard</span>
              <span>·</span>
              <span>Zero-Cloud Plaintext</span>
              <span>·</span>
              <span>Audited Cryptography</span>
            </div>
          </div>

          {/* Navigation Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="hover:text-indigo-600 transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</Link></li>
              <li><Link href="/#security" className="hover:text-indigo-600 transition-colors">Security Architecture</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">Competitor Comparisons</Link></li>
              <li><Link href="/#tools" className="hover:text-indigo-600 transition-colors">Free Privacy Tools</Link></li>
              <li><Link href="/guides" className="text-indigo-600 font-semibold hover:underline">Guides & Teardowns</Link></li>
              <li><Link href="/#faq" className="hover:text-indigo-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Navigation Column 2: Comparisons */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Teardowns</h4>
            <ul className="space-y-2">
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Apple Hidden Album</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Keepsafe Vault</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Private Photo Vault</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Calculator Secret Apps</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Encamera</Link></li>
              <li><Link href="/#compare" className="hover:text-indigo-600 transition-colors">vs Safe Lock</Link></li>
            </ul>
          </div>

          {/* Navigation Column 3: Trust & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Trust & Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/manifesto" className="hover:text-indigo-600 transition-colors">Privacy Manifesto</Link></li>
              <li><Link href="/security-audit" className="hover:text-indigo-600 transition-colors">Security Disclosures</Link></li>
              <li><Link href="/support" className="hover:text-indigo-600 transition-colors">Customer Support</Link></li>
            </ul>
          </div>
        </div>

        {/* 32-Language Directory Grid (Matching Vaultaire's pSEO structure) */}
        <div className="pt-8 border-t border-slate-200 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Global Locales (32 Languages)
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">
            {languageList.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code === "en" ? "" : lang.code + "/"}`}
                className="hover:text-indigo-600 transition-colors"
                hrefLang={lang.code}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} LinkGrow Systems LLC. All rights reserved.</p>
          <p>Local-First · Zero Identity · AES-256-GCM Cryptographic Security</p>
        </div>
      </div>
    </footer>
  );
}
