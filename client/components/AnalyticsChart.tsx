"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

export default function AnalyticsChart({
  data,
}: Props) {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white">
          Activity Analytics
        </h2>

        <p className="text-zinc-400 mt-2">
          Realtime monitoring insights
        </p>

      </div>

      <div className="w-full h-[350px] min-h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="activityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                  stopOpacity={0.5}
                />

                <stop
                  offset="100%"
                  stopColor="#8b5cf6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#27272a"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
              stroke="#a1a1aa"
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #27272a",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              fill="url(#activityGradient)"
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}