import React from "react";
import { ShieldCheck, UserX, Key, CloudOff } from "lucide-react";

export function DefinitionSEO() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-normal shadow-sm">
        <p>
          <strong className="text-slate-900 font-semibold">LinkGrow</strong> is a local-first encrypted vault app for iOS that protects photos, videos, and files with <strong>AES-256-GCM</strong> under a random master key unlocked by your pattern. It requires no identity account, stores zero decryption keys on servers, and performs all cryptographic derivations client-side on your device.
        </p>
      </div>
    </div>
  );
}

export function TrustStrip() {
  const items = [
    { icon: UserX, title: "Zero Accounts", desc: "No email or phone number ever requested" },
    { icon: Key, title: "Zero-Knowledge", desc: "Only your drawn pattern can derive master keys" },
    { icon: ShieldCheck, title: "No Backdoors", desc: "Pure client-side cryptographic isolation" },
    { icon: CloudOff, title: "Zero Cloud Exposure", desc: "Ciphertext only, never readable files" },
  ];

  return (
    <section className="py-12 border-y border-slate-200/90 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-1">
                <item.icon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
