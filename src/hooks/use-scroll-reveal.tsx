import { useEffect } from "react";
import { useAnimationMode } from "@/components/animation-mode-provider";

export function useScrollReveal() {
  const { mode } = useAnimationMode();

  useEffect(() => {
    if (mode === "off") {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
        element.classList.add("active");
        element.classList.add("in-view");
      });
      return;
    }

    const observed = new WeakSet<Element>();
    let scheduled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const shouldAnimateOnce = target.dataset.once !== "false";

          if (entry.isIntersecting) {
            target.classList.add("active");
            target.classList.add("in-view");
            if (shouldAnimateOnce) observer.unobserve(target);
            return;
          }

          if (!shouldAnimateOnce) {
            target.classList.remove("active");
            target.classList.remove("in-view");
          }
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.2,
      },
    );

    const observePendingElements = () => {
      const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
      revealElements.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        observer.observe(element);
      });
    };

    observePendingElements();

    const mutationObserver = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        observePendingElements();
        scheduled = false;
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [mode]);
}
