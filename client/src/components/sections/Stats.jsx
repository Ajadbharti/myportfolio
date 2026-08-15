import { motion } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const API_URL = "http://localhost:5000/api/stats";

const years = [2026, 2025, 2024];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Stats() {
  const { dark } = useTheme();

  const [platform, setPlatform] = useState("github");
  const [selectedYear, setSelectedYear] = useState(2026);

  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // Fetch data
  // ==========================================
  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError("");

      try {
        let url = "";

        if (platform === "github") {
          url = `${API_URL}/github?year=${selectedYear}`;
        }

        if (platform === "leetcode") {
          url = `${API_URL}/leetcode`;
        }

        if (platform === "gfg") {
          url = `${API_URL}/gfg`;
        }

        const response = await fetch(url);
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Unable to fetch stats"
          );
        }

        if (platform === "github") {
          setGithubData(result);
        }

        if (platform === "leetcode") {
          setLeetcodeData(result);
        }

        if (platform === "gfg") {
          setGfgData(result);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [platform, selectedYear]);

  // ==========================================
  // GitHub real contributions
  // ==========================================
  const githubContributions =
    githubData?.data?.contributions || [];

  const githubTotal =
    githubData?.data?.total?.[selectedYear] || 0;

  const activeDays = useMemo(() => {
    return githubContributions.filter(
      (item) => item.count > 0
    ).length;
  }, [githubContributions]);

  const streak = useMemo(() => {
    let current = 0;
    let best = 0;

    githubContributions.forEach((item) => {
      if (item.count > 0) {
        current++;
        best = Math.max(best, current);
      } else {
        current = 0;
      }
    });

    return best;
  }, [githubContributions]);

  // ==========================================
  // Create graph weeks
  // ==========================================
  const weeks = useMemo(() => {
    if (!githubContributions.length) {
      return [];
    }

    const firstDate = new Date(
      `${selectedYear}-01-01T00:00:00`
    );

    const firstDay = firstDate.getDay();

    const result = [];
    let week = [];

    // Empty cells before Jan 1
    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }

    githubContributions.forEach((item) => {
      week.push(item);

      if (week.length === 7) {
        result.push(week);
        week = [];
      }
    });

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }

      result.push(week);
    }

    return result;
  }, [githubContributions, selectedYear]);

  // ==========================================
  // Month positions
  // ==========================================
  const monthPositions = useMemo(() => {
    const firstDate = new Date(
      `${selectedYear}-01-01T00:00:00`
    );

    const firstDay = firstDate.getDay();

    return months.map((month, index) => {
      const date = new Date(
        selectedYear,
        index,
        1
      );

      const dayDifference = Math.floor(
        (date - firstDate) /
          (1000 * 60 * 60 * 24)
      );

      const week = Math.floor(
        (dayDifference + firstDay) / 7
      );

      return {
        month,
        week,
      };
    });
  }, [selectedYear]);

  // ==========================================
  // LeetCode
  // ==========================================
