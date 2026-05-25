"use client";

import { ActivityType } from "@/types";

import {
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

interface Props {
  activities: ActivityType[];
  filter: string;
  setFilter: (value: string) => void;
}

export default function ActivityFeed({
  activities,
  filter,
  setFilter,
}: Props) {

  const getActivityColor = (
    activity: string
  ) => {

    switch (activity) {

      case "Working":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/20";

      case "Idle":
        return "bg-orange-500/20 text-orange-300 border-orange-500/20";

      case "Need Help":
        return "bg-red-500/20 text-red-300 border-red-500/20";

      case "Break":
        return "bg-violet-500/20 text-violet-300 border-violet-500/20";

      default:
        return "bg-zinc-500/20 text-zinc-300 border-zinc-500/20";

    }

  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-black text-white">
            Live Feed
          </h2>

          <p className="text-zinc-400 mt-1">
            Realtime activity updates
          </p>

        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="bg-black/20 border border-white/10 rounded-xl px-4 py-2 outline-none text-white"
        >
          <option className="bg-[#111827]">
            All
          </option>

          <option className="bg-[#111827]">
            Working
          </option>

          <option className="bg-[#111827]">
            Idle
          </option>

          <option className="bg-[#111827]">
            Need Help
          </option>

          <option className="bg-[#111827]">
            Break
          </option>

        </select>

      </div>

      <div className="space-y-4 max-h-125 overflow-y-auto pr-2">

        {activities.length === 0 ? (

          <div className="text-center py-10 text-zinc-500">
            No activities yet
          </div>

        ) : (

          activities.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.01,
              }}
              className="bg-black/20 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all"
            >

              <div className="flex items-start justify-between">

                <div className="flex items-start gap-4">

                  <div className="bg-violet-500/20 text-violet-300 p-3 rounded-2xl border border-violet-500/20">

                    <Activity size={20} />

                  </div>

                  <div>

                    <h3 className="font-semibold text-lg text-white">
                      {item.username}
                    </h3>

                    <div
                      className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium border ${getActivityColor(item.activity)}`}
                    >
                      {item.activity}
                    </div>

                  </div>

                </div>

                <span className="text-sm text-zinc-500 whitespace-nowrap">
                  {item.time}
                </span>

              </div>

            </motion.div>

          ))

        )}

      </div>

    </div>
  );
}