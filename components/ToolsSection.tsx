import React from "react";
import { EyeOff, FileText, SunMedium, Sparkles, ArrowRight, Shield } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      title: "Face Blur & Anonymizer",
      desc: "Detect and redact faces locally in your browser before uploading photos anywhere.",
      icon: EyeOff,
      badge: "In-Browser WASM",
    },
    {
      title: "EXIF & GPS Stripper",
      desc: "Remove camera model, geo-coordinates, and timestamp metadata from JPEG, PNG & HEIC.",
      icon: FileText,
      badge: "Client-Side Zero-Trace",
    },
    {
      title: "HDR Image Converter",
      desc: "Convert iOS Ultra-HDR and Apple ProRAW formats to private standard color spaces.",
      icon: SunMedium,
      badge: "Zero Uploads",
    },
    {
      title: "Hidden Photo Steganography",
      desc: "Analyze images for embedded payloads or verify cryptographic watermarks.",
      icon: Sparkles,
      badge: "Forensics Utility",
    },
  ];

  return (
    <section id="tools" className="py-24 border-t border-slate-200/90 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
            <Shield className="w-3.5 h-3.5" />
            <span>Free Web Utilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Client-Side Privacy Tools
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Free browser-based tools that execute 100% locally on your computer or phone. Your media is never uploaded to any server.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <t.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {t.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700">
                <span>Launch Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
