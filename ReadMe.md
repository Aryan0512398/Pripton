# PulseBoard 🚀

PulseBoard is a modern realtime team activity monitoring dashboard built using Next.js, TypeScript, Socket.IO, and Tailwind CSS.

It helps teams monitor live user activity, session status, analytics, and realtime collaboration events through an interactive and modern SaaS-style dashboard.

---

# 🌟 Features

## ✅ Realtime Monitoring
- Live activity updates using Socket.IO
- Active user tracking
- Heartbeat-based online detection
- Instant UI synchronization

## ✅ Analytics Dashboard
- Realtime analytics charts
- Activity distribution tracking
- Live productivity insights

## ✅ Session Management
- Join live session
- Track session duration
- Send activity status updates

## ✅ Activity Feed
- Realtime activity stream
- Activity filtering
- Timestamp tracking

## ✅ Modern UI
- Fully responsive layout
- Modern SaaS dashboard design
- Glassmorphism effects
- Framer Motion animations
- Premium dark theme

## ✅ Export Functionality
- Export activity logs as JSON

---

# 🛠️ Tech Stack

## Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React

## Backend
- Node.js
- Express.js
- Socket.IO

---

# 📂 Project Structure

```bash
client/
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── StatsCards.tsx
│   ├── AnalyticsChart.tsx
│   ├── SessionPanel.tsx
│   ├── ActiveUsers.tsx
│   └── ActivityFeed.tsx
│
├── lib/
│   └── socket.ts
│
├── types/
│   └── index.ts
│
└── utils/
    └── formatTime.ts
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

Frontend:
```bash
http://localhost:3000
```

Backend:
```bash
http://localhost:5000
```

---

# 🔌 Socket Events

## Client → Server

| Event Name | Description |
|---|---|
| join_session | Join realtime session |
| heartbeat | Send active heartbeat |
| activity_event | Send activity update |

---

## Server → Client

| Event Name | Description |
|---|---|
| users_updated | Broadcast active users |
| activity_updated | Broadcast activities |

---

# 📊 Dashboard Features

## Activity States
- Working
- Idle
- Need Help
- Break

## Analytics
- Realtime activity chart
- Online user monitoring
- Session tracking

---

# 🎨 UI Highlights

- Modern SaaS Design
- Responsive Layout
- Animated Components
- Glassmorphism Cards
- Gradient Effects
- Interactive Charts

---

# 📱 Responsive Design

The dashboard is optimized for:
- Mobile Devices
- Tablets
- Laptops
- Large Screens

---

# 🚀 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render / Railway

---

# 🔒 Future Improvements

- Authentication System
- Team Rooms
- Notifications
- AI Insights
- Database Integration
- User Avatars
- Activity History
- Role Management

---

# 📈 Scalability & System Design (Option C)

## 🔹 WebSocket Scaling

For large-scale realtime communication systems, Socket.IO can be horizontally scaled using the Redis Adapter.

This allows:
- multiple backend instances
- synchronized socket events
- distributed realtime communication

Example technologies:
- Redis Pub/Sub
- Socket.IO Redis Adapter

---

## 🔹 Reverse Proxy & Load Balancing

In production environments, NGINX can be used as a reverse proxy for:

- SSL termination
- websocket upgrades
- load balancing
- request routing

This improves scalability and reliability.

---

## 🔹 Monitoring & Observability

Realtime systems require monitoring for:
- active socket connections
- server health
- memory usage
- event latency

Tools commonly used:
- Prometheus
- Grafana
- Winston Logs

---

## 🔹 Frontend Optimization

Frontend performance can be improved using:

- code splitting
- lazy loading
- memoization
- optimized rendering
- SSR capabilities of Next.js

---

## 🔹 Future Scalability Improvements

Potential improvements for enterprise-scale deployment:

- Docker containerization
- Kubernetes orchestration
- Redis caching
- JWT authentication
- Database persistence
- Multi-room architecture
- Activity history storage

---

## 🔹 Engineering Learnings

Through this project, the following concepts were explored:

- Realtime event-driven architecture
- WebSocket communication
- State synchronization
- Presence detection systems
- Realtime dashboard design
- Scalable frontend architecture
- Modern UI/UX practices

## ScreenShot
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/ef2f14ab-17ec-4f74-ab2e-e275fb672247" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/38f6e482-6f65-4ecf-a610-fde840cf74d6" />
<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/20d48735-c1ce-424c-b93c-d9416365c0c7" />
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/bdfb082e-19f2-4f3a-a456-7d1cf2968eb0" />
<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/9701962b-472e-4738-af4e-4aadc8821473" />


# 👨‍💻 Author

Aryan Gupta

---

# 📄 License

This project is developed for internship assignment and educational purposes.
