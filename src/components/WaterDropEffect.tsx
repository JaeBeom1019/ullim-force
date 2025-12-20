import React, { useEffect, useRef } from 'react';

export default function WaterDropEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Center of screen
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Ripple parameters
    const ripples: Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      startTime: number;
      lineWidth: number;
    }> = [];

    // Create ripple effect from center
    const createRipple = () => {
      ripples.push({
        x: centerX,
        y: centerY,
        radius: 0,
        maxRadius: Math.max(canvas.width, canvas.height) * 1.2,
        opacity: 1,
        startTime: Date.now(),
        lineWidth: 3,
      });
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        const elapsed = (Date.now() - ripple.startTime) / 1000;
        const progress = Math.min(elapsed / 3, 1); // 3 second duration for majestic effect

        ripple.radius = ripple.maxRadius * progress;
        ripple.opacity = Math.max(0, 1 - progress);

        // Draw multiple concentric ripples for depth
        const numRipples = 3;
        for (let j = 0; j < numRipples; j++) {
          const offset = (j / numRipples) * 40;
          const currentRadius = ripple.radius - offset;
          const currentOpacity = ripple.opacity * (1 - j / numRipples) * 0.7;

          if (currentRadius > 0) {
            ctx.strokeStyle = `rgba(150, 150, 150, ${currentOpacity})`;
            ctx.lineWidth = ripple.lineWidth;
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, currentRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Create ripples at regular intervals for continuous effect
    const interval = setInterval(() => {
      createRipple();
    }, 3500); // Slightly longer than animation duration for smooth continuous effect

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create initial ripple
    createRipple();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
