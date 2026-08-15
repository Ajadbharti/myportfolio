import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

function LiquidCursor() {
  const canvasRef = useRef(null);
  const { dark } = useTheme();
  const darkRef = useRef(dark);

  darkRef.current = dark;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let width = 0;
    let height = 0;

    const particles = [];
    const PARTICLE_COUNT = 28;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    // --------------------------------
    // Create subtle floating particles
    // --------------------------------

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        size: Math.random() * 1.5 + 0.5,

        speedX:
          (Math.random() - 0.5) * 0.15,

        speedY:
          (Math.random() - 0.5) * 0.15,

        opacity:
          Math.random() * 0.35 + 0.1,

        phase:
          Math.random() * Math.PI * 2,
      });
    }

    // --------------------------------
    // Mouse movement
    // --------------------------------

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // --------------------------------
    // Draw background grid
    // --------------------------------

    const drawGrid = () => {
      const spacing = 55;

      ctx.save();

      ctx.lineWidth = 1;

      const gridColor = darkRef.current
        ? "rgba(139, 92, 246, 0.055)"
        : "rgba(99, 102, 241, 0.045)";

      ctx.strokeStyle = gridColor;

      // Vertical lines
      for (
        let x = 0;
        x <= width;
        x += spacing
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (
        let y = 0;
        y <= height;
        y += spacing
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    // --------------------------------
    // Draw soft glowing orbs
    // --------------------------------

    const drawGlow = (
      x,
      y,
      radius,
      color,
      opacity
    ) => {
      const gradient =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

      gradient.addColorStop(
        0,
        `${color}${opacity}`
      );

      gradient.addColorStop(
        1,
        `${color}00`
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();
    };

    // --------------------------------
    // Render
    // --------------------------------

    const render = (time) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // Subtle grid
      drawGrid();

      // Background ambient glow
      if (darkRef.current) {
        drawGlow(
          width * 0.18,
          height * 0.18,
          300,
          "#7c3aed",
          "18"
        );

        drawGlow(
          width * 0.82,
          height * 0.28,
          260,
          "#06b6d4",
          "14"
        );

        drawGlow(
          width * 0.65,
          height * 0.85,
          320,
          "#c026d3",
          "12"
        );
      } else {
        drawGlow(
          width * 0.18,
          height * 0.18,
          260,
          "#8b5cf6",
          "10"
        );

        drawGlow(
          width * 0.82,
          height * 0.28,
          240,
          "#06b6d4",
          "08"
        );
      }

      // --------------------------------
      // Floating particles
      // --------------------------------

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Soft floating movement
        particle.x +=
          Math.sin(
            time * 0.00025 +
              particle.phase
          ) * 0.08;

        particle.y +=
          Math.cos(
            time * 0.0002 +
              particle.phase
          ) * 0.08;

        // Wrap around screen
        if (particle.x < -10)
          particle.x = width + 10;

        if (particle.x > width + 10)
          particle.x = -10;

        if (particle.y < -10)
          particle.y = height + 10;

        if (particle.y > height + 10)
          particle.y = -10;

        const color = darkRef.current
          ? "#a78bfa"
          : "#818cf8";

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = color;

        ctx.globalAlpha =
          particle.opacity;

        ctx.fill();

        ctx.globalAlpha = 1;
      });

      // --------------------------------
      // Very subtle cursor glow
      // --------------------------------

      if (
        mouse.x > 0 &&
        mouse.y > 0
      ) {
        const cursorGradient =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            140
          );

        if (darkRef.current) {
          cursorGradient.addColorStop(
            0,
            "rgba(139, 92, 246, 0.07)"
          );

          cursorGradient.addColorStop(
            1,
            "rgba(139, 92, 246, 0)"
          );
        } else {
          cursorGradient.addColorStop(
            0,
            "rgba(99, 102, 241, 0.045)"
          );

          cursorGradient.addColorStop(
            1,
            "rgba(99, 102, 241, 0)"
          );
        }

        ctx.fillStyle =
          cursorGradient;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          140,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      animationFrame =
        requestAnimationFrame(render);
    };

    animationFrame =
      requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[0]"
      aria-hidden="true"
    />
  );
}

export default LiquidCursor;