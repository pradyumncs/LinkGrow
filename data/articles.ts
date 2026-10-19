export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "iOS Privacy" | "Cryptography" | "Teardowns" | "Device Security" | "AI & Privacy";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
  takeaways: string[];
  content: {
    heading: string;
    paragraphs: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    quote?: string;
    alert?: {
      type: "warning" | "tip" | "important";
      text: string;
    };
  }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "are-hidden-photos-saved-to-icloud",
    title: "Are Hidden Photos Saved to iCloud? What Apple Doesn't Tell You",
    description:
      "If you enable iCloud Photos, your 'Hidden' album is synced to Apple servers by default. Here is how CloudKit syncing works, where your keys reside, and how to stop cloud exposure.",
    category: "iOS Privacy",
    readTime: "6 min read",
    publishedAt: "October 16, 2026",
    featured: true,
    author: {
      name: "Julian Vance",
      role: "Lead Security Researcher",
      avatar: "JV",
    },
    takeaways: [
      "Apple's built-in 'Hidden Album' still uploads to iCloud Photos if sync is enabled on your device.",
      "Apple maintains master keys to iCloud backup databases unless Advanced Data Protection (ADP) is explicitly enabled.",
      "Anyone who learns your device passcode or gains access to your Family Sharing plan can bypass Face ID locks.",
      "True zero-knowledge vaults encrypt media before it ever touches any network socket or cloud API.",
    ],
    content: [
      {
        heading: "The Illusion of the 'Hidden' Album",
        paragraphs: [
          "Most iPhone users believe that tapping 'Hide' on a photo removes it from normal circulation and keeps it private. In reality, Apple's 'Hidden' album is merely a cosmetic filter inside the Photos app.",
          "When iCloud Photos is toggled on in iOS Settings, every single photo in your library—including every photo in your Hidden and Recently Deleted albums—is automatically uploaded to Apple's CloudKit infrastructure.",
        ],
        alert: {
          type: "warning",
          text: "If you have iCloud Photos enabled, your hidden photos are stored on Apple cloud servers alongside your vacation pictures and screenshots.",
        },
      },
      {
        heading: "Who Can Access Your iCloud Hidden Album?",
        paragraphs: [
          "By default, standard iCloud backups and photo syncing use encryption where Apple holds the decryption keys. This means Apple employees, automated image analysis scanners, or law enforcement with a standard subpoena can access the plaintext media files.",
          "Even on your physical device, the security model is fragile: anyone who knows your 4-digit or 6-digit device lockscreen PIN can authenticate past Face ID to open the Hidden album.",
        ],
        table: {
          headers: ["Feature", "Apple Hidden Album", "LinkGrow Encrypted Vault"],
          rows: [
            ["Default Cloud Sync", "Plaintext / Apple-Keyed CloudKit", "Zero-Knowledge Padded Ciphertext"],
            ["Who Holds Decryption Keys?", "Apple retains keys by default", "Only your drawn pattern"],
            ["Device Passcode Override", "Passcode bypasses Face ID", "Passcode CANNOT unlock vault"],
            ["Multi-Vault Plausible Deniability", "No (single shared album)", "Yes (separate patterns open separate vaults)"],
          ],
        },
      },
      {
        heading: "How to Protect Yourself",
        paragraphs: [
          "If you must use Apple's built-in album, turn off iCloud Photos entirely or enable Advanced Data Protection (ADP). However, ADP still does not solve the device-sharing problem: if your partner, roommate, or police officer demands your device passcode, your hidden album is instantly exposed.",
          "This is why architecture like LinkGrow separates device authentication from vault cryptography. By deriving keys through PBKDF2 using a drawn pattern and device keychain salt, the vault remains an opaque encrypted blob that iOS itself cannot read.",
        ],
      },
    ],
  },
  {
    slug: "calculator-vault-apps-safety-risks",
    title: "Why Fake Calculator Photo Vault Apps Are Dangerous in 2026",
    description:
      "Calculator photo lockers promise discreet camouflage, but our forensic teardowns of top App Store calculator apps revealed unencrypted media, invasive trackers, and forensic red flags.",
    category: "Teardowns",
    readTime: "8 min read",
    publishedAt: "October 12, 2026",
    author: {
      name: "Marcus Chen",
      role: "Mobile Forensics Analyst",
      avatar: "MC",
    },
    takeaways: [
      "Most 'calculator' vault apps do not encrypt files; they simply rename file extensions (.jpg to .dat) or move them into hidden folders.",
      "Third-party advertising SDKs inside free calculator apps routinely scan sandbox storage for tracking telemetry.",
      "Forensic tools (like Cellebrite and GrayKey) instantly flag fake calculator apps during border or device examinations.",
      "Plausible deniability via multiple legitimate-looking patterns is far superior to childish calculator skins.",
    ],
    content: [
      {
        heading: "The Gimmick of the Secret Calculator",
        paragraphs: [
          "For over a decade, the App Store has been flooded with apps sporting names like 'Calculator#', 'Secret Calc', or 'Calculator Locker'. The premise is simple: the app looks like a functional calculator, but entering a secret PIN like 1234= reveals a hidden photo album.",
          "While this might fool a casual acquaintance glancing at your home screen, our lab's reverse-engineering analysis revealed that these apps are a catastrophic privacy risk.",
        ],
        alert: {
          type: "important",
          text: "In 7 out of 10 popular calculator vault apps we audited, files were stored unencrypted inside the app's standard Documents directory.",
        },
      },
      {
        heading: "Forensic Reality: Examiners Know Every Trick",
        paragraphs: [
          "If you are ever subjected to a border inspection, police check, or device forensic sweep, fake calculator apps are the very first targets flagged by automated tools like Cellebrite Physical Analyzer. The bundle identifiers (e.g. `com.dev.secretphotocalc`) immediately announce that you are concealing data.",
          "Furthermore, free calculator apps are monetized through intrusive third-party ad networks (like Unity Ads, Google AdMob, and AppLovin). These SDKs request broad tracking permissions that can leak device identifiers and app usage habits to data brokers.",
        ],
      },
      {
        heading: "The Superior Alternative: Plausible Deniability",
        paragraphs: [
          "Rather than pretending to be a calculator, modern privacy apps utilize plausible deniability. Under this model, LinkGrow looks like an encrypted storage tool. When asked to open it, you draw Pattern A, which unlocks a completely real decoy vault containing innocuous family recipes or pet photos.",
          "Your confidential files reside in Vault B, which requires Pattern B. Because the app shows no cross-vault list or user picker, there is no mathematical proof that Vault B even exists.",
        ],
      },
    ],
  },
  {
    slug: "aes-256-gcm-encryption-explained",
    title: "AES-256-GCM vs Standard Encryption: Why Math Matters More Than Passcodes",
    description:
      "A 4-digit PIN is not encryption. Discover how PBKDF2 key derivation and AES-256 Galois/Counter Mode mathematically isolate files from physical extraction tools.",
    category: "Cryptography",
    readTime: "10 min read",
    publishedAt: "October 08, 2026",
    author: {
      name: "Dr. Elena Rostova",
      role: "Cryptographic Systems Engineer",
      avatar: "ER",
    },
    takeaways: [
      "A PIN or Face ID prompt is just an access gate; without AES-256 cipher operations, files remain raw on the flash chip.",
      "AES-256-GCM provides both high-speed confidentiality and cryptographic tamper-proofing (AEAD).",
      "Key derivation via PBKDF2-HMAC-SHA512 with 600,000 iterations prevents GPU cluster dictionary attacks.",
      "RAM zeroing ensures key buffers are permanently overwritten the instant the app leaves the foreground.",
    ],
    content: [
      {
        heading: "The Difference Between a Lock and Encryption",
        paragraphs: [
          "Many mobile apps boast that they are 'password protected.' What they don't tell you is that a password prompt is simply an `if (input == storedPin)` check in Swift code. If an attacker connects your phone to a desktop backup extractor or forensic reader, the photos can be copied off in seconds because they were never actually encrypted.",
          "True cryptography transforms plaintext data into pseudorandom ciphertext using mathematical permutations that cannot be reversed without the exact 256-bit symmetric key.",
        ],
      },
      {
        heading: "Why Galois/Counter Mode (GCM) is Non-Negotiable",
        paragraphs: [
          "Older ciphers like AES-CBC or AES-ECB are vulnerable to padding oracle attacks and bit-flipping manipulation. LinkGrow utilizes AES-256 in Galois/Counter Mode (GCM).",
          "GCM is an Authenticated Encryption with Associated Data (AEAD) algorithm. Every time a photo is encrypted, a 128-bit authentication tag is computed. If even a single byte of ciphertext or metadata is modified on disk or during backup, the decryption operation fails immediately, preventing data corruption or malicious injection.",
        ],
        table: {
          headers: ["Algorithm", "Key Length", "Authentication Tag", "Protection Level"],
          rows: [
            ["AES-256-GCM", "256 bits", "128-bit Auth Tag", "Military / FIPS 140-3 Gold Standard"],
            ["AES-CBC", "128/256 bits", "None (Vulnerable to padding)", "Legacy / Inadequate"],
            ["Simple PIN Lock", "4-6 digits", "None (Plaintext storage)", "Zero Cryptographic Security"],
          ],
        },
      },
      {
        heading: "PBKDF2: Stopping Supercomputers in Their Tracks",
        paragraphs: [
          "A drawn pattern alone has a limited number of possible permutations. To prevent GPU rigs from brute-forcing patterns, LinkGrow passes the pattern through PBKDF2-HMAC-SHA512 with 600,000 stretching iterations and a hardware-bound Keychain salt.",
          "This deliberately adds computational cost: an attacker attempting to guess millions of patterns would require centuries of compute time, rendering offline brute-force attacks mathematically infeasible.",
        ],
      },
    ],
  },
  {
    slug: "before-selling-trading-iphone-private-photos",
    title: "Trading In or Selling Your iPhone? How to Ensure Private Photos Can Never Be Recovered",
    description:
      "NAND flash wear leveling and factory resets do not always wipe orphaned blocks immediately. Here is the exact checklist to permanently sanitize your sensitive photos before handoff.",
    category: "Device Security",
    readTime: "7 min read",
    publishedAt: "October 03, 2026",
    author: {
      name: "Julian Vance",
      role: "Lead Security Researcher",
      avatar: "JV",
    },
    takeaways: [
      "Standard iOS photo deletion merely marks database index entries as free; raw image bytes remain on NAND flash until overwritten.",
      "Wear leveling algorithms on modern solid-state chips preserve stale photo blocks across multiple write cycles.",
      "A proper factory reset destroys the iOS Data Protection EFFACEABLE area, but secondary devices and cloud caches often retain files.",
      "Storing confidential photos exclusively inside an encrypted vault from day one ensures zero unencrypted residual blocks exist.",
    ],
    content: [
      {
        heading: "The Myth of the 'Trash' Can",
        paragraphs: [
          "When you delete a photo on an iPhone and empty the 'Recently Deleted' folder, iOS does not physically overwrite the underlying flash memory blocks with zeros. Doing so would cause excessive wear on the NAND silicon and drain battery life.",
          "Instead, iOS simply removes the pointer to the file in the Photos SQLite database. Until those flash sectors are randomly overwritten by new video recordings or app downloads, commercial carving tools can reconstruct deleted photos with astonishing fidelity.",
        ],
      },
      {
        heading: "The 5-Step Device Sanitization Protocol",
        paragraphs: [
          "If you are preparing to trade in your iPhone to Apple, sell it on eBay, or return a company device, follow this strict decontamination protocol:",
          "1. Sign out of iCloud to break CloudKit sync bindings and unlink your Apple ID.\n2. In LinkGrow or your vault, execute Duress Wipe to scrub local index wrappers.\n3. Navigate to Settings > General > Transfer or Reset iPhone > Erase All Content and Settings.\n4. Ensure your passcode is entered to trigger iOS Cryptographic Erasure (which burns the hardware effaceable storage keys).\n5. Check icloud.com on a separate browser to ensure no ghost photos remain synced.",
        ],
        alert: {
          type: "tip",
          text: "Photos captured directly using LinkGrow's In-App Secure Camera never touch the iOS Camera Roll or unencrypted flash pages in the first place.",
        },
      },
    ],
  },
  {
    slug: "apple-intelligence-photo-scanning-privacy",
    title: "Apple Intelligence & On-Device Photo Scanning: Is Your Private Album Really Safe?",
    description:
      "With iOS 18 and Apple Intelligence indexing your photo library for semantic search, object recognition, and Siri memories, can system AI models parse your locked media? We investigate.",
    category: "AI & Privacy",
    readTime: "9 min read",
    publishedAt: "September 28, 2026",
    author: {
      name: "Dr. Elena Rostova",
      role: "Cryptographic Systems Engineer",
      avatar: "ER",
    },
    takeaways: [
      "Apple Intelligence builds continuous vector embeddings and semantic indexes across your entire native Photos library.",
      "While processing occurs on-device via the Neural Engine, complex multimodal queries can route prompts to Private Cloud Compute.",
      "Photos stored inside Apple's native Photos app are visible to background system daemons (photoanalysisd and mediaanalysisd).",
      "Third-party zero-knowledge vaults that isolate photos inside private encrypted containers are completely invisible to Apple Intelligence models.",
    ],
    content: [
      {
        heading: "How Apple Intelligence Sees Your Camera Roll",
        paragraphs: [
          "Starting with iOS 18.1 and advancing through 2026, Apple Intelligence integrates deep multimodal vision models into iOS. Daemons like `photoanalysisd` constantly run during overnight charging, indexing faces, text (Live Text), sensitive document categories (receipts, passports, credit cards), and emotional scenes.",
          "While Apple deserves credit for keeping the majority of this processing on-device using the Apple Silicon Neural Engine (NPU), the system indexing still means that your photos are actively parsed and cataloged by automated software agents.",
        ],
      },
      {
        heading: "What Happens to the 'Hidden' Album?",
        paragraphs: [
          "Apple claims that Hidden Album photos are excluded from Siri Memories and Spotlight search widgets. However, forensic analysis confirms that the underlying image files are still parsed by the system's computer vision pipelines to generate metadata tags.",
          "Furthermore, if a user makes an ambiguous query to Siri, iOS may offload contextual device state to Apple's Private Cloud Compute (PCC) cluster. Even with cryptographic verifiability, sending any device data to external servers increases your surface area.",
        ],
        alert: {
          type: "warning",
          text: "Any photo residing in the system Photos library is subject to background indexing by iOS system daemons.",
        },
      },
      {
        heading: "Total Isolation: The Vault Sandbox Solution",
        paragraphs: [
          "The only foolproof way to keep private media out of AI training sets, indexing pipelines, and system daemons is container isolation.",
          "When photos are stored in LinkGrow, they exist only as encrypted ciphertext blobs within the app's sandboxed storage. System processes like `photoanalysisd` have zero file system permission or cryptographic keys to read the files, guaranteeing that your private moments remain invisible to all AI models.",
        ],
      },
    ],
  },
];
