"use client";

import { User } from "@/types";

import {
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

interface Props {
  users: User[];
}

export default function ActiveUsers({
  users,
}: Props) {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-black text-white">
            Active Users
          </h2>

          <p className="text-zinc-400 mt-1">
            Live connected members
          </p>

        </div>

        <div className="flex items-center gap-2 bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold border border-violet-500/20">

          <Users size={16} />

          {users.length} Online

        </div>

      </div>

      <div className="space-y-4">

        {users.length === 0 ? (

          <div className="text-center py-10 text-zinc-500">
            No active users
          </div>

        ) : (

          users.map((user) => (

            <motion.div
              key={user.id}
              whileHover={{
                scale: 1.02,
              }}
              className="bg-black/20 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {user.username}
                  </h3>

                  <p className="text-zinc-400 mt-1">
                    Last heartbeat:
                    {" "}
                    {user.lastSeen}
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-green-400 text-sm font-medium">
                    Active
                  </span>

                </div>

              </div>

            </motion.div>

          ))

        )}

      </div>

    </div>
  );
}