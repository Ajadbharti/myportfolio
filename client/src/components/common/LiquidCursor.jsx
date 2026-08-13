import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

// Real ripple-pool water simulation (2-buffer wave propagation).
// Moving/clicking the cursor disturbs a low-res height field which
// propagates and interferes like an actual water surface, then gets
// rendered as a glowing cyan/violet wave overlay.
function LiquidCursor() {
  const canvasRef = useRef(null);
  const { dark } = useTheme();
  const darkRef = useRef(dark);
  darkRef.current = dark;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const CELL = 9; // px per simulation cell (lower = more detail, more cost)
    let cols, rows;
    let current, previous;
    let offCanvas, offCtx, offImageData, offData;

    const lastPosRef = { x: -1, y: -1 };

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      cols = Math.ceil(window.innerWidth / CELL) + 2;
      rows = Math.ceil(window.innerHeight / CELL) + 2;

      current = new Float32Array(cols * rows);
      previous = new Float32Array(cols * rows);

      offCanvas = document.createElement("canvas");
      offCanvas.width = cols;
      offCanvas.height = rows;
      offCtx = offCanvas.getContext("2d");
      offImageData = offCtx.createImageData(cols, rows);
      offData = offImageData.data;
    };
    setup();
    window.addEventListener("resize", setup);

    const disturb = (clientX, clientY, strength) => {
      const cx = Math.floor(clientX / CELL);
      const cy = Math.floor(clientY / CELL);
      const radius = 1;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = cx + dx;
          const y = cy + dy;
          if (x > 0 && x < cols - 1 && y > 0 && y < rows - 1) {
            previous[y * cols + x] += strength;
          }
        }
      }
    };

    const handleMove = (e) => {
      const last = lastPosRef;
      const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
      lastPosRef.x = e.clientX;
      lastPosRef.y = e.clientY;
      if (dist > 2) {
        disturb(e.clientX, e.clientY, Math.min(dist * 1.2, 60));
      }
    };
    window.addEventListener("mousemove", handleMove);

    const handleClick = (e) => {
      disturb(e.clientX, e.clientY, 220);
    };
    window.addEventListener("click", handleClick);

    let raf;
    const DAMPING = 0.965;

    const step = () => {
      for (let y = 1; y < rows - 1; y++) {
        const row = y * cols;
        const rowUp = row - cols;
        const rowDown = row + cols;
        for (let x = 1; x < cols - 1; x++) {
          const i = row + x;
          current[i] =
            (previous[i - 1] +
              previous[i + 1] +
              previous[rowUp + x] +
              previous[rowDown + x]) /
              2 -
            current[i];
          current[i] *= DAMPING;
        }
      }
      const tmp = previous;
      previous = current;
      current = tmp;
    };

    const paletteDark = { r1: 34, g1: 211, b1: 238, r2: 168, g2: 85, b2: 247 };
    const paletteLight = { r1: 56, g1: 189, b1: 248, r2: 139, g2: 92, b2: 246 };

    const render = () => {
      step();

      const { r1, g1, b1, r2, g2, b2 } = darkRef.current
        ? paletteDark
        : paletteLight;

      for (let i = 0; i < cols * rows; i++) {
        const h = previous[i]; // wave height, can be + or -
        const idx = i * 4;

        if (h > 0.4) {
          const t = Math.min(h / 60, 1);
          offData[idx] = r1;
          offData[idx + 1] = g1;
          offData[idx + 2] = b1;
          offData[idx + 3] = Math.min(t * 200, 200);
        } else if (h < -0.4) {
          const t = Math.min(-h / 60, 1);
          offData[idx] = r2;
          offData[idx + 1] = g2;
          offData[idx + 2] = b2;
          offData[idx + 3] = Math.min(t * 200, 200);
        } else {
          offData[idx + 3] = 0;
        }
      }

      offCtx.putImageData(offImageData, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.filter = "blur(3px)";
      ctx.drawImage(offCanvas, 0, 0, canvas.width, canvas.height);
      ctx.filter = "none";

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", setup);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[55] mix-blend-screen"
    />
  );
}

export default LiquidCursor;