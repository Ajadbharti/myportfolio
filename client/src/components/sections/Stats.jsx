import { motion } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const API_URL = "http://localhost:5000/api/stats";

// Prevent React StrictMode / remounts from repeatedly hitting
// LeetCode and GFG APIs during the same browser session.
const statsCache = {
  leetcode: null,
  gfg: null,
};

const statsPromises = {
  leetcode: null,
  gfg: null,
};


const YEARS = [2026, 2025, 2024];

const MONTHS = [
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
  // Fetch Stats
  // ==========================================
  useEffect(() => {
    let cancelled = false;

    const setSafeLoading = (value) => {
      if (!cancelled) {
        setLoading(value);
      }
    };

    const fetchJson = async (url) => {
      const response = await fetch(url);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to fetch stats"
        );
      }

      return result;
    };

    const fetchStats = async () => {
      try {
        setError("");

        // ------------------------------------------
        // LeetCode: one request per browser session
        // ------------------------------------------
        if (platform === "leetcode") {
          if (leetcodeData) {
            return;
          }

          if (statsCache.leetcode) {
            setLeetcodeData(statsCache.leetcode);
            return;
          }

          setSafeLoading(true);

          if (!statsPromises.leetcode) {
            statsPromises.leetcode = fetchJson(
              `${API_URL}/leetcode`
            )
              .then((result) => {
                statsCache.leetcode = result;
                return result;
              })
              .finally(() => {
                statsPromises.leetcode = null;
              });
          }

          const result =
            await statsPromises.leetcode;

          if (!cancelled) {
            setLeetcodeData(result);
          }

          return;
        }

        // ------------------------------------------
        // GFG: one request per browser session
        // ------------------------------------------
        if (platform === "gfg") {
          if (gfgData) {
            return;
          }

          if (statsCache.gfg) {
            setGfgData(statsCache.gfg);
            return;
          }

          setSafeLoading(true);

          if (!statsPromises.gfg) {
            statsPromises.gfg = fetchJson(
              `${API_URL}/gfg`
            )
              .then((result) => {
                statsCache.gfg = result;
                return result;
              })
              .finally(() => {
                statsPromises.gfg = null;
              });
          }

          const result =
            await statsPromises.gfg;

          if (!cancelled) {
            setGfgData(result);
          }

          return;
        }

        // ------------------------------------------
        // GitHub: year-specific request
        // ------------------------------------------
        setSafeLoading(true);

        const result = await fetchJson(
          `${API_URL}/github?year=${selectedYear}`
        );

        if (!cancelled) {
          setGithubData(result);
        }
      } catch (err) {
        console.error(
          "Stats fetch error:",
          err
        );

        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        setSafeLoading(false);
      }
    };

    fetchStats();

    return () => {
      cancelled = true;
    };
  }, [platform, selectedYear]);

  // ==========================================
  // GitHub Data
  // ==========================================
  const githubContributions =
    githubData?.data?.contributions || [];

  const githubTotal =
    githubData?.data?.total?.[selectedYear] || 0;

  const githubActiveDays = useMemo(() => {
    return githubContributions.filter(
      (item) => Number(item.count) > 0
    ).length;
  }, [githubContributions]);

  const githubBestStreak = useMemo(() => {
    let current = 0;
    let best = 0;

    githubContributions.forEach((item) => {
      if (Number(item.count) > 0) {
        current += 1;
        best = Math.max(best, current);
      } else {
        current = 0;
      }
    });

    return best;
  }, [githubContributions]);

  // ==========================================
  // LeetCode Data
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
      ranking: profile.ranking ?? 0,
      activeDays: calendar.totalActiveDays ?? 0,
      streak: calendar.streak ?? 0,
      submissionCalendar:
        calendar.submissionCalendar || "{}",
    };
  }, [leetcodeData]);

  // ==========================================
  // LeetCode Calendar
  // ==========================================
  const leetcodeContributions = useMemo(() => {
    if (!leetcode?.submissionCalendar) {
      return [];
    }

    try {
      const calendar = JSON.parse(
        leetcode.submissionCalendar
      );

      return Object.entries(calendar).map(
        ([timestamp, count]) => {
          const date = new Date(
            Number(timestamp) * 1000
          );

          const dateString =
            formatLocalDate(date);

          const numericCount =
            Number(count) || 0;

          return {
            date: dateString,
            count: numericCount,
            level: getLeetCodeLevel(
              numericCount
            ),
          };
        }
      );
    } catch (err) {
      console.error(
        "LeetCode calendar parse error:",
        err
      );

      return [];
    }
  }, [leetcode]);

  const leetcodeYearTotal = useMemo(() => {
    return leetcodeContributions
      .filter((item) =>
        item.date.startsWith(
          String(selectedYear)
        )
      )
      .reduce(
        (sum, item) => sum + item.count,
        0
      );
  }, [
    leetcodeContributions,
    selectedYear,
  ]);

  // ==========================================
  // GFG Data
  // ==========================================
  const gfg = useMemo(() => {
    if (!gfgData) return null;

    return {
      summary: gfgData.summary || {},
      heatmap: gfgData.heatmap || {},
    };
  }, [gfgData]);

  const gfgContributions = useMemo(() => {
    return gfg?.heatmap?.dailyContributions || [];
  }, [gfg]);

  const gfgYearTotal = useMemo(() => {
    const yearly =
      gfg?.heatmap?.yearlyContributions || [];

    const currentYear = yearly.find(
      (item) =>
        Number(item.year) ===
        Number(selectedYear)
    );

    return currentYear?.totalSubmissions || 0;
  }, [gfg, selectedYear]);

  const gfgYearActiveDays = useMemo(() => {
    const yearly =
      gfg?.heatmap?.yearlyContributions || [];

    const currentYear = yearly.find(
      (item) =>
        Number(item.year) ===
        Number(selectedYear)
    );

    return currentYear?.activeDays || 0;
  }, [gfg, selectedYear]);

  // ==========================================
  // Current Graph Data
  // ==========================================
  const currentContributions = useMemo(() => {
    if (platform === "github") {
      return githubContributions;
    }

    if (platform === "leetcode") {
      return leetcodeContributions;
    }

    return gfgContributions;
  }, [
    platform,
    githubContributions,
    leetcodeContributions,
    gfgContributions,
  ]);

  const currentTotal = useMemo(() => {
    if (platform === "github") {
      return githubTotal;
    }

    if (platform === "leetcode") {
      return leetcodeYearTotal;
    }

    return gfgYearTotal;
  }, [
    platform,
    githubTotal,
    leetcodeYearTotal,
    gfgYearTotal,
  ]);

  // ==========================================
  // Current Graph
  // ==========================================
  const graphWeeks = useMemo(() => {
    return createYearWeeks(
      selectedYear,
      currentContributions
    );
  }, [
    selectedYear,
    currentContributions,
  ]);

  // ==========================================
  // Current Platform Stats
  // ==========================================
  const platformStats = useMemo(() => {
    if (platform === "github") {
      return {
        first: {
          icon: "🔥",
          value: githubBestStreak,
          label: "best streak",
        },
        second: {
          icon: "🏅",
          value: githubTotal,
          label: "contributions",
        },
        third: {
          icon: "✓",
          value: githubActiveDays,
          label: "active days",
        },
      };
    }

    if (platform === "leetcode") {
      return {
        first: {
          icon: "🔥",
          value: leetcode?.streak ?? 0,
          label: "day streak",
        },
        second: {
          icon: "🏅",
          value: Number(
            leetcode?.ranking || 0
          ).toLocaleString(),
          label: "global rank",
        },
        third: {
          icon: "✓",
          value: leetcode?.total ?? 0,
          label: "questions solved",
        },
      };
    }

    return {
      first: {
        icon: "🔥",
        value: gfg?.heatmap?.currentStreak ?? 0,
        label: "day streak",
      },
      second: {
        icon: "🏅",
        value: gfg?.heatmap?.longestStreak ?? 0,
        label: "longest streak",
      },
      third: {
        icon: "✓",
        value: gfgYearActiveDays,
        label: "active days",
      },
    };
  }, [
    platform,
    githubBestStreak,
    githubTotal,
    githubActiveDays,
    leetcode,
    gfg,
    gfgYearActiveDays,
  ]);

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        dark
          ? "bg-[#050505]"
          : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ========================================
            Heading
        ======================================== */}
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
            Contribution Graph
          </h2>
        </motion.div>

        {/* ========================================
            Platform Tabs
        ======================================== */}
        <div className="flex flex-wrap gap-3 mb-8">

          <PlatformButton
            active={platform === "github"}
            onClick={() =>
              setPlatform("github")
            }
            icon={<FaGithub />}
            label="GitHub"
            color="cyan"
            dark={dark}
          />

          <PlatformButton
            active={platform === "leetcode"}
            onClick={() =>
              setPlatform("leetcode")
            }
            icon={<SiLeetcode />}
            label="LeetCode"
            color="orange"
            dark={dark}
          />

          <PlatformButton
            active={platform === "gfg"}
            onClick={() =>
              setPlatform("gfg")
            }
            icon={<SiGeeksforgeeks />}
            label="GFG"
            color="green"
            dark={dark}
          />

        </div>

        {/* ========================================
            Loading
        ======================================== */}
        {loading && (
          <div
            className={`rounded-2xl border p-16 text-center ${
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

        {/* ========================================
            Error
        ======================================== */}
        {!loading && error && (
          <div
            className={`rounded-2xl border p-12 text-center ${
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

        {/* ========================================
            Graph + Year Selector
        ======================================== */}
        {!loading &&
          !error && (
            <div className="flex flex-col lg:flex-row gap-5">

              {/* Graph */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`flex-1 min-w-0 rounded-2xl border p-6 md:p-8 overflow-hidden ${
                  dark
                    ? "bg-[#0d0d0d] border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <ContributionHeatmap
                  weeks={graphWeeks}
                  selectedYear={
                    selectedYear
                  }
                  total={currentTotal}
                  platform={platform}
                  dark={dark}
                />
              </motion.div>

              {/* Years */}
              <div className="flex lg:flex-col gap-3 lg:pt-8">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() =>
                      setSelectedYear(year)
                    }
                    className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all ${
                      selectedYear === year
                        ? getActiveYearClass(
                            platform
                          )
                        : dark
                        ? "border-slate-800 text-slate-400 bg-[#0d0d0d] hover:border-slate-600"
                        : "border-slate-200 text-slate-500 bg-white hover:border-slate-400"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}

        {/* ========================================
            Platform Cards
        ======================================== */}
        {!loading &&
          !error && (
            <>
              {/* LeetCode extra cards */}
              {platform === "leetcode" &&
                leetcode && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
                  >
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
                  </motion.div>
                )}

              {/* GFG summary cards */}
              {platform === "gfg" &&
                gfg && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
                  >
                    <CodingCard
                      dark={dark}
                      value={
                        gfg.summary?.totalSolved ?? 0
                      }
                      label="Total Solved"
                    />

                    <CodingCard
                      dark={dark}
                      value={
                        gfg.summary?.totalActiveDays ?? 0
                      }
                      label="Active Days"
                    />

                    <CodingCard
                      dark={dark}
                      value={
                        gfg.summary?.totalContests ?? 0
                      }
                      label="Contests"
                    />

                    <CodingCard
                      dark={dark}
                      value={
                        gfg.summary?.badgesCount ?? 0
                      }
                      label="Badges"
                    />
                  </motion.div>
                )}

              {/* Bottom cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                <StatCard
                  dark={dark}
                  icon={
                    platformStats.first.icon
                  }
                  value={
                    platformStats.first.value
                  }
                  label={
                    platformStats.first.label
                  }
                />

                <StatCard
                  dark={dark}
                  icon={
                    platformStats.second.icon
                  }
                  value={
                    platformStats.second.value
                  }
                  label={
                    platformStats.second.label
                  }
                />

                <StatCard
                  dark={dark}
                  icon={
                    platformStats.third.icon
                  }
                  value={
                    platformStats.third.value
                  }
                  label={
                    platformStats.third.label
                  }
                />

              </div>
            </>
          )}

      </div>
    </section>
  );
}

// =====================================================
// Contribution Heatmap
// =====================================================

function ContributionHeatmap({
  weeks,
  selectedYear,
  total,
  platform,
  dark,
}) {
  const monthPositions =
    getMonthPositions(selectedYear);

  return (
    <div className="overflow-x-auto pb-1">

      <div className="min-w-[820px]">

        {/* Month labels */}
        <div className="relative ml-10 h-7">

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
        <div className="flex gap-2">

          {/* Weekday labels */}
          <div className="w-7 shrink-0 flex flex-col gap-[5px]">

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

          {/* Weeks */}
          <div className="flex gap-[5px] min-w-max">

            {weeks.map(
              (week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex flex-col gap-[5px]"
                >
                  {week.map(
                    (day, dayIndex) => {

                      if (!day) {
                        return (
                          <div
                            key={dayIndex}
                            className="w-3 h-3"
                          />
                        );
                      }

                      return (
                        <div
                          key={dayIndex}
                          title={`${day.count} ${getActivityLabel(
                            platform
                          )} on ${formatDate(
                            day.date
                          )}`}
                          className={`w-3 h-3 rounded-[2px] transition-transform hover:scale-125 cursor-pointer ${getHeatmapColor(
                            day.level,
                            platform,
                            dark
                          )}`}
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
            {total}{" "}
            {getActivityLabel(platform)} in{" "}
            {selectedYear}
          </span>

          <div className="flex items-center gap-2">
            <span>Less</span>

            {[0, 1, 2, 3, 4].map(
              (level) => (
                <span
                  key={level}
                  className={`w-3 h-3 rounded-[2px] ${getHeatmapColor(
                    level,
                    platform,
                    dark
                  )}`}
                />
              )
            )}

            <span>More</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// =====================================================
// Platform Button
// =====================================================

function PlatformButton({
  active,
  onClick,
  icon,
  label,
  color,
  dark,
}) {
  const activeClasses = {
    cyan:
      "border-cyan-400 text-cyan-400 bg-cyan-400/10",
    orange:
      "border-orange-400 text-orange-400 bg-orange-400/10",
    green:
      "border-green-400 text-green-400 bg-green-400/10",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
        active
          ? activeClasses[color]
          : dark
          ? "border-slate-700 text-slate-400 hover:border-slate-500"
          : "border-slate-300 text-slate-500 hover:border-slate-400"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

// =====================================================
// Coding Card
// =====================================================

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

// =====================================================
// Stat Card
// =====================================================

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

// =====================================================
// Create complete year weeks
// =====================================================

function createYearWeeks(
  year,
  contributions
) {
  const map = new Map();

  contributions.forEach((item) => {
    if (!item?.date) return;

    map.set(item.date, {
      date: item.date,
      count: Number(item.count) || 0,
      level:
        Number(item.level) ||
        getFallbackLevel(
          Number(item.count) || 0
        ),
    });
  });

  const start = new Date(
    `${year}-01-01T00:00:00`
  );

  const end = new Date(
    `${year}-12-31T00:00:00`
  );

  const days = [];

  const current = new Date(start);

  while (current <= end) {
    const date = formatLocalDate(current);

    const item = map.get(date);

    days.push(
      item || {
        date,
        count: 0,
        level: 0,
      }
    );

    current.setDate(
      current.getDate() + 1
    );
  }

  // Sunday = 0
  const firstDay =
    start.getDay();

  const weeks = [];
  let week = [];

  // Empty cells before Jan 1
  for (
    let i = 0;
    i < firstDay;
    i++
  ) {
    week.push(null);
  }

  days.forEach((day) => {
    week.push(day);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }

    weeks.push(week);
  }

  return weeks;
}

// =====================================================
// Month positions
// =====================================================

function getMonthPositions(year) {
  const firstDate = new Date(
    `${year}-01-01T00:00:00`
  );

  const firstDay =
    firstDate.getDay();

  return MONTHS.map(
    (month, index) => {
      const date = new Date(
        year,
        index,
        1
      );

      const difference =
        Math.floor(
          (date - firstDate) /
            (1000 * 60 * 60 * 24)
        );

      const week = Math.floor(
        (difference + firstDay) / 7
      );

      return {
        month,
        week,
      };
    }
  );
}

// =====================================================
// Heatmap Colors
// =====================================================

function getHeatmapColor(
  level,
  platform,
  dark
) {
  const empty =
    dark
      ? "bg-[#1b1b1b]"
      : "bg-slate-200";

  if (!level) return empty;

  if (platform === "github") {
    const colors = [
      empty,
      "bg-cyan-950",
      "bg-cyan-800",
      "bg-cyan-500",
      "bg-cyan-400",
    ];

    return colors[
      Math.min(level, 4)
    ];
  }

  if (platform === "leetcode") {
    const colors = [
      empty,
      "bg-orange-950",
      "bg-orange-800",
      "bg-orange-500",
      "bg-orange-400",
    ];

    return colors[
      Math.min(level, 4)
    ];
  }

  const colors = [
    empty,
    "bg-green-950",
    "bg-green-800",
    "bg-green-500",
    "bg-green-400",
  ];

  return colors[
    Math.min(level, 4)
  ];
}

// =====================================================
// LeetCode Level
// =====================================================

function getLeetCodeLevel(count) {
  if (count <= 0) return 0;
  if (count >= 10) return 4;
  if (count >= 6) return 3;
  if (count >= 3) return 2;

  return 1;
}

// =====================================================
// Generic fallback level
// =====================================================

function getFallbackLevel(count) {
  if (count <= 0) return 0;
  if (count >= 10) return 4;
  if (count >= 6) return 3;
  if (count >= 3) return 2;

  return 1;
}

// =====================================================
// Activity Label
// =====================================================

function getActivityLabel(platform) {
  if (platform === "leetcode") {
    return "submissions";
  }

  if (platform === "gfg") {
    return "submissions";
  }

  return "contributions";
}

// =====================================================
// Date Helpers
// =====================================================

function formatLocalDate(date) {
  const year =
    date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  if (!date) return "";

  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

function getActiveYearClass(platform) {
  if (platform === "github") {
    return "border-cyan-400 text-cyan-400 bg-cyan-400/10";
  }

  if (platform === "leetcode") {
    return "border-orange-400 text-orange-400 bg-orange-400/10";
  }

  return "border-green-400 text-green-400 bg-green-400/10";
}

export default Stats;