import React, { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 4) + 1;

      if (value >= 100) {
        value = 100;
      }

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setVisible(false);

          setTimeout(() => {
            if (onFinish) {
              onFinish();
            }
          }, 350);
        }, 450);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-loader">

      {/* =====================================================
          GRID BACKGROUND
      ====================================================== */}

      <div className="intro-grid" />

      {/* =====================================================
          GLOW
      ====================================================== */}

      <div className="intro-glow intro-glow-one" />
      <div className="intro-glow intro-glow-two" />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="intro-content">

        {/* ===================================================
            LOGO
        ==================================================== */}

        <div className="intro-logo-wrap">

          {/* Orbit */}

          <div className="intro-orbit intro-orbit-one" />
          <div className="intro-orbit intro-orbit-two" />

          {/* Main square */}

          <div className="intro-logo-box">

            <div className="intro-logo-letter">
              A
            </div>

            {/* Corner points */}

            <span className="intro-point intro-point-one" />
            <span className="intro-point intro-point-two" />
            <span className="intro-point intro-point-three" />
            <span className="intro-point intro-point-four" />

          </div>

        </div>

        {/* ===================================================
            NAME
        ==================================================== */}

        <h1 className="intro-name">
          AJAD BHARTI
        </h1>

        {/* ===================================================
            ROLE
        ==================================================== */}

        <p className="intro-role">
          AI/ML FULL STACK DEVELOPER
        </p>

        {/* ===================================================
            LOADING TEXT
        ==================================================== */}

        <div className="intro-loading-text">
          <span>LOADING MODULES</span>
          <span className="intro-dots">
            ...
          </span>
        </div>

        {/* ===================================================
            PROGRESS BAR
        ==================================================== */}

        <div className="intro-progress-wrapper">

          <div className="intro-progress-track">
            <div
              className="intro-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

            <div
              className="intro-progress-dot"
              style={{
                left: `${progress}%`,
              }}
            />
          </div>

          <div className="intro-progress-number">
            {progress}%
          </div>

        </div>

      </div>
    </div>
  );
}