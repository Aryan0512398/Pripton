"use client";

import { Timer } from "lucide-react";

interface Props {
  username: string;
  setUsername: (value: string) => void;
  joined: boolean;
  joinSession: () => void;
  sendActivity: (activity: string) => void;
  sessionTime: string;
}

export default function SessionPanel({
  username,
  setUsername,
  joined,
  joinSession,
  sendActivity,
  sessionTime,
}: Props) {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl font-black text-white mb-6">
        Session Control
      </h2>

      {!joined ? (
        <div>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none text-white placeholder:text-zinc-500"
          />

          <button
            onClick={joinSession}
            className="w-full mt-5 bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-[1.02] transition-all text-white rounded-2xl p-4 font-semibold"
          >
            Join Session
          </button>

        </div>
      ) : (
        <div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 mb-5">

            <p className="text-zinc-400">
              Connected as
            </p>

            <h3 className="text-2xl font-bold text-green-400 mt-1">
              {username}
            </h3>

          </div>

          <div className="bg-black/20 rounded-2xl border border-white/10 p-5 mb-5">

            <div className="flex items-center gap-3 mb-3">

              <Timer className="text-violet-400" />

              <p className="text-zinc-400">
                Session Duration
              </p>

            </div>

            <h2 className="text-5xl font-black text-white">
              {sessionTime}
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {[
              "Working",
              "Idle",
              "Need Help",
              "Break",
            ].map((activity) => (

              <button
                key={activity}
                onClick={() => sendActivity(activity)}
                className="bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all rounded-2xl p-4 font-semibold text-white"
              >
                {activity}
              </button>

            ))}

          </div>

        </div>
      )}

    </div>
  );
}