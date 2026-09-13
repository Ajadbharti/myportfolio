import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeContext";

import IntroLoader from "./components/common/IntroLoader";
import CustomCursor from "./components/common/CustomCursor";

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
import TerminalPanel from "./components/panels/TerminalPanel";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Readme from "./pages/Readme";

import { resumeFile } from "./data/files";

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
  const [loading, setLoading] = useState(true);

  const [activeFile, setActiveFile] = useState("home");
  const [openTabs, setOpenTabs] = useState(["home"]);

  const [activityIcon, setActivityIcon] = useState("explorer");

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  /*
   * Desktop  -> Explorer open
   * Mobile   -> Explorer closed
   */
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.innerWidth >= 768;
  });

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
    setActivityIcon("explorer");

    /*
     * On mobile, close Explorer after selecting a file.
     * On desktop, keep Explorer visible.
     */
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
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
  // RESUME DOWNLOAD
  // =========================================================

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "/" + resumeFile.name;
    link.download = resumeFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // =========================================================
  // ACTIVITY BAR
  // =========================================================

  function handleActivitySelect(key) {
    /*
     * ONLY Explorer controls sidebar.
     */
    if (key === "explorer") {
      setActivityIcon("explorer");
      setSidebarOpen((current) => !current);
      setCopilotOpen(false);
      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }

    if (key === "search") {
      setActivityIcon("explorer");
      setCopilotOpen(false);
      setSettingsOpen(false);
      setPaletteOpen(true);

      return;
    }

    if (key === "source-control") {
      setActivityIcon("source-control");
      setCopilotOpen(false);
      setPaletteOpen(false);
      setSettingsOpen(false);

      return;
    }

    if (key === "extensions") {
      downloadResume();

      return;
    }

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

      if (ctrl && event.key.toLowerCase() === "p") {
        event.preventDefault();

        setPaletteOpen((current) => !current);
        setSettingsOpen(false);

        return;
      }

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

      if (
        ctrl &&
        (event.key === "`" || event.key === "~")
      ) {
        event.preventDefault();

        setTerminalOpen((current) => !current);

        return;
      }

      if (
        ctrl &&
        !event.shiftKey &&
        event.key.toLowerCase() === "b"
      ) {
        event.preventDefault();

        setSidebarOpen((current) => !current);

        return;
      }

      if (
        ctrl &&
        (event.key === "+" || event.key === "=")
      ) {
        event.preventDefault();
        zoomIn();
        return;
      }

      if (ctrl && event.key === "-") {
        event.preventDefault();
        zoomOut();
        return;
      }

      if (ctrl && event.key === "0") {
        event.preventDefault();
        resetZoom();
        return;
      }

      if (event.key === "F11") {
        event.preventDefault();
        toggleFullscreen();
        return;
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setCopilotOpen(false);
        setSettingsOpen(false);

        if (window.innerWidth < 768) {
          setSidebarOpen(false);
        }
      }
    }

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyboard
      );
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

    document.addEventListener(
      "open-file",
      handleOpenFile
    );

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
  // SEARCH
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

  return (
    <ThemeProvider>
      <CustomCursor />

      {loading && (
        <IntroLoader
          onFinish={() => setLoading(false)}
        />
      )}

      <div
        className="
          portfolio-app
          h-screen
          min-h-0
          w-full
          flex
          flex-col
          bg-[var(--bg)]
          text-gray-200
          overflow-hidden
        "
      >
        <TitleBar
          onSearchClick={() => {
            setPaletteOpen(true);
          }}
        />

        <MenuBar
          onOpenPalette={() => {
            setPaletteOpen(true);
          }}
          onToggleSidebar={() => {
            setSidebarOpen((current) => !current);
          }}
          onToggleTerminal={() => {
            setTerminalOpen((current) => !current);
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

        <div
          className="
            portfolio-workspace
            flex
            flex-1
            min-h-0
            min-w-0
            relative
            overflow-hidden
          "
        >
          <ActivityBar
            active={activityIcon}
            onSelect={handleActivitySelect}
            onSettingsClick={() => {
              setSettingsOpen((current) => !current);
            }}
          />

          {/* ===================================================
              EXPLORER
          =================================================== */}

          {activityIcon === "explorer" &&
            sidebarOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close Explorer"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                  className="
                    portfolio-sidebar-backdrop
                    md:hidden
                  "
                />

                <Sidebar
                  activeFile={activeFile}
                  onOpenFile={openFile}
                  onOpenCopilot={() => {
                    setActivityIcon("copilot");
                    setSidebarOpen(false);
                    setCopilotOpen(true);
                  }}
                />
              </>
            )}

          {/* ===================================================
              SEARCH
          =================================================== */}

          {activityIcon === "search" && (
            <>
              <button
                type="button"
                aria-label="Close Search"
                onClick={() => {
                  setActivityIcon("explorer");
                }}
                className="
                  portfolio-panel-backdrop
                  md:hidden
                "
              />

              <div
                data-panel="search"
                className="
                  w-64
                  shrink-0
                  min-w-0
                  bg-[var(--sidebar)]
                  border-r
                  border-[var(--border)]
                  flex
                  flex-col
                  overflow-hidden
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
                  "
                >
                  SEARCH
                </div>

                <div className="px-3 pb-3">
                  <input
                    autoFocus
                    value={searchText}
                    onChange={(event) =>
                      setSearchText(event.target.value)
                    }
                    placeholder="Search files..."
                    className="
                      w-full
                      bg-[var(--bg)]
                      border
                      border-[var(--border)]
                      rounded
                      px-3
                      py-2
                      text-xs
                      text-gray-300
                      outline-none
                      focus:border-[var(--accent)]
                    "
                  />
                </div>

                <div className="px-4 pb-2 text-[10px] tracking-widest text-gray-600">
                  RESULTS
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto px-2">
                  {filteredFiles.map((file) => (
                    <button
                      key={file.key}
                      type="button"
                      onClick={() => openFile(file.key)}
                      className="
                        w-full
                        text-left
                        px-3
                        py-2
                        rounded
                        hover:bg-white/5
                        transition-colors
                      "
                    >
                      <div className="text-xs text-gray-300 truncate">
                        {file.name}
                      </div>

                      <div className="text-[10px] text-gray-600 truncate">
                        {file.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ===================================================
              EXTENSIONS
          =================================================== */}

          {activityIcon === "extensions" && (
            <>
              <button
                type="button"
                aria-label="Close Extensions"
                onClick={() => {
                  setActivityIcon("explorer");
                }}
                className="
                  portfolio-panel-backdrop
                  md:hidden
                "
              />

              <div
                data-panel="extensions"
                className="
                  w-64
                  shrink-0
                  min-w-0
                  bg-[var(--sidebar)]
                  border-r
                  border-[var(--border)]
                  flex
                  flex-col
                  overflow-hidden
                "
              >
                <div className="px-4 py-3 text-[11px] tracking-widest text-gray-500 font-semibold">
                  EXTENSIONS
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-2">
                  {[
                    "React",
                    "Tailwind CSS",
                    "ESLint",
                    "Prettier",
                    "GitHub Copilot",
                  ].map((extension) => (
                    <div
                      key={extension}
                      className="
                        p-3
                        rounded-md
                        border
                        border-[var(--border)]
                        bg-[var(--panel)]
                      "
                    >
                      <div className="text-xs text-gray-200">
                        {extension}
                      </div>

                      <div className="text-[10px] text-gray-600 mt-1">
                        Installed
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ===================================================
              EDITOR
          =================================================== */}

          <div
            className="
              portfolio-editor
              flex-1
              min-w-0
              min-h-0
              flex
              flex-col
              overflow-hidden
            "
          >
            <TabBar
              openKeys={openTabs}
              activeFile={activeFile}
              onSelect={openFile}
              onClose={closeTab}
            />

            <Breadcrumb activeFile={activeFile} />

            <main
              className="
                portfolio-editor-scroll
                flex-1
                min-h-0
                min-w-0
                overflow-y-auto
                overflow-x-hidden
              "
            >
              <div
                style={{
                  zoom:
                    typeof window !== "undefined" &&
                    window.innerWidth < 768
                      ? 1
                      : zoom,
                }}
                className="
                  portfolio-editor-content
                  min-h-full
                  w-full
                "
              >
                <Page onNavigate={openFile} />
              </div>
            </main>

            {terminalOpen && (
              <TerminalPanel
                onClose={() => setTerminalOpen(false)}
                onOpenFile={openFile}
              />
            )}
          </div>

          {activityIcon === "source-control" && (
            <SourceControlPanel
              onClose={() =>
                setActivityIcon("explorer")
              }
            />
          )}

          {copilotOpen && (
            <CopilotPanel
              onClose={() =>
                setCopilotOpen(false)
              }
            />
          )}

          {settingsOpen && (
            <SettingsPanel
              onClose={() =>
                setSettingsOpen(false)
              }
              onOpenPalette={() =>
                setPaletteOpen(true)
              }
              onOpenCopilot={() => {
                setSettingsOpen(false);
                setCopilotOpen(true);
              }}
              onFullscreen={toggleFullscreen}
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              onResetZoom={resetZoom}
              onToggleTerminal={() => {
                setSettingsOpen(false);
                setTerminalOpen((current) => !current);
              }}
            />
          )}

          {paletteOpen && (
            <CommandPalette
              files={searchableFiles}
              onSearchChange={setSearchText}
              onOpenFile={openFile}
              onClose={() =>
                setPaletteOpen(false)
              }
            />
          )}
        </div>

        <StatusBar
          activeFile={activeFile}
          onToggleTerminal={() => setTerminalOpen((current) => !current)}
          onOpenCopilot={() => {
            setActivityIcon("copilot");
            setCopilotOpen(true);
          }}
        />
      </div>
    </ThemeProvider>
  );
}