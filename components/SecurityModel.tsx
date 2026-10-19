import React from "react";
import { CheckCircle2, ShieldCheck, Terminal, Copy } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Define Your Pattern",
      desc: "Draw a geometric pattern with at least six dots and one direction change. PBKDF2 derives the local vault key in the app process using a hardware-backed iOS Keychain salt.",
      tag: "PBKDF2 600,000 Rounds",
    },
    {
      num: "02",
      title: "Load the Vault",
      desc: "Import photos, videos, confidential documents, and notes. Every file is authenticated and encrypted with AES-256-GCM the millisecond it enters LinkGrow.",
      tag: "AES-256-GCM Authenticated",
    },
    {
      num: "03",
      title: "Lock & Vanish",
      desc: "Exit or lock the app. LinkGrow instantly purges active key material from RAM and wipes memory buffers. Unlocked vaults leave zero plaintext traces on disk.",
      tag: "Instant RAM Key Purge",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-slate-200/90 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            Simple & Uncompromising
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How LinkGrow Works</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No registration emails, no passwords to forget, no corporate servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-sky-600 font-mono">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {step.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecurityModel() {
  return (
    <section id="security" className="py-24 border-t border-slate-200/90 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cryptographic Specs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Security Model: We Don&apos;t Trust Servers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
                We Trust Math.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every design decision in LinkGrow is engineered so that even if Apple, AWS, or LinkGrow developers are subpoenaed or compromised, your photos cannot be recovered.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">AES-256-GCM Authenticated Encryption:</strong> Provides both confidentiality and tamper-proof integrity for every payload.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">PBKDF2-HMAC-SHA512 Key Derivation:</strong> 600,000 computation iterations with secure hardware salts defeat brute-force dictionary attacks.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Zero Cloud Plaintext:</strong> When CloudKit backup is enabled, records are padded and encrypted on-device before transmission.
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 ml-2">linkgrow-crypto-spec.ts</span>
                </div>
                <span className="text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                  FIPS 140-3 Standard
                </span>
              </div>

              <div className="p-5 text-slate-300 space-y-1.5 overflow-x-auto">
                <div>
                  <span className="code-token-key">export const</span> <span className="text-yellow-300">vaultCryptConfig</span> = &#123;
                </div>
                <div className="pl-4">
                  cipher: <span className="code-token-val">&quot;AES-256-GCM&quot;</span>,
                </div>
                <div className="pl-4">
                  kdf: <span className="code-token-val">&quot;PBKDF2-HMAC-SHA512&quot;</span>,
                </div>
                <div className="pl-4">
                  iterations: <span className="code-token-num">600000</span>,
                </div>
                <div className="pl-4">
                  salt: <span className="text-purple-400">iOS_Hardware_Keychain_Salt</span>,
                </div>
                <div className="pl-4">
                  nonceLength: <span className="code-token-num">96</span>, <span className="code-token-comment">// bits unique per record</span>
                </div>
                <div className="pl-4">
                  tagLength: <span className="code-token-num">128</span>, <span className="code-token-comment">// bits GCM auth</span>
                </div>
                <div className="pl-4">
                  clientSideCloudBackup: <span className="code-token-key">true</span>, <span className="code-token-comment">// padded ciphertext only</span>
                </div>
                <div className="pl-4">
                  zeroMemoryOnLock: <span className="code-token-key">true</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-3 code-token-comment">
                  // Servers never receive your master keys.
                </div>
                <div className="code-token-comment">
                  // Only your drawn pattern or phrase unwraps the vault.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
