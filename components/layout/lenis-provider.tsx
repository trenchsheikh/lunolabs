"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LenisContextValue = {
  lenis: Lenis | null;
  prefersReducedMotion: boolean;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  prefersReducedMotion: false,
});

export function useLenisContext() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) return;

    const instance = new Lenis({
      duration: 1.35,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.05,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    });

    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const value = useMemo(
    () => ({ lenis, prefersReducedMotion }),
    [lenis, prefersReducedMotion]
  );

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}
