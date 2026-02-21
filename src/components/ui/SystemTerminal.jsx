'use client';

import { useState, useEffect } from 'react';

export default function SystemTerminal() {
  const [text, setText] = useState('');
  const fullText = "> Initialize Sidhanta_Manoj_Sahu.exe\n> Loading B.Sc. IT modules...\n> Mounting MERN Stack environments...\n> Establishing WebRTC connection...\n> System Ready.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="font-mono text-xs md:text-sm text-[var(--accent-primary)] mb-6 h-24 sm:h-20 flex flex-col justify-end whitespace-pre-line drop-shadow-[0_0_8px_var(--accent-glow)]">
      {text}
      <span className="animate-pulse inline-block w-2 h-4 bg-[var(--accent-primary)] ml-1 align-middle"></span>
    </div>
  );
}