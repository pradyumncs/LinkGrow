"use client";

import React, { useState } from "react";
import { Star, QrCode, Smartphone, Check, ArrowRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern">
      {/* Background ambient lighting for white theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] radial-glow pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-5 w-96 h-96 radial-glow-cyan pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Social Proof Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs shadow-sm">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.7</span>
              <span className="text-slate-600">on the App Store</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-indigo-600 font-semibold hidden sm:inline">
                AES-256 · Client-side Crypto · No Account
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Your Hidden album isn&apos;t{" "}
              <span className="relative inline-block text-slate-500 italic font-bold">
                actually hidden.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600">
                LinkGrow is.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold">Your photos move into a vault only your pattern can open.</strong>
              <br />
              Encrypted on your iPhone with AES-256-GCM. No account, no sign-up, no email, no cloud backdoors.
            </p>

            {/* CTA Group */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  id="download"
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download on the App Store</span>
                </a>

                {/* Desktop QR Handoff trigger */}
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition-colors"
                >
                  <QrCode className="w-4 h-4 text-indigo-600" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              {/* QR Code Handoff Card Popup */}
              {showQR && (
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xl max-w-md mx-auto lg:mx-0 flex items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-22 h-22 bg-slate-100 rounded-xl p-2.5 flex items-center justify-center shrink-0 border border-slate-200">
                    <div className="w-full h-full bg-slate-900 rounded grid grid-cols-4 gap-0.5 p-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-[1px] ${
                            [0, 1, 3, 4, 5, 8, 10, 12, 13, 15].includes(i)
                              ? "bg-white"
                              : "bg-slate-900"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      LinkGrow is an iPhone app
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Point your iPhone camera at the code to install directly from the App Store — no account required.
                    </p>
                    <a
                      href="sms:?body=Install LinkGrow Encrypted Vault: https://linkgrow.online"
                      className="inline-block text-[11px] font-semibold text-indigo-600 hover:underline pt-0.5"
                    >
                      or text me the link &rarr;
                    </a>
                  </div>
                </div>
              )}

              {/* Micro-Trust line */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 pt-1 font-medium">
                <span className="flex items-center gap-1 text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Free
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> No Account
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Client-Side Encryption
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
