import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const ring = useRef({
    x: -100,
    y: -100,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Custom cursor only for mouse/desktop devices
    const mediaQuery = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    );

    if (mediaQuery.matches) {
      return;
    }

    let animationFrame;

    function handleMouseMove(event) {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(
            ${event.clientX}px,
            ${event.clientY}px,
            0
          )
          translate(-50%, -50%)
        `;
      }
    }

    function handleMouseDown() {
      setIsClicking(true);
    }

    function handleMouseUp() {
      setIsClicking(false);
    }

    function handlePointerOver(event) {
      const interactive = event.target.closest(
        "button, a, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(interactive));
    }

    function animate() {
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.16;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(
            ${ring.current.x}px,
            ${ring.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Square cursor */}
      <div
        ref={ringRef}
        className={`
          portfolio-cursor-ring
          ${isHovering ? "is-hovering" : ""}
          ${isClicking ? "is-clicking" : ""}
        `}
      />

      {/* Center */}
      <div
        ref={dotRef}
        className={`
          portfolio-cursor-dot
          ${isHovering ? "is-hovering" : ""}
          ${isClicking ? "is-clicking" : ""}
        `}
      />
    </>
  );
}