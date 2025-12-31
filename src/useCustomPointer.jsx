import { useState, useEffect } from "react";

export default function useCustomPointer(catTrack) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        cursor: "none",
      }}
    >
      {catTrack}
    </div>
  );
}
