const axios = require("axios");

const LEETCODE_USERNAME = "ajad6299";

const BASE_URL = "https://alfa-leetcode-api.onrender.com";

const getLeetCodeStats = async () => {
  try {
    const [profile, solved, contest, calendar] = await Promise.all([
      axios.get(`${BASE_URL}/${LEETCODE_USERNAME}`),
      axios.get(`${BASE_URL}/${LEETCODE_USERNAME}/solved`),
      axios.get(`${BASE_URL}/${LEETCODE_USERNAME}/contest`),
      axios.get(`${BASE_URL}/${LEETCODE_USERNAME}/calendar`),
    ]);

    return {
      success: true,
      username: LEETCODE_USERNAME,

      profile: profile.data,
      solved: solved.data,
      contest: contest.data,
      calendar: calendar.data,
    };
  } catch (error) {
    console.error(
      "LeetCode API Error:",
      error.response?.data || error.message
    );

    throw new Error("Unable to fetch LeetCode stats");
  }
};

module.exports = {
  getLeetCodeStats,
};