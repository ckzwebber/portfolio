import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function useScrambleText(target: string, duration = 1300) {
  const [display, setDisplay] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let raf = 0;
    let start = 0;
    setIsComplete(false);
    setDisplay(target);

    const render = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const resolvedChars = Math.floor(progress * target.length);

      const next = target
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < resolvedChars) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (progress < 1) {
        raf = window.requestAnimationFrame(render);
      } else {
        setIsComplete(true);
      }
    };

    raf = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(raf);
      setIsComplete(true);
    };
  }, [duration, target]);

  return { display, isComplete };
}
