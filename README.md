
# TechVerse

IT Service Hub is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It serves as a service management and client interaction platform for an IT company that provides various IT services such as web development, software solutions, cybersecurity, cloud computing, and technical support.

The platform enables clients to request services, track project progress, communicate with IT professionals, and manage service contracts efficiently. The system also includes an admin dashboard for managing clients, service requests, and project assignments.


## Installation

Frontend Setup (Client)

 - Navigate to the client directory
```bash
  cd client
```

- Install dependencies
```bash
  npm install
```

- Setup .env file
```bash
  VITE_API_URL=http://localhost:5000
```

- Start the frontend server
```bash
  npm run dev
```
- Open http://localhost:5173 (or as shown in terminal)


Backend Setup (Server)

- Navigate to the client directory

```bash
  cd server
```

- Install dependencies
```bash
  npm install
```

- Setup .env file
```bash
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-secret-key
PORT=
```

- Start the backend server
```bash
  npm start
```
## Tech Stack

**Client:** React, CSS

**Server:** Node, Express

**Database**: MongoDB

**Authentication**:JWT

