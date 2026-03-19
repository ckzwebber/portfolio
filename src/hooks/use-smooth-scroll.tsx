import { useEffect } from "react";
import Lenis from "lenis";
import { useAnimationMode } from "@/components/animation-mode-provider";

export function useSmoothScroll() {
  const { mode } = useAnimationMode();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = "connection" in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const lowCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 6;
    const smallScreen = window.innerWidth < 1200;

    if (mode === "off" || reduceMotion || saveData || lowCpu) return;
    if (mode === "balanced" && smallScreen) return;

    const lenis = new Lenis({
      duration: mode === "full" ? 1.15 : 0.88,
      smoothWheel: true,
      wheelMultiplier: mode === "full" ? 0.92 : 0.8,
      touchMultiplier: mode === "full" ? 1.12 : 0.95,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [mode]);
}
