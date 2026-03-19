import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AnimationMode = "off" | "balanced" | "full";

type AnimationModeContextValue = {
  mode: AnimationMode;
  animationsEnabled: boolean;
  setMode: (mode: AnimationMode) => void;
  toggleMode: () => void;
  cycleMode: () => void;
};

const STORAGE_KEY = "portfolio-animation-mode";

const AnimationModeContext = createContext<AnimationModeContextValue | null>(null);

export function AnimationModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<AnimationMode>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "off" || saved === "balanced" || saved === "full") return saved;
    return "full";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.classList.toggle("animations-off", mode === "off");
    document.documentElement.classList.toggle("animations-balanced", mode === "balanced");
    document.documentElement.dataset.animationMode = mode;
  }, [mode]);

  const value = useMemo<AnimationModeContextValue>(
    () => ({
      mode,
      animationsEnabled: mode !== "off",
      setMode: (nextMode) => setModeState(nextMode),
      toggleMode: () => setModeState((current) => (current === "off" ? "full" : "off")),
      cycleMode: () => setModeState((current) => (current === "off" ? "balanced" : current === "balanced" ? "full" : "off")),
    }),
    [mode],
  );

  return <AnimationModeContext.Provider value={value}>{children}</AnimationModeContext.Provider>;
}

export function useAnimationMode() {
  const context = useContext(AnimationModeContext);
  if (!context) {
    throw new Error("useAnimationMode must be used inside AnimationModeProvider");
  }
  return context;
}
