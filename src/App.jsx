import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import {
  FiSearch,
  FiFileText,
  FiCode,
  FiPackage,
} from "react-icons/fi";

import IntroLoader from "./components/common/IntroLoader";

import TitleBar from "./components/layout/TitleBar";
import MenuBar from "./components/layout/MenuBar";
import ActivityBar from "./components/layout/ActivityBar";
import Sidebar from "./components/layout/Sidebar";
import TabBar from "./components/layout/TabBar";
import Breadcrumb from "./components/layout/Breadcrumb";
import StatusBar from "./components/layout/StatusBar";

import SettingsPanel from "./components/panels/SettingsPanel";
import SourceControlPanel from "./components/panels/SourceControlPanel";
import CommandPalette from "./components/panels/CommandPalette";
import CopilotPanel from "./components/panels/CopilotPanel";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Readme from "./pages/Readme";

const PAGES = {
  home: Home,
  about: About,
  projects: Projects,
  skills: Skills,
  experience: Experience,
  contact: Contact,
  readme: Readme,
};

export default function App() {
  // =========================================================
  // STATE
  // =========================================================

  const [loading, setLoading] = useState(true);

  const [activeFile, setActiveFile] = useState("home");

  const [openTabs, setOpenTabs] = useState(["home"]);

  const [activityIcon, setActivityIcon] = useState("explorer");

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [paletteOpen, setPaletteOpen] = useState(false);

  const [copilotOpen, setCopilotOpen] = useState(false);

  // IMPORTANT:
  // Ye state sirf Explorer sidebar ke hide/show ke liye hai.
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [zoom, setZoom] = useState(1);

  const [searchText, setSearchText] = useState("");

  // =========================================================
  // OPEN FILE
  // =========================================================

  function openFile(key) {
    if (!PAGES[key]) {
      return;
    }

    setActiveFile(key);

    setOpenTabs((tabs) => {
      if (tabs.includes(key)) {
        return tabs;
      }

      return [...tabs, key];
    });

    setPaletteOpen(false);

    // File open karne par Explorer active rahega
    setActivityIcon("explorer");
    setSidebarOpen(true);
  }

  // =========================================================
  // CLOSE TAB
  // =========================================================

  function closeTab(key) {
    setOpenTabs((tabs) => {
      const next = tabs.filter((tab) => tab !== key);

      if (activeFile === key) {
        setActiveFile(next[next.length - 1] || "home");
      }

      return next.length ? next : ["home"];
    });
  }

  // =========================================================
  // ACTIVITY BAR
  // =========================================================

  function handleActivitySelect(key) {
    // =======================================================
    // 1. EXPLORER
    // ONLY EXPLORER TOGGLES SIDEBAR
    // =======================================================

    if (key === "explorer") {
      setActivityIcon("explorer");

      // ONLY THIS BUTTON changes sidebarOpen
      setSidebarOpen((current) => !current);

      return;
    }

    // =======================================================
    // 2. SEARCH
    // sidebarOpen ko touch nahi karna
    // =======================================================

    if (key === "search") {
      setActivityIcon("search");

      setCopilotOpen(false);
      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }

    // =======================================================
    // 3. SOURCE CONTROL
    // sidebarOpen ko touch nahi karna
    // =======================================================

    if (key === "source-control") {
      setActivityIcon("source-control");

      setCopilotOpen(false);
      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }

    // =======================================================
    // 4. EXTENSIONS
    // sidebarOpen ko touch nahi karna
    // =======================================================

    if (key === "extensions") {
      setActivityIcon("extensions");

      setCopilotOpen(false);
      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }

    // =======================================================
    // 5. COPILOT
    // sidebarOpen ko touch nahi karna
    // =======================================================

    if (key === "copilot") {
      setActivityIcon("copilot");

      setCopilotOpen((current) => !current);

      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }
  }

  // =========================================================
  // FULLSCREEN
  // =========================================================

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  }

  // =========================================================
  // ZOOM
  // =========================================================

  function zoomIn() {
    setZoom((current) => Math.min(current + 0.1, 1.5));
  }

  function zoomOut() {
    setZoom((current) => Math.max(current - 0.1, 0.7));
  }

  function resetZoom() {
    setZoom(1);
  }

  // =========================================================
  // KEYBOARD SHORTCUTS
  // =========================================================

  useEffect(() => {
    function handleKeyboard(event) {
      const ctrl = event.ctrlKey || event.metaKey;

      // Ctrl + P
      if (ctrl && event.key.toLowerCase() === "p") {
        event.preventDefault();

        setPaletteOpen((current) => !current);
        setSettingsOpen(false);

        return;
      }

      // Ctrl + Shift + C
      if (
        ctrl &&
        event.shiftKey &&
        event.key.toLowerCase() === "c"
      ) {
        event.preventDefault();

        setCopilotOpen((current) => !current);
        setSettingsOpen(false);

        return;
      }

      // Ctrl + B
      if (
        ctrl &&
        !event.shiftKey &&
        event.key.toLowerCase() === "b"
      ) {
        event.preventDefault();

        // Sidebar shortcut
        setSidebarOpen((current) => !current);

        return;
      }

      // Ctrl + +
      if (
        ctrl &&
        (event.key === "+" || event.key === "=")
      ) {
        event.preventDefault();

        zoomIn();

        return;
      }

      // Ctrl + -
      if (ctrl && event.key === "-") {
        event.preventDefault();

        zoomOut();

        return;
      }

      // Ctrl + 0
      if (ctrl && event.key === "0") {
        event.preventDefault();

        resetZoom();

        return;
      }

      // F11
      if (event.key === "F11") {
        event.preventDefault();

        toggleFullscreen();

        return;
      }

      // Escape
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setCopilotOpen(false);
        setSettingsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  // =========================================================
  // MENU EVENTS
  // =========================================================

  useEffect(() => {
    function handleOpenFile(event) {
      const file = event.detail;

      if (file) {
        openFile(file);
      }
    }

    function handleOpenSettings() {
      setSettingsOpen(true);
    }

    document.addEventListener("open-file", handleOpenFile);

    document.addEventListener(
      "open-settings",
      handleOpenSettings
    );

    return () => {
      document.removeEventListener(
        "open-file",
        handleOpenFile
      );

      document.removeEventListener(
        "open-settings",
        handleOpenSettings
      );
    };
  }, []);

  // =========================================================
  // SEARCH DATA
  // =========================================================

  const searchableFiles = [
    {
      key: "home",
      name: "home.tsx",
      description: "Home / Introduction",
    },
    {
      key: "about",
      name: "about.html",
      description: "About Ajad Bharti",
    },
    {
      key: "projects",
      name: "projects.js",
      description: "Projects",
    },
    {
      key: "skills",
      name: "skills.json",
      description: "Skills & Technologies",
    },
    {
      key: "experience",
      name: "experience.ts",
      description: "Experience",
    },
    {
      key: "contact",
      name: "contact.css",
      description: "Contact information",
    },
    {
      key: "readme",
      name: "README.md",
      description: "Portfolio README",
    },
  ];

  const filteredFiles = searchableFiles.filter((file) => {
    const query = searchText.toLowerCase().trim();

    if (!query) {
      return true;
    }

    return (
      file.name.toLowerCase().includes(query) ||
      file.description.toLowerCase().includes(query)
    );
  });

  const Page = PAGES[activeFile] || Home;

  // =========================================================
  // UI
  // =========================================================

  return (
    <ThemeProvider>
      {/* =====================================================
          INTRO LOADER
      ====================================================== */}

      {loading && (
        <IntroLoader
          onFinish={() => setLoading(false)}
        />
      )}

      <div
        className="
          h-screen
          w-full
          flex
          flex-col
          bg-[var(--bg)]
          text-gray-200
          overflow-hidden
        "
      >
        {/* =================================================
            TITLE BAR
        ================================================== */}

        <TitleBar
          onSearchClick={() => {
            setPaletteOpen(true);
          }}
        />

        {/* =================================================
            MENU BAR
        ================================================== */}

        <MenuBar
          onOpenPalette={() => {
            setPaletteOpen(true);
          }}
          onToggleSidebar={() => {
            setSidebarOpen((current) => !current);
          }}
          onToggleTerminal={() => {
            console.log(
              "Terminal functionality will be added later."
            );
          }}
          onOpenCopilot={() => {
            setActivityIcon("copilot");
            setCopilotOpen(true);
          }}
          onFullscreen={toggleFullscreen}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onResetZoom={resetZoom}
          onOpenFile={openFile}
          onOpenSettings={() => {
            setSettingsOpen(true);
          }}
        />

        {/* =================================================
            MAIN WORKSPACE
        ================================================== */}

        <div
          className="
            flex
            flex-1
            min-h-0
            relative
          "
        >
          {/* =================================================
              ACTIVITY BAR
          ================================================== */}

          <ActivityBar
            active={activityIcon}
            onSelect={handleActivitySelect}
            onSettingsClick={() => {
              setSettingsOpen((current) => !current);
            }}
          />

          {/* =================================================
              EXPLORER SIDEBAR

              ONLY Explorer + sidebarOpen
              controls this sidebar.
          ================================================== */}

          {activityIcon === "explorer" &&
            sidebarOpen && (
              <Sidebar
                activeFile={activeFile}
                onOpenFile={openFile}
                onOpenCopilot={() => {
                  setActivityIcon("copilot");
                  setCopilotOpen(true);
                }}
              />
            )}

          {/* =================================================
              SEARCH PANEL

              This does NOT modify sidebarOpen.
          ================================================== */}

          {activityIcon === "search" && (
            <div
              className="
                w-64
                shrink-0
                bg-[var(--sidebar)]
                border-r
                border-[var(--border)]
                flex
                flex-col
              "
            >
              <div
                className="
                  px-4
                  py-3
                  text-[11px]
                  tracking-widest
                  text-gray-500
                  font-semibold
                  border-b
                  border-[var(--border)]
                "
              >
                SEARCH
              </div>

              <div className="p-3">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    bg-[var(--bg)]
                    border
                    border-[var(--border)]
                    rounded-md
                    px-3
                    py-2
                    focus-within:border-[var(--accent)]
                  "
                >
                  <FiSearch
                    size={14}
                    className="text-gray-500 shrink-0"
                  />

                  <input
                    autoFocus
                    type="text"
                    value={searchText}
                    onChange={(event) =>
                      setSearchText(event.target.value)
                    }
                    placeholder="Search files..."
                    className="
                      w-full
                      bg-transparent
                      outline-none
                      text-xs
                      text-gray-200
                      placeholder:text-gray-600
                    "
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-2">
                <div
                  className="
                    px-2
                    py-2
                    text-[10px]
                    tracking-widest
                    text-gray-600
                    font-semibold
                  "
                >
                  RESULTS
                </div>

                {filteredFiles.length === 0 ? (
                  <div className="px-2 py-6 text-center text-xs text-gray-600">
                    No results found
                  </div>
                ) : (
                  filteredFiles.map((file) => (
                    <button
                      key={file.key}
                      type="button"
                      onClick={() => openFile(file.key)}
                      className="
                        w-full
                        text-left
                        flex
                        items-center
                        gap-2
                        px-2
                        py-2
                        rounded
                        hover:bg-white/[0.05]
                        transition-colors
                      "
                    >
                      <FiFileText
                        size={14}
                        className="text-gray-500 shrink-0"
                      />

                      <div className="min-w-0">
                        <div className="text-xs text-gray-300 truncate">
                          {file.name}
                        </div>

                        <div className="text-[10px] text-gray-600 truncate">
                          {file.description}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* =================================================
              EXTENSIONS PANEL

              This does NOT modify sidebarOpen.
          ================================================== */}

          {activityIcon === "extensions" && (
            <div
              className="
                w-64
                shrink-0
                bg-[var(--sidebar)]
                border-r
                border-[var(--border)]
                flex
                flex-col
              "
            >
              <div
                className="
                  px-4
                  py-3
                  text-[11px]
                  tracking-widest
                  text-gray-500
                  font-semibold
                  border-b
                  border-[var(--border)]
                "
              >
                EXTENSIONS
              </div>

              <div className="p-3">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    bg-[var(--bg)]
                    border
                    border-[var(--border)]
                    rounded-md
                    px-3
                    py-2
                  "
                >
                  <FiSearch
                    size={14}
                    className="text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Search Extensions..."
                    className="
                      w-full
                      bg-transparent
                      outline-none
                      text-xs
                      text-gray-300
                      placeholder:text-gray-600
                    "
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-2">
                {/* Skills */}

                <button
                  type="button"
                  onClick={() => openFile("skills")}
                  className="
                    w-full
                    text-left
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-md
                    hover:bg-white/[0.05]
                    transition-colors
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      rounded
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      flex
                      items-center
                      justify-center
                      text-blue-400
                    "
                  >
                    <FiCode size={17} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm text-gray-300 truncate">
                      Skills
                    </div>

                    <div className="text-[10px] text-gray-600 truncate">
                      React • JavaScript • Tailwind
                    </div>
                  </div>
                </button>

                {/* Experience */}

                <button
                  type="button"
                  onClick={() => openFile("experience")}
                  className="
                    w-full
                    text-left
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-md
                    hover:bg-white/[0.05]
                    transition-colors
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      rounded
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      flex
                      items-center
                      justify-center
                      text-purple-400
                    "
                  >
                    <FiPackage size={17} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm text-gray-300 truncate">
                      Experience
                    </div>

                    <div className="text-[10px] text-gray-600 truncate">
                      Backend • AI/ML • Full Stack
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* =================================================
              EDITOR
          ================================================== */}

          <div
            className="
              flex-1
              min-w-0
              flex
              flex-col
            "
          >
            <TabBar
              openKeys={openTabs}
              activeFile={activeFile}
              onSelect={(key) => {
                setActiveFile(key);
              }}
              onClose={closeTab}
            />

            <Breadcrumb activeFile={activeFile} />

            <div
              className="
                flex-1
                overflow-y-auto
                overflow-x-hidden
              "
            >
              <div
                style={{
                  zoom: zoom,
                }}
                className="min-h-full"
              >
                <Page onNavigate={openFile} />
              </div>
            </div>
          </div>

          {/* =================================================
              COPILOT
          ================================================== */}

          {copilotOpen && (
            <CopilotPanel
              onClose={() => {
                setCopilotOpen(false);
              }}
            />
          )}

          {/* =================================================
              SOURCE CONTROL
          ================================================== */}

          {activityIcon === "source-control" && (
            <SourceControlPanel
              onClose={() => {
                setActivityIcon("explorer");
              }}
            />
          )}

          {/* =================================================
              SETTINGS
          ================================================== */}

          {settingsOpen && (
            <SettingsPanel
              onClose={() => {
                setSettingsOpen(false);
              }}
              onOpenPalette={() => {
                setSettingsOpen(false);
                setPaletteOpen(true);
              }}
              onOpenCopilot={() => {
                setSettingsOpen(false);
                setActivityIcon("copilot");
                setCopilotOpen(true);
              }}
              onToggleTerminal={() => {
                console.log(
                  "Terminal functionality will be added later."
                );
              }}
              onToggleSidebar={() => {
                setSidebarOpen((current) => !current);
              }}
            />
          )}
        </div>

        {/* =================================================
            STATUS BAR
        ================================================== */}

        <StatusBar activeFile={activeFile} />

        {/* =================================================
            COMMAND PALETTE
        ================================================== */}

        {paletteOpen && (
          <CommandPalette
            onClose={() => {
              setPaletteOpen(false);
            }}
            onOpenFile={openFile}
            onOpenCopilot={() => {
              setPaletteOpen(false);
              setActivityIcon("copilot");
              setCopilotOpen(true);
            }}
          />
        )}
      </div>
    </ThemeProvider>
  );
}