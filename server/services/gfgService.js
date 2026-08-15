const axios = require("axios");

const GFG_USERNAME = "azadbharaq3i";

const getGFGStats = async () => {
  try {
    const response = await axios.get(
      `https://gfgstatscard.vercel.app/${GFG_USERNAME}?raw=true`,
      {
        timeout: 15000,
      }
    );

    return {
      success: true,
      username: GFG_USERNAME,
      data: response.data,
    };
  } catch (error) {
    console.error(
      "GFG API Error:",
      error.response?.data || error.message
    );

    throw new Error("Unable to fetch GFG stats");
  }
};

module.exports = {
  getGFGStats,
};