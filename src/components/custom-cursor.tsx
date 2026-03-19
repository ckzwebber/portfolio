import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isHoveringMagnetic, setIsHoveringMagnetic] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const trailRef = useRef<HTMLSpanElement>(null);
  const pointerRef = useRef<Point>({ x: 0, y: 0 });
  const trailPointRef = useRef<Point>({ x: 0, y: 0 });
  const magneticTargetRef = useRef<HTMLElement | null>(null);
  const magneticPointerRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const handleMediaChange = () => {
      setEnabled(mediaQuery.matches);
      document.body.classList.toggle("cursor-enabled", mediaQuery.matches);
    };

    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      document.body.classList.remove("cursor-enabled");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;

    const updateTrail = () => {
      trailPointRef.current.x += (pointerRef.current.x - trailPointRef.current.x) * 0.18;
      trailPointRef.current.y += (pointerRef.current.y - trailPointRef.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pointerRef.current.x}px`;
        cursorRef.current.style.top = `${pointerRef.current.y}px`;
      }

      if (trailRef.current) {
        trailRef.current.style.left = `${trailPointRef.current.x}px`;
        trailRef.current.style.top = `${trailPointRef.current.y}px`;
      }

      raf = window.requestAnimationFrame(updateTrail);
    };

    raf = window.requestAnimationFrame(updateTrail);
    return () => window.cancelAnimationFrame(raf);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };

    const onDown = () => setIsPointerDown(true);
    const onUp = () => setIsPointerDown(false);

    let magneticRaf = 0;

    const applyMagnetic = () => {
      const target = magneticTargetRef.current;
      if (!target) {
        magneticRaf = 0;
        return;
      }

      const rect = target.getBoundingClientRect();
      const x = magneticPointerRef.current.x - rect.left - rect.width / 2;
      const y = magneticPointerRef.current.y - rect.top - rect.height / 2;
      target.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 0)`;
      magneticRaf = window.requestAnimationFrame(applyMagnetic);
    };

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("[data-magnetic='true']") as HTMLElement | null;
      magneticTargetRef.current = target;
      setIsHoveringMagnetic(Boolean(target));

      if (target && !magneticRaf) {
        magneticRaf = window.requestAnimationFrame(applyMagnetic);
      }
    };

    const onOut = (event: MouseEvent) => {
      const related = event.relatedTarget as HTMLElement | null;
      if (!related?.closest("[data-magnetic='true']")) {
        if (magneticTargetRef.current) {
          magneticTargetRef.current.style.transform = "translate3d(0, 0, 0)";
        }
        magneticTargetRef.current = null;
        setIsHoveringMagnetic(false);
        if (magneticRaf) {
          window.cancelAnimationFrame(magneticRaf);
          magneticRaf = 0;
        }
      }
    };

    const onTargetMove = (event: MouseEvent) => {
      magneticPointerRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.addEventListener("mousemove", onTargetMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousemove", onTargetMove);
      if (magneticRaf) window.cancelAnimationFrame(magneticRaf);
      if (magneticTargetRef.current) {
        magneticTargetRef.current.style.transform = "translate3d(0, 0, 0)";
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  const cursorScale = isPointerDown ? 0.65 : isHoveringMagnetic ? 1.5 : 1;

  return (
    <>
      <span
        ref={cursorRef}
        className="custom-cursor"
        style={{
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
        }}
      />
      <span
        ref={trailRef}
        className="custom-cursor-trail"
        style={{
          transform: `translate(-50%, -50%) scale(${isPointerDown ? 1.6 : 1})`,
        }}
      />
    </>
  );
}
