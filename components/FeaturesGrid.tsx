import React from "react";
import {
  Grid,
  KeyRound,
  EyeOff,
  FolderLock,
  AlertTriangle,
  Cloud,
  Share2,
  Smartphone,
  Camera,
  Layers,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Grid,
      badge: "Core Crypto",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: "5×5 Pattern Encryption",
      desc: "Draw a shape on a 5×5 matrix. PBKDF2-HMAC-SHA512 combines your drawn pattern with a hardware Keychain salt over 600,000 iterations to derive a 256-bit AES vault key.",
    },
    {
      icon: KeyRound,
      badge: "Self-Sovereign",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      title: "Secret Recovery Phrase",
      desc: "Every vault generates a nine-word secret phrase. The phrase derives a separate recovery key opening an encrypted access envelope. Zero central key escrow.",
    },
    {
      icon: EyeOff,
      badge: "Stealth Moat",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Plausible Deniability",
      desc: "Separate configured patterns address completely separate encrypted vaults. No master vault list is ever shown in the interface, protecting you from coerced inspection.",
    },
    {
      icon: FolderLock,
      badge: "Architecture",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      title: "Hidden Isolated Vaults",
      desc: "The unlock interface gives zero hints of how many vaults exist. Each vault operates on an isolated SQLite database with unique initialization vectors.",
    },
    {
      icon: AlertTriangle,
      badge: "Coercion Panic",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      title: "Duress Panic Mode",
      desc: "Draw a designated panic pattern under duress: LinkGrow unlocks a harmless decoy vault while silently destroying sensitive local indexes on the device.",
    },
    {
      icon: Cloud,
      badge: "Free + Pro",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Encrypted CloudKit Backup",
      desc: "A separate pattern-derived backup key encrypts padded records before CloudKit receives them. Apple only ever stores opaque ciphertext blobs.",
    },
    {
      icon: Share2,
      badge: "Collaboration",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      title: "Secure Ephemeral Sharing",
      desc: "Share encrypted vaults with recipients via one-time passphrases. Configure open limits, self-destruct timers, and prevent media exports.",
    },
    {
      icon: Smartphone,
      badge: "LinkGrow Pro",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: "Cross-Device Sync",
      desc: "Seamlessly access your encrypted vaults across your iPhone, iPad, and Mac. Data is encrypted before leaving device memory.",
    },
    {
      icon: Camera,
      badge: "Zero-Trace",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      title: "Secure In-App Camera",
      desc: "Capture photos and videos directly inside the encrypted vault. Content bypasses the iOS Camera Roll entirely—no originals left behind to delete.",
    },
    {
      icon: Layers,
      badge: "LinkGrow Pro",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      title: "Disguise App Icons",
      desc: "Camouflage LinkGrow as a Calculator, Notes app, Printer utility, or Stocks widget. Every icon still routes to the secure pattern screen.",
    },
    {
      icon: Shield,
      badge: "Zero Backdoors",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Defense in Depth",
      desc: "AES-256-GCM protects file contents, EXIF metadata, thumbnail caches, and index trees. Key buffers are zeroed out on deallocation.",
    },
    {
      icon: Zap,
      badge: "Seamless UX",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Instant Unlock & Lock",
      desc: "Security that feels like unlocking your phone. Zero tedious passwords or setup wizards—draw your pattern and start safeguarding files.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
            <span>Client-Side Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Is Zero-Knowledge Encryption?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Your files never leave your device in readable form. We build privacy architecture, not centralized data vacuums.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-2xl bg-white hover:bg-slate-50/70 border border-slate-200/90 hover:border-indigo-300 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                <span>Learn security spec</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
