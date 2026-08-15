const axios = require("axios");

const LEETCODE_USERNAME = "ajad6299";
const BASE_URL = "https://alfa-leetcode-api.onrender.com";

// Cache for 30 minutes
const CACHE_DURATION = 30 * 60 * 1000;

let cachedData = null;
let cachedAt = 0;

const getLeetCodeStats = async () => {
  const now = Date.now();

  // ==========================================
  // Return cached data if still valid
  // ==========================================
  if (
    cachedData &&
    now - cachedAt < CACHE_DURATION
  ) {
    console.log(
      "LeetCode: Returning cached data"
    );

    return cachedData;
  }

  try {
    console.log(
      "LeetCode: Fetching fresh data..."
    );

    const profileResponse = await axios.get(
      `${BASE_URL}/${LEETCODE_USERNAME}`,
      {
        timeout: 15000,
      }
    );

    const solvedResponse = await axios.get(
      `${BASE_URL}/${LEETCODE_USERNAME}/solved`,
      {
        timeout: 15000,
      }
    );

    const contestResponse = await axios.get(
      `${BASE_URL}/${LEETCODE_USERNAME}/contest`,
      {
        timeout: 15000,
      }
    );

    const calendarResponse = await axios.get(
      `${BASE_URL}/${LEETCODE_USERNAME}/calendar`,
      {
        timeout: 15000,
      }
    );

    const data = {
      success: true,
      username: LEETCODE_USERNAME,

      profile: profileResponse.data,
      solved: solvedResponse.data,
      contest: contestResponse.data,
      calendar: calendarResponse.data,
    };

    // Save successful response
    cachedData = data;
    cachedAt = now;

    console.log(
      "LeetCode: Fresh data cached successfully"
    );

    return data;
  } catch (error) {
    console.error(
      "LeetCode API Error:",
      error.response?.data ||
        error.message
    );

    // ==========================================
    // If API fails but old cache exists,
    // return cached data
    // ==========================================
    if (cachedData) {
      console.log(
        "LeetCode: API failed, returning cached data"
      );

      return {
        ...cachedData,
        cached: true,
      };
    }

    throw new Error(
      "Unable to fetch LeetCode stats"
    );
  }
};

module.exports = {
  getLeetCodeStats,
};