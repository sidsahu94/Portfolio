'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // Controls the buttery momentum (lower = smoother/heavier)
        duration: 1.5, // Total time for the scroll to settle
        smoothTouch: false, // Keep native touch scrolling on mobile for UX
        wheelMultiplier: 1, // Normal scroll speed
      }}
    >
      {children}
    </ReactLenis>
  );
}