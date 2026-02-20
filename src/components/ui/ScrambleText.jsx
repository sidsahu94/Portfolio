'use client';

import { useEffect, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function ScrambleText({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    let animationFrame = null;

    const animate = () => {
      if (!textRef.current) return;

      textRef.current.innerText = text
        .split('')
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join('');

      if (iteration >= text.length) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      iteration += 1 / 3;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [text]);

  return (
    <span className="relative inline-block">
      {/* Screen readers read this perfectly */}
      <span className="sr-only">{text}</span>
      {/* Visual users see the 60fps animation */}
      <span ref={textRef} aria-hidden="true" />
    </span>
  );
}