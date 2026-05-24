import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let users = [];
let activities = [];

io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  // JOIN SESSION
  socket.on("join_session", (data) => {

    const user = {
      id: socket.id,
      username: data.username,
      lastSeen: new Date().toLocaleTimeString(),
    };

    users.push(user);

    io.emit("users_updated", users);

  });

  // HEARTBEAT
  socket.on("heartbeat", () => {

    users = users.map((user) => {

      if (user.id === socket.id) {
        return {
          ...user,
          lastSeen: new Date().toLocaleTimeString(),
        };
      }

      return user;

    });

    io.emit("users_updated", users);

  });

  // ACTIVITY EVENT
  socket.on("activity_event", (data) => {

    const activity = {
      id: Date.now(),
      username: data.username,
      activity: data.activity,
      time: new Date().toLocaleTimeString(),
    };

    activities.unshift(activity);

    io.emit("activity_updated", activities);

  });

  // DISCONNECT
  socket.on("disconnect", () => {

    users = users.filter((user) => user.id !== socket.id);

    io.emit("users_updated", users);

    console.log("User Disconnected");

  });

});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});