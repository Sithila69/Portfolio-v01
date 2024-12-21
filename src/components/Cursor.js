import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [trails, setTrails] = useState([]);
  const lastKeyRef = useRef(0); // Keep track of last used key

  useEffect(() => {
    const maxTrails = 10;
    let trailUpdateTimeout;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Increment key for uniqueness
      lastKeyRef.current += 1;

      // Add new trail point with incremental key
      const newTrail = {
        id: `trail-${lastKeyRef.current}`, // Use string template for better uniqueness
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        timestamp: performance.now(), // Add timestamp for additional uniqueness
      };

      // Update trails with decay
      setTrails((prevTrails) => {
        // Remove trails older than 100ms
        const currentTime = performance.now();
        const recentTrails = prevTrails.filter(
          (trail) => currentTime - trail.timestamp < 100
        );

        const updatedTrails = [...recentTrails, newTrail]
          .slice(-maxTrails)
          .map((trail, index, array) => ({
            ...trail,
            opacity: 1 - index / array.length,
          }));

        return updatedTrails;
      });

      // Clear previous timeout and set new one
      clearTimeout(trailUpdateTimeout);
      trailUpdateTimeout = setTimeout(() => {
        setTrails([]);
      }, 100);
    };

    // Throttle the mousemove event to prevent too frequent updates
    let lastMove = 0;
    const throttledHandleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMove >= 6) {
        // Approximately 60fps
        lastMove = now;
        handleMouseMove(e);
      }
    };

    window.addEventListener("mousemove", throttledHandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledHandleMouseMove);
      clearTimeout(trailUpdateTimeout);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default Cursor;
