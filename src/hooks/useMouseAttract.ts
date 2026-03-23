'use client';
import { useEffect, useRef } from 'react';

export function useMouseAttract(strength: number = 0.1) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find or create an inner span for transform
    let inner = el.querySelector('[data-attract-inner]') as HTMLElement | null;
    if (!inner) {
      // Wrap children in a span
      inner = document.createElement('span');
      inner.setAttribute('data-attract-inner', 'true');
      inner.style.display = 'inline-flex';
      inner.style.alignItems = 'center';
      inner.style.justifyContent = 'center';
      inner.style.gap = 'inherit';
      inner.style.transition = 'transform 0.3s ease-out';
      inner.style.pointerEvents = 'none';
      while (el.firstChild) {
        inner.appendChild(el.firstChild);
      }
      el.appendChild(inner);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      inner!.style.transition = 'transform 0.1s ease-out';
      inner!.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      inner!.style.transition = 'transform 0.3s ease-out';
      inner!.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
