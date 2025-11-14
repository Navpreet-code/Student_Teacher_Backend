const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectToMongo = require("./db");
connectToMongo();

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the Tutor-Time API!");
});

// Routes
const adminRoutes = require("./routes/adminRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/teachers", teacherRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/messages", messageRoutes);

// Start Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
