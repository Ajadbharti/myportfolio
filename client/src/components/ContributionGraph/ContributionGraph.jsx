import { useMemo } from "react";

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

function ContributionGraph({
  contributions = [],
  year,
  total,
  platform,
  dark,
}) {
  // ==========================================
  // Convert incoming data into date map
  // ==========================================
  const contributionMap = useMemo(() => {
    const map = new Map();

    contributions.forEach((item) => {
      if (!item?.date) return;

      map.set(item.date, {
        count: Number(item.count) || 0,
        level: Number(item.level) || 0,
      });
    });

    return map;
  }, [contributions]);

  // ==========================================
  // Generate complete year
  // ==========================================
  const days = useMemo(() => {
    const result = [];

    const start = new Date(
      `${year}-01-01T00:00:00`
    );

    const end = new Date(
      `${year}-12-31T00:00:00`
    );

    const current = new Date(start);

    while (current <= end) {
      const date = formatDate(current);

      const data = contributionMap.get(
        date
      );

      result.push({
        date,
        count: data?.count || 0,
        level: data?.level || 0,
      });

      current.setDate(
        current.getDate() + 1
      );
    }

    return result;
  }, [year, contributionMap]);

  // ==========================================
  // Convert into Sunday-Saturday weeks
  // ==========================================
  const weeks = useMemo(() => {
    if (!days.length) return [];

    const firstDate = new Date(
      `${days[0].date}T00:00:00`
    );

    const firstDay =
      firstDate.getDay();

    const result = [];
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
  }, [days]);

  // ==========================================
  // Month positions
  // ==========================================
  const monthPositions = useMemo(() => {
    const firstDate = new Date(
      `${year}-01-01T00:00:00`
    );

    const firstDay =
      firstDate.getDay();

    return months.map(
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
  }, [year]);

  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 overflow-hidden ${
        dark
          ? "bg-[#0d0d0d] border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      {/* ======================================
          Month Labels
      ====================================== */}
      <div className="overflow-x-auto">
        <div className="min-w-[850px]">

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

          {/* ======================================
              Graph
          ====================================== */}
          <div className="flex gap-2">

            {/* Weekday labels */}
            <div className="flex flex-col gap-[5px] w-8 shrink-0">

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

            {/* Contribution columns */}
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
                            title={`${day.count} ${getActivityName(
                              platform
                            )} on ${formatTooltipDate(
                              day.date
                            )}`}
                            className={`w-3 h-3 rounded-[2px] ${
                              getLevelColor(
                                day.level,
                                day.count,
                                platform,
                                dark
                              )
                            } hover:scale-125 transition-transform cursor-pointer`}
                          />
                        );
                      }
                    )}
                  </div>
                )
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ======================================
          Bottom Info
      ====================================== */}
      <div
        className={`border-t mt-6 pt-5 flex flex-col md:flex-row justify-between gap-4 text-sm ${
          dark
            ? "border-slate-800 text-gray-500"
            : "border-slate-200 text-slate-500"
        }`}
      >
        <span>
          {total} {getActivityName(platform)} in{" "}
          {year}
        </span>

        <div className="flex items-center gap-2">
          <span>Less</span>

          {[0, 1, 2, 3, 4].map(
            (level) => (
              <span
                key={level}
                className={`w-3 h-3 rounded-[2px] ${getLevelColor(
                  level,
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
  );
}

// ==========================================
// Helpers
// ==========================================

function formatDate(date) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatTooltipDate(date) {
  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getActivityName(platform) {
  if (platform === "leetcode") {
    return "submissions";
  }

  if (platform === "gfg") {
    return "submissions";
  }

  return "contributions";
}

function getLevelColor(
  level,
  count,
  platform,
  dark
) {
  if (!count && level === 0) {
    return dark
      ? "bg-[#1b1b1b]"
      : "bg-slate-200";
  }

  // GitHub
  if (platform === "github") {
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
      Math.min(level, 4)
    ];
  }

  // LeetCode
  if (platform === "leetcode") {
    const colors = [
      dark
        ? "bg-[#1b1b1b]"
        : "bg-slate-200",
      "bg-orange-950",
      "bg-orange-800",
      "bg-orange-500",
      "bg-orange-400",
    ];

    return colors[
      Math.min(level, 4)
    ];
  }

  // GFG
  const colors = [
    dark
      ? "bg-[#1b1b1b]"
      : "bg-slate-200",
    "bg-green-950",
    "bg-green-800",
    "bg-green-500",
    "bg-green-400",
  ];

  return colors[
    Math.min(level, 4)
  ];
}

export default ContributionGraph;