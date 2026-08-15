const express = require("express");
const cors = require("cors");
require("dotenv").config();

const codingStatsRoutes = require("./routes/codingStatsRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Coding Stats Routes
app.use("/api/stats", codingStatsRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Stats API is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});