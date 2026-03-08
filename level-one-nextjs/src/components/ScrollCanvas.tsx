'use client';

import { useEffect, useRef, useCallback } from 'react';
import { CANVAS_FRAME_URL, FRAME_COUNT } from '@/data/siteData';

export default function ScrollCanvas({ scrollProgress }: { scrollProgress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<Set<number>>(new Set());
  const rafRef = useRef<number>(0);
  const smoothFrameRef = useRef(0);

  useEffect(() => {
    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = CANVAS_FRAME_URL(i + 1);
      img.onload = () => loadedRef.current.add(i);
      imagesRef.current[i] = img;
    }
  }, []);

  const render = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));
    if (!loadedRef.current.has(idx)) return;

    const img = imagesRef.current[idx];
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    ctx.drawImage(
      img,
      (canvas.width / 2) - (img.width / 2) * scale,
      (canvas.height / 2) - (img.height / 2) * scale,
      img.width * scale,
      img.height * scale
    );
  }, []);

  useEffect(() => {
    const targetFrame = Math.min(FRAME_COUNT - 1, Math.ceil(scrollProgress * FRAME_COUNT));

    const animate = () => {
      smoothFrameRef.current += (targetFrame - smoothFrameRef.current) * 0.03;
      render(Math.floor(smoothFrameRef.current));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [scrollProgress, render]);

  return <canvas ref={canvasRef} id="hero-lightpass" />;
}
