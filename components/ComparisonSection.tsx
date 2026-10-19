import React from "react";
import { Check, X, ShieldAlert, ArrowRight } from "lucide-react";

export function ConvictionSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 mx-auto flex items-center justify-center shadow-sm">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Someone takes your phone. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-indigo-600">
            Now what?
          </span>
        </h2>

        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          Most vault apps prove you have something to hide. A locked folder or a PIN prompt is an immediate confession. A fake &ldquo;calculator&rdquo; app fools nobody who is actually looking.
        </p>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          LinkGrow does not open to a list of named vaults. <strong>Each pattern addresses its own isolated encrypted index.</strong> Enter Pattern A for decoy family photos; enter Pattern B for confidential records. The interface gives zero indication that Vault B even exists.
        </p>

        <div className="pt-4">
          <a
            href="/#download"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span>Get LinkGrow on iPhone</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "True AES-256-GCM Encryption",
      linkgrow: true,
      apple: false,
      keepsafe: "Proprietary Cloud",
      calc: false,
    },
    {
      feature: "Plausible Deniability (Multi-Vault)",
      linkgrow: true,
      apple: false,
      keepsafe: false,
      calc: false,
    },
    {
      feature: "Duress Panic Wipe Mode",
      linkgrow: true,
      apple: false,
      keepsafe: false,
      calc: false,
    },
    {
      feature: "Zero Accounts / No Email Required",
      linkgrow: true,
      apple: false,
      keepsafe: false,
      calc: true,
    },
    {
      feature: "Zero-Knowledge Cloud Backup",
      linkgrow: true,
      apple: false,
      keepsafe: false,
      calc: false,
    },
    {
      feature: "No In-App Ads / Data Tracking",
      linkgrow: true,
      apple: true,
      keepsafe: false,
      calc: false,
    },
    {
      feature: "In-App Direct Camera (Zero Camera Roll)",
      linkgrow: true,
      apple: false,
      keepsafe: true,
      calc: true,
    },
  ];

  return (
    <section id="compare" className="py-24 border-t border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            The Competitive Reality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How LinkGrow Compares
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Real cryptographic mathematics & duress architecture — not a cosmetic PIN screen or calculator disguise.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-12">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700">
                <th className="py-4 px-6">Security & Privacy Feature</th>
                <th className="py-4 px-6 text-indigo-700 bg-indigo-50/70 border-x border-slate-200 font-extrabold">
                  LinkGrow
                </th>
                <th className="py-4 px-6 text-slate-600">Apple Hidden Album</th>
                <th className="py-4 px-6 text-slate-600">Keepsafe</th>
                <th className="py-4 px-6 text-slate-600">Calculator Vaults</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                  
                  {/* LinkGrow Column */}
                  <td className="py-4 px-6 bg-indigo-50/40 border-x border-slate-200 text-center font-bold">
                    {row.linkgrow === true ? (
                      <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5" /> Yes
                      </span>
                    ) : (
                      <span>{row.linkgrow}</span>
                    )}
                  </td>

                  {/* Apple Hidden Album */}
                  <td className="py-4 px-6 text-center">
                    {row.apple === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : row.apple === false ? (
                      <X className="w-4 h-4 text-rose-500 mx-auto" />
                    ) : (
                      <span className="text-xs text-slate-500">{row.apple}</span>
                    )}
                  </td>

                  {/* Keepsafe */}
                  <td className="py-4 px-6 text-center">
                    {row.keepsafe === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : row.keepsafe === false ? (
                      <X className="w-4 h-4 text-rose-500 mx-auto" />
                    ) : (
                      <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">{row.keepsafe}</span>
                    )}
                  </td>

                  {/* Calculator Vaults */}
                  <td className="py-4 px-6 text-center">
                    {row.calc === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : row.calc === false ? (
                      <X className="w-4 h-4 text-rose-500 mx-auto" />
                    ) : (
                      <span className="text-xs text-slate-500">{row.calc}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Competitor Teaser Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "LinkGrow vs Apple Hidden Album",
              desc: "Why anyone with your device passcode or Face ID can open Apple's album.",
            },
            {
              title: "LinkGrow vs Keepsafe",
              desc: "How central cloud accounts and advertising trackers compromise your intimacy.",
            },
            {
              title: "LinkGrow vs Private Photo Vault",
              desc: "Analyzing PIN recovery flaws and cloud sync leakage.",
            },
            {
              title: "LinkGrow vs Calculator Apps",
              desc: "Why fake calculator apps get flagged immediately during physical searches.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
                <span>Read teardown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
