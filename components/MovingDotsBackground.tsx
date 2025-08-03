import React, { useEffect, useRef, useCallback } from 'react';

const MovingDotsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  // Particle configuration - inspired by Vanta DOTS
  const PARTICLE_COUNT = 120;
  const PARTICLE_SIZE = 3;
  const CONNECTION_DISTANCE = 120;
  const PARTICLE_SPEED = 0.1;
  const WAVE_AMPLITUDE = 10;
  const WAVE_FREQUENCY = 0.02;

  // Create particle class - inspired by Vanta DOTS design with mouse interaction
  class Particle {
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
    originalX: number;
    originalY: number;
    time: number;
    waveOffset: number;
    size: number;
    colorType: 'violet' | 'blue';
    baseAlpha: number;
    mouseInfluence: { x: number; y: number };
    mouseDistance: number;

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.x = 0;
      this.y = 0;
      this.vx = (Math.random() - 0.5) * PARTICLE_SPEED;
      this.vy = (Math.random() - 0.5) * PARTICLE_SPEED;
      this.originalX = 0;
      this.originalY = 0;
      this.time = Math.random() * Math.PI * 2;
      this.waveOffset = Math.random() * Math.PI * 2;
      this.size = PARTICLE_SIZE + Math.random() * 1;
      // Add color variation like Vanta DOTS
      this.colorType = Math.random() > 0.6 ? 'violet' : 'blue';
      this.baseAlpha = 0.35 + Math.random() * 0.15; // Reduced opacity (50%)
      // Mouse interaction properties
      this.mouseInfluence = { x: 0, y: 0 };
      this.mouseDistance = 0;
      
      this.reset();
      this.originalX = this.x;
      this.originalY = this.y;
    }

    reset() {
      // Constrain particles to bottom half with proper spacing (like Vanta DOTS)
      const bottomHalfStart = this.canvas.height * 0.5;
      const spacing = 30; // Similar to Vanta DOTS spacing
      const cols = Math.floor(this.canvas.width / spacing);
      const rows = Math.floor((this.canvas.height * 0.5) / spacing);
      
      // Add some randomness to grid-like positioning
      const randomOffset = 15;
      this.x = (Math.random() * cols * spacing) + (Math.random() - 0.5) * randomOffset;
      this.y = bottomHalfStart + (Math.random() * rows * spacing) + (Math.random() - 0.5) * randomOffset;
      
      // Keep within bounds
      this.x = Math.max(20, Math.min(this.canvas.width - 20, this.x));
      this.y = Math.max(bottomHalfStart + 20, Math.min(this.canvas.height - 20, this.y));
      
      this.originalX = this.x;
      this.originalY = this.y;
    }

    updateMouseInteraction(mouse: { x: number; y: number; isHovering: boolean }) {
      if (!mouse.isHovering) {
        this.mouseInfluence.x *= 0.95;
        this.mouseInfluence.y *= 0.95;
        return;
      }

      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      this.mouseDistance = Math.sqrt(dx * dx + dy * dy);
      
      const maxDistance = 150;
      if (this.mouseDistance < maxDistance) {
        const force = (1 - this.mouseDistance / maxDistance) * 0.8;
        const angle = Math.atan2(dy, dx);
        
        // Repulsion effect
        this.mouseInfluence.x -= Math.cos(angle) * force;
        this.mouseInfluence.y -= Math.sin(angle) * force;
        
        // Limit influence
        const maxInfluence = 3;
        this.mouseInfluence.x = Math.max(-maxInfluence, Math.min(maxInfluence, this.mouseInfluence.x));
        this.mouseInfluence.y = Math.max(-maxInfluence, Math.min(maxInfluence, this.mouseInfluence.y));
      }
    }

    update(mouse: { x: number; y: number; isHovering: boolean }) {
      this.time += 0.008;
      
      // Update mouse interaction
      this.updateMouseInteraction(mouse);
      
      // Gentler base movement
      this.x += this.vx;
      this.y += this.vy;

      // Add mouse influence
      this.x += this.mouseInfluence.x * 0.1;
      this.y += this.mouseInfluence.y * 0.1;

      // Subtle wave motion
      const waveX = Math.sin(this.time + this.waveOffset) * WAVE_AMPLITUDE * 0.2;
      const waveY = Math.cos(this.time * 0.6 + this.waveOffset) * WAVE_AMPLITUDE * 0.15;
      
      this.x += waveX * 0.008;
      this.y += waveY * 0.008;

      // Define bottom half boundaries
      const bottomHalfStart = this.canvas.height * 0.5;
      const bottomHalfEnd = this.canvas.height;

      // Soft boundary handling
      if (this.x < 0 || this.x > this.canvas.width) {
        this.vx *= -0.9;
        this.x = Math.max(0, Math.min(this.canvas.width, this.x));
      }
      if (this.y < bottomHalfStart || this.y > bottomHalfEnd) {
        this.vy *= -0.9;
        this.y = Math.max(bottomHalfStart, Math.min(bottomHalfEnd, this.y));
      }

      // Gentle attraction to original position
      const dx = this.originalX - this.x;
      const dy = this.originalY - this.y;
      this.vx += dx * 0.00008;
      this.vy += dy * 0.00008;

      // Apply friction
      this.vx *= 0.998;
      this.vy *= 0.998;
      
      // Reduce mouse influence over time
      this.mouseInfluence.x *= 0.98;
      this.mouseInfluence.y *= 0.98;
    }

    draw(ctx: CanvasRenderingContext2D) {
      const pulse = Math.sin(this.time * 1.2) * 0.1 + 0.9;
      let alpha = this.baseAlpha * pulse;
      
      // Increase alpha slightly when mouse is near
      if (this.mouseDistance < 100) {
        alpha *= 1.2;
      }
      
      // Color based on type (like Vanta DOTS)
      let color, glowColor;
      if (this.colorType === 'violet') {
        color = `rgba(139, 92, 246, ${alpha})`; // violet-500
        glowColor = `rgba(168, 85, 247, ${alpha * 0.3})`; // violet-400
      } else {
        color = `rgba(59, 130, 246, ${alpha})`; // blue-500  
        glowColor = `rgba(96, 165, 250, ${alpha * 0.3})`; // blue-400
      }
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      
      // Subtle glow effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * pulse * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = glowColor;
      ctx.fill();
    }
  }

  // Initialize particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesRef.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push(new Particle(canvas));
    }
  }, []);

  // Draw connections between nearby particles
  const drawConnections = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    const time = Date.now() * 0.001;
    
    // Create network mesh by connecting particles
    for (let i = 0; i < particles.length; i++) {
      let connections = 0;
      const maxConnections = 5; // Limit connections per particle for performance
      
      for (let j = 0; j < particles.length && connections < maxConnections; j++) {
        if (i === j) continue;
        
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          const opacity = (1 - (distance / CONNECTION_DISTANCE)) * 0.075;
          const baseThickness = 0.1 + (1 - distance / CONNECTION_DISTANCE) * 0.3;
          
          // Create smooth curved connections
          const steps = Math.max(2, Math.floor(distance / 20));
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          
          for (let k = 1; k < steps; k++) {
            const t = k / steps;
            const x = particles[i].x + (particles[j].x - particles[i].x) * t;
            const y = particles[i].y + (particles[j].y - particles[i].y) * t;
            
            // Add very gentle wave distortion
            const wavePhase = time * 0.3 + distance * 0.03 + k * 0.2;
            const waveX = Math.sin(wavePhase) * 0.8 * Math.sin(t * Math.PI);
            const waveY = Math.cos(wavePhase * 1.1) * 0.8 * Math.sin(t * Math.PI);
            
            ctx.lineTo(x + waveX, y + waveY);
          }
          
          ctx.lineTo(particles[j].x, particles[j].y);
          
          // Very subtle gradient stroke
          const gradient = ctx.createLinearGradient(
            particles[i].x, particles[i].y, 
            particles[j].x, particles[j].y
          );
          gradient.addColorStop(0, `rgba(15, 23, 42, ${opacity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(30, 58, 138, ${opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(15, 23, 42, ${opacity * 0.6})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = baseThickness;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          connections++;
        }
      }
    }
    
    // Add very subtle additional mesh connections
    for (let i = 0; i < particles.length; i += 6) {
      for (let j = i + 1; j < Math.min(i + 3, particles.length); j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > CONNECTION_DISTANCE && distance < CONNECTION_DISTANCE * 1.4) {
          const opacity = 0.015;
          
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(30, 58, 138, ${opacity})`;
          ctx.lineWidth = 0.05;
          ctx.stroke();
        }
      }
    }
  };

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Clear canvas with slight trail effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw wave propagation effect with Vanta DOTS colors
    const time = Date.now() * 0.001;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2; // Keep at center of full screen
    
    for (let i = 0; i < 4; i++) {
      const radius = (Math.sin(time * 0.7 + i * 1.2) + 1) * 70 + 30;
      const opacity = (Math.sin(time * 0.7 + i * 1.2) + 1) * 0.02; // Reduced opacity (50%)
      
      // Alternate between blue and violet for ripples
      const color = i % 2 === 0 ? '59, 130, 246' : '139, 92, 246';
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${color}, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw connections first (behind particles)
    drawConnections(ctx, particles);

    // Update and draw particles with mouse interaction
    particles.forEach(particle => {
      particle.update(mouse);
      particle.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Reinitialize particles with new canvas size
    initParticles(canvas);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial canvas size
    handleResize();

    // Mouse event handlers
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
      mouseRef.current.isHovering = true;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    // Add mouse event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animate();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1]"
      style={{ background: 'transparent' }}
    />
  );
};

export default MovingDotsBackground;