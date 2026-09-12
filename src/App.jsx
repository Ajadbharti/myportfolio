import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeContext";
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
  const [loading, setLoading] = useState(true);
  const [activeFile, setActiveFile] = useState("home");
  const [openTabs, setOpenTabs] = useState(["home"]);
  const [activityIcon, setActivityIcon] = useState("explorer");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  useEffect(() => {
    function handler(e) {
      const cmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p";
      const cmdShiftC =
        (e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c";
      if (cmdK) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (cmdShiftC) {
        e.preventDefault();
        setCopilotOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  function openFile(key) {
    setActiveFile(key);
    setOpenTabs((tabs) => (tabs.includes(key) ? tabs : [...tabs, key]));
  }

  function closeTab(key) {
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== key);
      if (activeFile === key) {
        setActiveFile(next[next.length - 1] || "home");
      }
      return next.length ? next : ["home"];
    });
  }

  function handleActivitySelect(key) {
    setActivityIcon(key);
    if (key === "copilot") setCopilotOpen((v) => !v);
  }

  const Page = PAGES[activeFile] || Home;

  return (
    <ThemeProvider>
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}

      <div className="h-screen w-full flex flex-col bg-[var(--bg)] text-gray-200 overflow-hidden">
        <TitleBar onSearchClick={() => setPaletteOpen(true)} />
        <MenuBar onCopilotClick={() => setCopilotOpen((v) => !v)} />

        <div className="flex flex-1 min-h-0 relative">
          <ActivityBar
            active={activityIcon}
            onSelect={handleActivitySelect}
            onSettingsClick={() => setSettingsOpen((v) => !v)}
          />

          {activityIcon !== "source-control" && (
            <Sidebar
              activeFile={activeFile}
              onOpenFile={openFile}
              onOpenCopilot={() => setCopilotOpen(true)}
            />
          )}

          <div className="flex-1 min-w-0 flex flex-col">
            <TabBar
              openKeys={openTabs}
              activeFile={activeFile}
              onSelect={setActiveFile}
              onClose={closeTab}
            />
            <Breadcrumb activeFile={activeFile} />
            <div className="flex-1 overflow-y-auto">
              <Page onNavigate={openFile} />
            </div>
          </div>

          {copilotOpen && <CopilotPanel onClose={() => setCopilotOpen(false)} />}

          {activityIcon === "source-control" && (
            <SourceControlPanel onClose={() => setActivityIcon("explorer")} />
          )}

          {settingsOpen && (
            <SettingsPanel
              onClose={() => setSettingsOpen(false)}
              onOpenPalette={() => {
                setSettingsOpen(false);
                setPaletteOpen(true);
              }}
              onOpenCopilot={() => {
                setSettingsOpen(false);
                setCopilotOpen(true);
              }}
            />
          )}
        </div>

        <StatusBar activeFile={activeFile} />

        {paletteOpen && (
          <CommandPalette
            onClose={() => setPaletteOpen(false)}
            onOpenFile={openFile}
            onOpenCopilot={() => setCopilotOpen(true)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}