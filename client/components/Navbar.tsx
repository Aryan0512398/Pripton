"use client";

import {
  Bell,
  Download,
  Search,
} from "lucide-react";

interface Props {
  exportLogs: () => void;
}

export default function Navbar({
  exportLogs,
}: Props) {

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/80 backdrop-blur-2xl">

      <div className="max-w-400 mx-auto px-6 py-4 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black tracking-tight bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            PulseBoard
          </h1>

          <p className="text-zinc-400 mt-1">
            Realtime Monitoring Dashboard
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl w-70">

            <Search size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-white placeholder:text-zinc-500"
            />

          </div>

          <button className="bg-white/5 border border-white/10 p-3 rounded-2xl text-white hover:bg-white/10 transition-all">

            <Bell size={18} />

          </button>

          <button
            onClick={exportLogs}
            className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all text-white px-5 py-3 rounded-2xl shadow-lg shadow-violet-500/20"
          >

            <Download size={18} />

            Export

          </button>

        </div>

      </div>

    </header>
  );
}