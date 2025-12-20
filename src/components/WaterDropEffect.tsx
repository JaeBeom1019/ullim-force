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

    // Ripple parameters
    const ripples: Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      startTime: number;
    }> = [];

    const droplets: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Create ripple effect
    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 150,
        opacity: 1,
        startTime: Date.now(),
      });

      // Create droplets around the ripple
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = 2 + Math.random() * 2;
        droplets.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 1,
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        const elapsed = (Date.now() - ripple.startTime) / 1000;
        const progress = Math.min(elapsed / 1.5, 1);

        ripple.radius = ripple.maxRadius * progress;
        ripple.opacity = Math.max(0, 1 - progress);

        // Draw ripple
        ctx.strokeStyle = `rgba(227, 11, 19, ${ripple.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }

      // Update and draw droplets
      for (let i = droplets.length - 1; i >= 0; i--) {
        const droplet = droplets[i];
        droplet.x += droplet.vx;
        droplet.y += droplet.vy;
        droplet.vy += 0.1; // gravity
        droplet.life -= 0.01;

        if (droplet.life > 0) {
          ctx.fillStyle = `rgba(227, 11, 19, ${droplet.life * 0.4})`;
          ctx.beginPath();
          ctx.arc(droplet.x, droplet.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        if (droplet.life <= 0) {
          droplets.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Create ripples at random intervals
    const interval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      createRipple(x, y);
    }, 2000);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
