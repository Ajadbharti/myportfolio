const axios = require("axios");

const GFG_USERNAME = "azadbharaqt3i";

const BASE_URL = "https://gfg-stats.tashif.codes";

const getGFGStats = async () => {
  try {
    console.log("GFG: Fetching summary...");

    const summaryResponse = await axios.get(
      `${BASE_URL}/${GFG_USERNAME}`,
      {
        timeout: 15000,
      }
    );

    console.log("GFG: Summary fetched");

    console.log("GFG: Fetching heatmap...");

    const heatmapResponse = await axios.get(
      `${BASE_URL}/${GFG_USERNAME}/heatmap`,
      {
        timeout: 15000,
      }
    );

    console.log("GFG: Heatmap fetched");

    const summary =
      summaryResponse.data?.data || {};

    const heatmap =
      heatmapResponse.data?.data || {};

    return {
      success: true,
      username: GFG_USERNAME,

      summary: {
        totalSolved:
          summary.totalSolved ?? 0,

        totalActiveDays:
          summary.totalActiveDays ?? 0,

        totalContests:
          summary.totalContests ?? 0,

        currentRating:
          summary.currentRating ?? null,

        maxRating:
          summary.maxRating ?? null,

        rank:
          summary.rank ?? null,

        badgesCount:
          summary.badgesCount ?? 0,
      },

      heatmap: {
        totalSubmissions:
          heatmap.totalSubmissions ?? 0,

        totalActiveDays:
          heatmap.totalActiveDays ?? 0,

        currentStreak:
          heatmap.currentStreak ?? 0,

        longestStreak:
          heatmap.longestStreak ?? 0,

        maxDailySubmissions:
          heatmap.maxDailySubmissions ?? 0,

        firstActiveDate:
          heatmap.firstActiveDate ?? null,

        lastActiveDate:
          heatmap.lastActiveDate ?? null,

        dailyContributions:
          heatmap.dailyContributions || [],

        yearlyContributions:
          heatmap.yearlyContributions || [],

        availableYears:
          heatmap.availableYears || [],
      },
    };
  } catch (error) {
    console.error(
      "GFG API Error:",
      error.response?.data ||
        error.message
    );

    throw new Error(
      "Unable to fetch GFG stats"
    );
  }
};

module.exports = {
  getGFGStats,
};