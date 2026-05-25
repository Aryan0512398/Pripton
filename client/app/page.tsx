"use client";

import { useEffect, useMemo, useState } from "react";

import { socket } from "@/lib/socket";

import {
  User,
  ActivityType,
} from "@/types";

import { formatTime } from "@/utils/formatTime";

import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import AnalyticsChart from "@/components/AnalyticsChart";
import SessionPanel from "@/components/SessionPanel";
import ActiveUsers from "@/components/ActiveUsers";
import ActivityFeed from "@/components/ActivityFeed";

export default function Home() {

  const [username, setUsername] = useState("");

  const [joined, setJoined] = useState(false);

  const [users, setUsers] = useState<User[]>([]);

  const [activities, setActivities] = useState<ActivityType[]>([]);

  const [seconds, setSeconds] = useState(0);

  const [filter, setFilter] = useState("All");

  useEffect(() => {

    socket.on("connect", () => {

      const savedUsername =
        localStorage.getItem("username");

      if (savedUsername) {

        socket.emit("join_session", {
          username: savedUsername,
        });

        setUsername(savedUsername);

        setJoined(true);

      }

    });

    socket.on(
      "users_updated",
      (updatedUsers: User[]) => {

        setUsers(updatedUsers);

      }
    );

    socket.on(
      "activity_updated",
      (
        updatedActivities: ActivityType[]
      ) => {

        setActivities(updatedActivities);

      }
    );

    return () => {

      socket.off("connect");

      socket.off("users_updated");

      socket.off("activity_updated");

    };

  }, []);

  useEffect(() => {

    if (!joined) return;

    const interval = setInterval(() => {

      socket.emit("heartbeat");

    }, 5000);

    return () => clearInterval(interval);

  }, [joined]);

  // TIMER
  useEffect(() => {

    if (!joined) return;

    const timer = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [joined]);

  const joinSession = () => {

    if (!username.trim()) return;

    socket.emit("join_session", {
      username,
    });

    localStorage.setItem(
      "username",
      username
    );

    setJoined(true);

  };

  const sendActivity = (
    activityType: string
  ) => {

    socket.emit("activity_event", {
      username,
      activity: activityType,
    });

  };

  const exportLogs = () => {

    const dataStr = JSON.stringify(
      activities,
      null,
      2
    );

    const blob = new Blob(
      [dataStr],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "activity-logs.json";

    link.click();

  };

  const filteredActivities =
    useMemo(() => {

      if (filter === "All")
        return activities;

      return activities.filter(
        (item) =>
          item.activity === filter
      );

    }, [activities, filter]);

  // COUNTS
  const workingCount =
    activities.filter(
      (item) =>
        item.activity === "Working"
    ).length;

  const idleCount =
    activities.filter(
      (item) =>
        item.activity === "Idle"
    ).length;

  const helpCount =
    activities.filter(
      (item) =>
        item.activity === "Need Help"
    ).length;

  const breakCount =
    activities.filter(
      (item) =>
        item.activity === "Break"
    ).length;

  const chartData = [
    {
      name: "Working",
      value: workingCount || 12,
    },
    {
      name: "Idle",
      value: idleCount || 5,
    },
    {
      name: "Help",
      value: helpCount || 2,
    },
    {
      name: "Break",
      value: breakCount || 4,
    },
  ];

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">


      <div className="absolute -top-37.5 -left-37.5 h-125 w-125 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute -bottom-37.5 -right-37.5 h-125 w-125 rounded-full bg-cyan-600/20 blur-[140px]" />


      <div className="relative z-10">


        <Navbar
          exportLogs={exportLogs}
        />

        <div className="max-w-400 mx-auto px-6 py-8">


          <div className="mb-8">

            <h1 className="text-5xl font-black tracking-tight">

              Team Activity Dashboard

            </h1>

            <p className="text-zinc-400 mt-3 text-lg">

              Monitor realtime team productivity,
              session activity and collaboration.

            </p>

          </div>

          <StatsCards
            users={users.length}
            working={workingCount}
            idle={idleCount}
            help={helpCount}
          />


          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6 items-start">

            <div className="xl:col-span-2">

              <AnalyticsChart
                data={chartData}
              />

            </div>

            <SessionPanel
              username={username}
              setUsername={setUsername}
              joined={joined}
              joinSession={joinSession}
              sendActivity={sendActivity}
              sessionTime={formatTime(seconds)}
            />

          </div>


          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">

            <ActiveUsers
              users={users}
            />

            <ActivityFeed
              activities={
                filteredActivities
              }
              filter={filter}
              setFilter={setFilter}
            />

          </div>

        </div>

      </div>

    </div>

  );

}