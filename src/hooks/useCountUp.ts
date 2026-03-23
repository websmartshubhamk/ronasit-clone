'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({ end, duration = 2000, decimals = 0, prefix = '', suffix = '' }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [startAnimation]);

  const display = `${prefix}${decimals > 0 ? value.toFixed(decimals) : Math.round(value)}${suffix}`;

  return { ref, display };
}
