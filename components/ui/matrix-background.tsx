"use client";

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeHandler = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    const chars = "01アイウエオカキクケコサシスセソタチツテト";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Main drawing function
    function draw() {
      if (!context || !canvas) return;

      context.fillStyle = 'rgba(0, 0, 0, 0.04)'; // Create fade effect
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      context.fillStyle = '#00ff9a'; // Neon green color
      context.font = `${fontSize}px 'JetBrains Mono', monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Select a random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        context.fillText(char, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop position
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drops down
        drops[i]++;
      }
    }

    // Animation loop
    const intervalId = setInterval(draw, 35);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-background" />;
}