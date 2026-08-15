const {
  getGitHubContributions,
} = require("../services/githubService");

const {
  getLeetCodeStats,
} = require("../services/leetcodeService");

const {
  getGFGStats,
} = require("../services/gfgService");

// ==============================
// GitHub Stats
// ==============================
const getGitHubStats = async (req, res) => {
  try {
    const year = req.query.year || new Date().getFullYear();

    const data = await getGitHubContributions(year);

    res.status(200).json(data);
  } catch (error) {
    console.error(
      "GitHub Stats Controller Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch GitHub contributions",
    });
  }
};

// ==============================
// LeetCode Stats
// ==============================
const getLeetCodeStatsController = async (req, res) => {
  try {
    const data = await getLeetCodeStats();

    res.status(200).json(data);
  } catch (error) {
    console.error(
      "LeetCode Stats Controller Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch LeetCode stats",
    });
  }
};

// ==============================
// GeeksforGeeks Stats
// ==============================
const getGFGStatsController = async (req, res) => {
  try {
    const data = await getGFGStats();

    res.status(200).json(data);
  } catch (error) {
    console.error(
      "GFG Stats Controller Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch GFG stats",
    });
  }
};

// ==============================
// Export Controllers
// ==============================
module.exports = {
  getGitHubStats,
  getLeetCodeStatsController,
  getGFGStatsController,
};