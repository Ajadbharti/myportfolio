const { getContribution } = require("github-contribution-api");

const GITHUB_USERNAME = "Ajadbharti";

const getGitHubContributions = async (year) => {
  try {
    const result = await getContribution(
      GITHUB_USERNAME,
      {
        year: Number(year),
        format: "array",
        cache: false,
      }
    );

    return {
      success: true,
      username: GITHUB_USERNAME,
      year: Number(year),
      data: result,
    };
  } catch (error) {
    console.error(
      "GitHub API Error:",
      error.message
    );

    throw new Error(
      "Unable to fetch GitHub contributions"
    );
  }
};

module.exports = {
  getGitHubContributions,
};