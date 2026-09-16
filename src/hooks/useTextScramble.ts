import { useState, useCallback, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface UseTextScrambleReturn {
  text: string;
  scramble: () => void;
  reset: () => void;
}

/**
 * useTextScramble — Decodes a scrambled character sequence back to the target
 * string over ~600ms. Call `scramble()` on mouseenter to trigger.
 * Respects prefers-reduced-motion: skips directly to final text.
 */
export const useTextScramble = (target: string): UseTextScrambleReturn => {
  const [text, setText] = useState(target);
  const frameRef = useRef<number | null>(null);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCountRef = useRef(0);

  const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

  const update = useCallback(() => {
    let output = '';
    let complete = 0;
    const queue = queueRef.current;

    for (let i = 0; i < queue.length; i++) {
      const { from, to, start, end } = queue[i];
      let char = queue[i].char;

      if (frameCountRef.current >= end) {
        complete++;
        output += to;
      } else if (frameCountRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        output += `<span class="text-[#C7FF3D]">${char}</span>`;
      } else {
        output += from;
      }
    }

    // Use innerHTML would require dangerouslySetInnerHTML — instead just track plain text
    const plainOutput = queue.map(({ from, to, start, end }) => {
      if (frameCountRef.current >= end) return to;
      if (frameCountRef.current >= start) return randomChar();
      return from;
    }).join('');

    setText(plainOutput);

    if (complete !== queue.length) {
      frameCountRef.current++;
      frameRef.current = requestAnimationFrame(update);
    }
  }, []);

  const scramble = useCallback(() => {
    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(target);
      return;
    }

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameCountRef.current = 0;

    const queue: typeof queueRef.current = [];
    const maxLen = Math.max(text.length, target.length);

    for (let i = 0; i < maxLen; i++) {
      const from = text[i] ?? '';
      const to = target[i] ?? '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20) + 8;
      queue.push({ from, to, start, end });
    }

    queueRef.current = queue;
    frameRef.current = requestAnimationFrame(update);
  }, [target, text, update]);

  const reset = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setText(target);
  }, [target]);

  return { text, scramble, reset };
};
