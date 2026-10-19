"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, Unlock, Settings, Search, Plus, ShieldAlert, KeyRound, CheckCircle2, RotateCcw } from "lucide-react";

export default function PhoneMockup() {
  // States: 'lock' | 'unlocking' | 'vault'
  const [stage, setStage] = useState<"lock" | "unlocking" | "vault">("lock");
  const [selectedDots, setSelectedDots] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTime, setCurrentTime] = useState("9:41");
  const containerRef = useRef<HTMLDivElement>(null);

  // Default demo pattern coordinates (0 to 24 for 5x5)
  // Demo unlock: dot 2, 7, 12, 13, 14, 19
  const demoPattern = [2, 7, 12, 13, 14, 19];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const mins = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const triggerUnlock = () => {
    setStage("unlocking");
    setTimeout(() => {
      setStage("vault");
    }, 1200);
  };

  const handleDotClick = (idx: number) => {
    if (stage !== "lock") return;
    if (!selectedDots.includes(idx)) {
      const next = [...selectedDots, idx];
      setSelectedDots(next);
      if (next.length >= 5) {
        setTimeout(triggerUnlock, 400);
      }
    }
  };

  const runDemo = () => {
    setSelectedDots([]);
    setStage("lock");
    let current: number[] = [];
    demoPattern.forEach((dot, index) => {
      setTimeout(() => {
        current = [...current, dot];
        setSelectedDots([...current]);
        if (index === demoPattern.length - 1) {
          setTimeout(triggerUnlock, 500);
        }
      }, (index + 1) * 180);
    });
  };

  const resetLock = () => {
    setSelectedDots([]);
    setStage("lock");
  };

  // Helper to compute (x, y) percent for 5x5 grid
  const getDotCoords = (idx: number) => {
    const row = Math.floor(idx / 5);
    const col = idx % 5;
    // spacing in %: 10% 30% 50% 70% 90%
    return {
      x: 10 + col * 20,
      y: 10 + row * 20,
    };
  };

  return (
    <div className="relative mx-auto w-[310px] sm:w-[330px] select-none">
      {/* Decorative Outer Aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/30 to-cyan-500/20 rounded-[55px] blur-2xl -z-10 animate-pulse"></div>

      {/* Phone Hardware Chassis */}
      <div className="relative h-[650px] w-full bg-[#0a0d14] rounded-[50px] p-3.5 border-4 border-[#252d40] phone-shadow flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-slate-800"></div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[9px] font-mono text-emerald-400 font-bold">256</span>
          </div>
        </div>

        {/* Screen Bezel Interior */}
        <div className="relative w-full h-full bg-[#0d1017] rounded-[38px] overflow-hidden flex flex-col pt-7 pb-4 px-3 text-white">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 text-[11px] font-semibold text-slate-400 mb-2">
            <span>{currentTime}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono">5G</span>
              <div className="w-4 h-2.5 rounded-[3px] border border-slate-400 p-[1px] flex items-center">
                <div className="w-full h-full bg-slate-300 rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Screen Content: Stage 1 - Lock Screen */}
          {stage === "lock" && (
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="text-center mt-3">
                <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 mx-auto flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Lock className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-slate-100">Draw Pattern</h3>
                <p className="text-[11px] text-slate-400">Connect 5+ dots to derive AES-256 key</p>
              </div>

              {/* 5x5 Pattern Matrix */}
              <div className="relative w-[240px] h-[240px] mx-auto my-auto" ref={containerRef}>
                {/* Connecting SVG lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  {selectedDots.map((dotIdx, i) => {
                    if (i === 0) return null;
                    const prev = getDotCoords(selectedDots[i - 1]);
                    const curr = getDotCoords(dotIdx);
                    return (
                      <line
                        key={`line-${i}`}
                        x1={`${prev.x}%`}
                        y1={`${prev.y}%`}
                        x2={`${curr.x}%`}
                        y2={`${curr.y}%`}
                        stroke="#8b5cf6"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="transition-all duration-150 drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]"
                      />
                    );
                  })}
                </svg>

                {/* 25 Matrix Dots */}
                <div className="grid grid-cols-5 grid-rows-5 w-full h-full p-2">
                  {Array.from({ length: 25 }).map((_, idx) => {
                    const isSelected = selectedDots.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className="flex items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`rounded-full transition-all duration-200 flex items-center justify-center ${
                            isSelected
                              ? "w-4 h-4 bg-violet-400 shadow-[0_0_12px_#8b5cf6] scale-125"
                              : "w-2.5 h-2.5 bg-slate-600 group-hover:bg-violet-400/80 group-hover:scale-125"
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Interactive Triggers */}
              <div className="space-y-2 px-2">
                <button
                  onClick={runDemo}
                  className="w-full py-2 rounded-xl text-xs font-semibold bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-500/40 transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5 text-violet-400" />
                  <span>Auto-Draw & Unlock Demo</span>
                </button>
                <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 font-mono">
                  <span>PBKDF2: 600K rds</span>
                  <span>AES-GCM zero-leak</span>
                </div>
              </div>
            </div>
          )}

          {/* Screen Content: Stage 2 - Unlocking Animation */}
          {stage === "unlocking" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center animate-spin">
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-violet-400"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Unlock className="w-6 h-6 text-violet-300 animate-pulse" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">Unwrapping Master Key...</p>
                <p className="text-[11px] font-mono text-cyan-400 animate-pulse">
                  SHA-512 salt verify: OK
                </p>
                <p className="text-[10px] text-slate-500">Decrypting on-device SQLite index</p>
              </div>
            </div>
          )}

          {/* Screen Content: Stage 3 - Decrypted Vault */}
          {stage === "vault" && (
            <div className="flex-1 flex flex-col justify-between text-left">
              {/* Vault App Bar */}
              <div className="flex items-center justify-between pt-1 pb-2 border-b border-[#1f2638]">
                <div className="flex items-center gap-1.5">
                  <Settings className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <span className="text-xs font-bold tracking-tight text-slate-200">Vault LG-8842X</span>
                </div>
                <button
                  onClick={resetLock}
                  className="flex items-center gap-1 text-[11px] font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20"
                >
                  <Lock className="w-3 h-3" />
                  <span>Lock</span>
                </button>
              </div>

              {/* Search row */}
              <div className="mt-2.5 flex items-center gap-2 bg-[#161c2b] px-2.5 py-1.5 rounded-lg border border-[#232b3d]">
                <Search className="w-3 h-3 text-slate-400" />
                <span className="text-[11px] text-slate-400">Search 18 decrypted items...</span>
              </div>

              {/* Gallery Header */}
              <div className="flex items-center justify-between mt-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Encrypted Photos (18)</span>
                <span className="text-violet-400 text-[10px]">Zero Cloud Leak</span>
              </div>

              {/* Encrypted Media Grid */}
              <div className="grid grid-cols-3 gap-1.5 mt-2 flex-1 overflow-hidden">
                {[
                  { title: "Tax Returns", tag: "PDF", color: "from-blue-600/40 to-cyan-600/40", time: "0:24" },
                  { title: "Passport", tag: "IMG", color: "from-violet-600/40 to-purple-600/40", time: "0:12" },
                  { title: "Crypto Seed", tag: "RAW", color: "from-emerald-600/40 to-teal-600/40", time: "0:45" },
                  { title: "Private Trip", tag: "VID", color: "from-rose-600/40 to-amber-600/40", time: "1:15" },
                  { title: "Medical Record", tag: "DOC", color: "from-indigo-600/40 to-blue-600/40", time: "0:08" },
                  { title: "Family Vault", tag: "IMG", color: "from-amber-600/40 to-yellow-600/40", time: "0:30" },
                  { title: "Contracts", tag: "PDF", color: "from-cyan-600/40 to-emerald-600/40", time: "0:52" },
                  { title: "Private Cam", tag: "VID", color: "from-purple-600/40 to-pink-600/40", time: "0:19" },
                  { title: "Encrypted Memo", tag: "TXT", color: "from-slate-600/40 to-zinc-600/40", time: "0:05" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`relative rounded-lg bg-gradient-to-br ${item.color} border border-slate-700/40 p-1 flex flex-col justify-between h-[60px] overflow-hidden`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono px-1 rounded bg-black/60 text-slate-300">
                        {item.tag}
                      </span>
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    </div>
                    <div className="text-[9px] font-medium text-slate-200 truncate leading-tight">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Vault bottom bar */}
              <div className="pt-2 flex items-center justify-between border-t border-[#1f2638]">
                <button
                  onClick={resetLock}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Relock Vault</span>
                </button>
                <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shadow-lg text-white">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* Home Indicator Bar */}
          <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2"></div>
        </div>
      </div>

      {/* Floating Interactive Badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[11px] font-semibold text-slate-700 backdrop-blur-md shadow-lg flex items-center gap-2 whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Interactive Sandbox: Draw to Unlock</span>
      </div>
    </div>
  );
}
