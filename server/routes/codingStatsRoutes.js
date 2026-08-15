const express = require("express");

const {
  getGitHubStats,
  getLeetCodeStatsController,
  getGFGStatsController,
} = require("../controllers/codingStatsController");

const router = express.Router();

// GitHub
router.get("/github", getGitHubStats);

// LeetCode
router.get("/leetcode", getLeetCodeStatsController);

// GeeksforGeeks
router.get("/gfg", getGFGStatsController);

module.exports = router;