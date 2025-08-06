// src/useWindowSize.js

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return size;
}