const leetcode = useMemo(() => {
  if (!leetcodeData) return null;

  const solved = leetcodeData.solved || {};
  const profile = leetcodeData.profile || {};
  const calendar = leetcodeData.calendar || {};

  return {
    total: solved.solvedProblem ?? 0,
    easy: solved.easySolved ?? 0,
    medium: solved.mediumSolved ?? 0,
    hard: solved.hardSolved ?? 0,

    ranking: profile.ranking ?? "—",

    activeDays: calendar.totalActiveDays ?? 0,

    streak: calendar.streak ?? 0,
  };
}, [leetcodeData]);
  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        dark
          ? "bg-[#050505]"
          : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
            <FaCode className="text-cyan-400 text-xl" />
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Coding Activity
          </h2>
        </motion.div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">

          <button
            onClick={() =>
              setPlatform("github")
            }
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
              platform === "github"
                ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                : dark
                ? "border-slate-700 text-slate-400"
                : "border-slate-300 text-slate-500"
            }`}
          >
            <FaGithub />
            GitHub
          </button>

          <button
            onClick={() =>
              setPlatform("leetcode")
            }
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
              platform === "leetcode"
                ? "border-orange-400 text-orange-400 bg-orange-400/10"
                : dark
                ? "border-slate-700 text-slate-400"
                : "border-slate-300 text-slate-500"
            }`}
          >
            <SiLeetcode />
            LeetCode
          </button>

          <button
            onClick={() =>
              setPlatform("gfg")
            }
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
              platform === "gfg"
                ? "border-green-400 text-green-400 bg-green-400/10"
                : dark
                ? "border-slate-700 text-slate-400"
                : "border-slate-300 text-slate-500"
            }`}
          >
            <SiGeeksforgeeks />
            GFG
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <div
            className={`rounded-2xl border p-12 text-center ${
              dark
                ? "bg-[#0d0d0d] border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="w-10 h-10 mx-auto mb-4 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />

            <p className="text-gray-500">
              Fetching real data...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            className={`rounded-2xl border p-10 text-center ${
              dark
                ? "bg-[#0d0d0d] border-red-900"
                : "bg-white border-red-200"
            }`}
          >
            <div className="text-4xl mb-4">
              ⚠️
            </div>

            <h3
              className={`text-xl font-semibold ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Data unavailable
            </h3>

            <p className="text-gray-500 mt-2">
              {error}
            </p>
          </div>
        )}

        {/* =====================================
            GITHUB
        ===================================== */}
        {!loading &&
          !error &&
          platform === "github" && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className={`rounded-2xl border p-6 md:p-8 overflow-hidden ${
                  dark
                    ? "bg-[#0d0d0d] border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >

                {/* Years */}
                <div className="flex justify-end gap-2 mb-7">

                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() =>
                        setSelectedYear(year)
                      }
                      className={`px-5 py-2.5 rounded-xl border ${
                        selectedYear === year
                          ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                          : dark
                          ? "border-slate-700 text-slate-400"
                          : "border-slate-300 text-slate-500"
                      }`}
                    >
                      {year}
                    </button>
                  ))}

                </div>

                {/* Month Labels */}
                <div className="relative ml-9 h-7 min-w-[850px]">

                  {monthPositions.map(
                    ({ month, week }) => (
                      <span
                        key={month}
                        className="absolute text-xs text-gray-500"
                        style={{
                          left: `${week * 17}px`,
                        }}
                      >
                        {month}
                      </span>
                    )
                  )}

                </div>

                {/* Graph */}
                <div className="flex gap-2 overflow-x-auto pb-4">

                  <div className="flex flex-col gap-[5px] w-7 shrink-0">

                    <div className="h-3" />

                    <span className="h-3 text-[9px] text-gray-500">
                      Mon
                    </span>

                    <div className="h-3" />

                    <span className="h-3 text-[9px] text-gray-500">
                      Wed
                    </span>

                    <div className="h-3" />

                    <span className="h-3 text-[9px] text-gray-500">
                      Fri
                    </span>

                    <div className="h-3" />

                  </div>

                  <div className="flex gap-[5px] min-w-max">

                    {weeks.map(
                      (week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col gap-[5px]"
                        >
                          {week.map(
                            (
                              item,
                              dayIndex
                            ) => {

                              if (!item) {
                                return (
                                  <div
                                    key={
                                      dayIndex
                                    }
                                    className="w-3 h-3"
                                  />
                                );
                              }

                              return (
                                <div
                                  key={
                                    dayIndex
                                  }
                                  title={`${item.count} contribution${
                                    item.count !==
                                    1
                                      ? "s"
                                      : ""
                                  } on ${formatDate(
                                    item.date
                                  )}`}
                                  className={`w-3 h-3 rounded-[2px] ${getGitHubColor(
                                    item.level,
                                    dark
                                  )} hover:scale-125 transition-all cursor-pointer`}
                                />
                              );
                            }
                          )}
                        </div>
                      )
                    )}

                  </div>
                </div>

                {/* Bottom */}
                <div
                  className={`border-t mt-6 pt-5 flex flex-col md:flex-row justify-between gap-4 text-sm ${
                    dark
                      ? "border-slate-800 text-gray-500"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <span>
                    {githubTotal} contributions in{" "}
                    {selectedYear}
                  </span>

                  <div className="flex items-center gap-2">
                    <span>Less</span>

                    {[0, 1, 2, 3, 4].map(
                      (level) => (
                        <span
                          key={level}
                          className={`w-3 h-3 rounded-[2px] ${getGitHubColor(
                            level,
                            dark
                          )}`}
                        />
                      )
                    )}

                    <span>More</span>
                  </div>
                </div>

              </motion.div>

              {/* GitHub Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <StatCard
                  dark={dark}
                  icon="🔥"
                  value={streak}
                  label="best streak"
                />

                <StatCard
                  dark={dark}
                  icon="🏅"
                  value={githubTotal}
                  label="total contributions"
                />

                <StatCard
                  dark={dark}
                  icon="✓"
                  value={activeDays}
                  label="active days"
                />

              </div>
            </>
          )}

        {/* =====================================
            LEETCODE
        ===================================== */}
        {!loading &&
          !error &&
          platform === "leetcode" &&
          leetcode && (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={`rounded-2xl border p-8 ${
                dark
                  ? "bg-[#0d0d0d] border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <SiLeetcode className="text-orange-400 text-3xl" />
                </div>

                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    LeetCode
                  </h3>

                  <p className="text-gray-500">
                    @ajad6299
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                <CodingCard
                  dark={dark}
                  value={leetcode.total}
                  label="Total Solved"
                />

                <CodingCard
                  dark={dark}
                  value={leetcode.easy}
                  label="Easy"
                />

                <CodingCard
                  dark={dark}
                  value={leetcode.medium}
                  label="Medium"
                />

                <CodingCard
                  dark={dark}
                  value={leetcode.hard}
                  label="Hard"
                />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                <CodingCard
                  dark={dark}
                  value={leetcode.rating}
                  label="Contest Rating"
                />

                <CodingCard
                  dark={dark}
                  value={leetcode.ranking}
                  label="Ranking"
                />

              </div>

            </motion.div>
          )}

        {/* =====================================
            GFG
        ===================================== */}
        {!loading &&
          !error &&
          platform === "gfg" &&
          gfgData && (
            <div
              className={`rounded-2xl border p-8 ${
                dark
                  ? "bg-[#0d0d0d] border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <SiGeeksforgeeks className="text-green-400 text-3xl" />
                </div>

                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    GeeksforGeeks
                  </h3>

                  <p className="text-gray-500">
                    @azadbharaq3i
                  </p>
                </div>

              </div>

              <p className="text-gray-500 mt-8">
                GFG stats API is currently unavailable
                for this profile.
              </p>

            </div>
          )}

      </div>
    </section>
  );
}

// ==========================================
// Helpers
// ==========================================

function getGitHubColor(level, dark) {
  const colors = [
    dark
      ? "bg-[#1b1b1b]"
      : "bg-slate-200",
    "bg-cyan-950",
    "bg-cyan-800",
    "bg-cyan-500",
    "bg-cyan-400",
  ];

  return colors[
    Math.min(Number(level) || 0, 4)
  ];
}

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

function StatCard({
  dark,
  icon,
  value,
  label,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className={`rounded-2xl border p-7 ${
        dark
          ? "bg-[#0d0d0d] border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center gap-5">

        <div className="text-4xl">
          {icon}
        </div>

        <div>
          <h3
            className={`text-3xl font-bold ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {value}
          </h3>

          <p className="text-gray-500 mt-1">
            {label}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function CodingCard({
  dark,
  value,
  label,
}) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        dark
          ? "bg-slate-900/50 border-slate-800"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <p
        className={`text-3xl font-bold ${
          dark
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {value}
      </p>

      <p className="text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );
}

export default Stats;