"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is LinkGrow?",
      a: "LinkGrow is a local-first encrypted vault app for iPhone. A pattern drawn on a 5×5 grid derives the vault key that unwraps a random AES-256-GCM master key. Separate configured patterns can open separate vaults without a visible cross-vault list. LinkGrow requires no identity account and stores no keys on any server.",
    },
    {
      q: "What happens if I forget my pattern?",
      a: "You are provided with a 9-word secret recovery phrase during setup that recovers the vault. However, if you forget that too, the data is mathematically unrecoverable. We do not store keys or have any backdoor into your data.",
    },
    {
      q: "Can Apple or cloud providers see my files?",
      a: "No. LinkGrow encrypts all backup components on-device with a separate pattern-derived backup key before uploading padded records to your private CloudKit database. Apple receives ciphertext and an encrypted recovery manifest, not readable vault files or plaintext keys.",
    },
    {
      q: "Do I need an account to use LinkGrow?",
      a: "Absolutely not. LinkGrow works immediately upon download. No email, no phone number, no password creation, and no signup flow.",
    },
    {
      q: "What kind of data can I store?",
      a: "Any file type can be stored and protected. This includes photos, raw media, videos, voice memos, PDFs, spreadsheets, and confidential notes.",
    },
    {
      q: "How many vaults can I create?",
      a: "In the free version you can create up to 3 vaults holding 100 photos and 10 videos in total. With LinkGrow Pro, you can create unlimited vaults with unlimited file capacity.",
    },
    {
      q: "Do you collect analytical or telemetry data?",
      a: "Anonymous crash diagnostics are optional and can be turned completely off with a single toggle in Settings. There is no account, name, or email attached to your device. We have no idea who you are or what is stored in your vaults.",
    },
    {
      q: "Why is LinkGrow safer than a 'Calculator' fake vault?",
      a: "Anyone searching your phone will quickly notice that a calculator app requiring a password or asking for photo permissions is fake. Furthermore, most calculator apps store unencrypted files in standard directories. LinkGrow does not rely on childish camouflage—it uses plausible deniability where different patterns open different vaults, with true AES-256-GCM authenticated encryption.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-slate-200/90 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about LinkGrow&apos;s encryption model and privacy guarantees.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50/70 border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
