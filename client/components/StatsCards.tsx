"use client";

import {
  Users,
  Activity,
  Coffee,
  Siren,
} from "lucide-react";

import { motion } from "framer-motion";

interface Props {
  users: number;
  working: number;
  idle: number;
  help: number;
}

export default function StatsCards({
  users,
  working,
  idle,
  help,
}: Props) {

  const stats = [
    {
      title: "Users",
      value: users,
      icon: Users,
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Working",
      value: working,
      icon: Activity,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Idle",
      value: idle,
      icon: Coffee,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Help",
      value: help,
      icon: Siren,
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              y: -6,
            }}
            className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
          >

            <div
              className={`absolute inset-0 opacity-10 bg-linear-to-br ${item.gradient}`}
            />

            <div className="relative z-10 flex items-center justify-between">

              <div>

                <p className="text-zinc-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-5xl font-black text-white mt-3">
                  {item.value}
                </h2>

              </div>

              <div
                className={`bg-linear-to-br ${item.gradient} p-4 rounded-2xl shadow-lg`}
              >

                <Icon size={28} className="text-white" />

              </div>

            </div>

          </motion.div>
        );

      })}

    </div>
  );
}