'use client'

import { motion } from 'framer-motion'

interface TechHeroBackgroundProps {
  className?: string
}

export default function TechHeroBackground({ className }: TechHeroBackgroundProps) {
  return (
    <div className={className ?? "absolute inset-0 overflow-hidden"}>
      {/* Rotating Globe with Meridian Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-30">
            <defs>
              <radialGradient id="globeGradient" cx="50%" cy="30%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.25)" />
                <stop offset="70%" stopColor="rgba(96, 165, 250, 0.1)" />
                <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
              </radialGradient>
              <linearGradient id="meridianGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
                <stop offset="20%" stopColor="rgba(96, 165, 250, 0.5)" />
                <stop offset="50%" stopColor="rgba(147, 197, 253, 0.7)" />
                <stop offset="80%" stopColor="rgba(96, 165, 250, 0.5)" />
                <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
              </linearGradient>
            </defs>

            {/* Main Globe Circle */}
            <circle
              cx="300"
              cy="300"
              r="200"
              fill="url(#globeGradient)"
              stroke="rgba(147, 197, 253, 0.3)"
              strokeWidth="1.5"
            />

            {/* Meridian Lines */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const x1 = Math.round(300 + Math.cos(angle) * 200);
              const y1 = Math.round(300 + Math.sin(angle) * 200);
              const x2 = Math.round(300 - Math.cos(angle) * 200);
              const y2 = Math.round(300 - Math.sin(angle) * 200);

              return (
                <line
                  key={`meridian-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#meridianGradient)"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
              );
            })}

            {/* Parallel Lines (Latitude) */}
            {Array.from({ length: 6 }).map((_, i) => {
              const y = 150 + (i * 50);
              const radius = Math.round(Math.sqrt(200 * 200 - (y - 300) * (y - 300)));

              if (radius > 0) {
                return (
                  <ellipse
                    key={`parallel-${i}`}
                    cx="300"
                    cy={y}
                    rx={radius}
                    ry={radius * 0.3}
                    fill="none"
                    stroke="rgba(147, 197, 253, 0.35)"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                );
              }
              return null;
            })}

            {/* Additional rotating elements */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "300px 300px" }}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60) * (Math.PI / 180);
                const radius = 230;
                const x = Math.round(300 + Math.cos(angle) * radius);
                const y = Math.round(300 + Math.sin(angle) * radius);

                return (
                  <circle
                    key={`orbit-dot-${i}`}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="rgba(147, 197, 253, 0.6)"
                  />
                );
              })}
            </motion.g>
          </svg>
        </motion.div>
      </div>

      {/* Concentric Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute border border-blue-400/15 rounded-full"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full z-10">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0)" />
            <stop offset="50%" stopColor="rgba(147, 197, 253, 0.4)" />
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0)" />
            <stop offset="50%" stopColor="rgba(147, 197, 253, 0.3)" />
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
          </linearGradient>
        </defs>

        {/* Horizontal Lines */}
        <motion.line
          x1="0" y1="20%"
          x2="100%" y2="20%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="0" y1="35%"
          x2="100%" y2="35%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.line
          x1="0" y1="65%"
          x2="100%" y2="65%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.line
          x1="0" y1="80%"
          x2="100%" y2="80%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Vertical Lines */}
        <motion.line
          x1="15%" y1="0"
          x2="15%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.line
          x1="30%" y1="0"
          x2="30%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.line
          x1="70%" y1="0"
          x2="70%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.line
          x1="85%" y1="0"
          x2="85%" y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>

      {/* Enhanced Glowing Particles with Gentle Movement */}
      <div className="absolute inset-0 z-20">
        {/* Top area particles */}
        <motion.div
          className="absolute w-3 h-3 bg-blue-400 rounded-full cursor-pointer"
          style={{ top: '15%', left: '20%' }}
          animate={{
            boxShadow: [
              '0 0 15px rgba(96, 165, 250, 0.6)',
              '0 0 30px rgba(96, 165, 250, 1)',
              '0 0 15px rgba(96, 165, 250, 0.6)'
            ],
            scale: [1, 1.1, 1],
            x: [0, 2, -2, 0],
            y: [0, -1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.4, x: [0, 8, -8, 0], y: [0, -4, 4, 0], transition: { duration: 0.6 } }}
        />

        <motion.div
          className="absolute w-2 h-2 bg-blue-300 rounded-full cursor-pointer"
          style={{ top: '25%', left: '70%' }}
          animate={{
            boxShadow: [
              '0 0 12px rgba(147, 197, 253, 0.5)',
              '0 0 24px rgba(147, 197, 253, 0.9)',
              '0 0 12px rgba(147, 197, 253, 0.5)'
            ],
            scale: [1, 1.15, 1],
            x: [0, -1.5, 1.5, 0],
            y: [0, 1, -1, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.5, x: [0, -6, 6, 0], y: [0, 3, -3, 0], transition: { duration: 0.5 } }}
        />

        {/* Middle transition area particles */}
        <motion.div
          className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full cursor-pointer"
          style={{ top: '45%', left: '10%' }}
          animate={{
            boxShadow: [
              '0 0 18px rgba(34, 211, 238, 0.7)',
              '0 0 36px rgba(34, 211, 238, 1)',
              '0 0 18px rgba(34, 211, 238, 0.7)'
            ],
            scale: [1, 1.2, 1],
            x: [0, 1, -1, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.6, x: [0, 10, -5, 0], y: [0, -6, 3, 0], transition: { duration: 0.7 } }}
        />

        {/* Bottom area - Row 1 (55-65%) */}
        <motion.div
          className="absolute w-3.5 h-3.5 bg-blue-400 rounded-full cursor-pointer"
          style={{ top: '55%', left: '15%' }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(96, 165, 250, 0.8)',
              '0 0 40px rgba(96, 165, 250, 1.2)',
              '0 0 20px rgba(96, 165, 250, 0.8)'
            ],
            scale: [1, 1.15, 1],
            x: [0, 3, -3, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          whileHover={{ scale: 1.5, x: [0, -8, 5, 0], y: [0, 4, -6, 0], transition: { duration: 0.6 } }}
        />

        <motion.div
          className="absolute w-2.5 h-2.5 bg-blue-300 rounded-full cursor-pointer"
          style={{ top: '60%', left: '45%' }}
          animate={{
            boxShadow: [
              '0 0 16px rgba(147, 197, 253, 0.6)',
              '0 0 32px rgba(147, 197, 253, 1)',
              '0 0 16px rgba(147, 197, 253, 0.6)'
            ],
            scale: [1, 1.2, 1],
            x: [0, -2, 2, 0],
            y: [0, 1.5, -1.5, 0]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          whileHover={{ scale: 1.6, x: [0, 6, -4, 0], y: [0, -3, 5, 0], transition: { duration: 0.5 } }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-cyan-400 rounded-full cursor-pointer"
          style={{ top: '58%', left: '75%' }}
          animate={{
            boxShadow: [
              '0 0 18px rgba(34, 211, 238, 0.7)',
              '0 0 36px rgba(34, 211, 238, 1)',
              '0 0 18px rgba(34, 211, 238, 0.7)'
            ],
            scale: [1, 1.1, 1],
            x: [0, 2.5, -2.5, 0],
            y: [0, -1, 1, 0]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          whileHover={{ scale: 1.4, x: [0, -7, 4, 0], y: [0, 2, -5, 0], transition: { duration: 0.6 } }}
        />

        {/* Bottom area - Row 2 (70-80%) */}
        <motion.div
          className="absolute w-2 h-2 bg-blue-400 rounded-full cursor-pointer"
          style={{ top: '72%', left: '8%' }}
          animate={{
            boxShadow: [
              '0 0 14px rgba(96, 165, 250, 0.5)',
              '0 0 28px rgba(96, 165, 250, 0.9)',
              '0 0 14px rgba(96, 165, 250, 0.5)'
            ],
            scale: [1, 1.25, 1],
            x: [0, -1.5, 1.5, 0],
            y: [0, 2, -2, 0]
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          whileHover={{ scale: 1.7, x: [0, 5, -3, 0], y: [0, -4, 6, 0], transition: { duration: 0.4 } }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-blue-300 rounded-full cursor-pointer"
          style={{ top: '75%', left: '30%' }}
          animate={{
            boxShadow: [
              '0 0 16px rgba(147, 197, 253, 0.6)',
              '0 0 32px rgba(147, 197, 253, 1)',
              '0 0 16px rgba(147, 197, 253, 0.6)'
            ],
            scale: [1, 1.15, 1],
            x: [0, 3, -3, 0],
            y: [0, -1.5, 1.5, 0]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          whileHover={{ scale: 1.5, x: [0, 7, -4, 0], y: [0, -3, 5, 0], transition: { duration: 0.5 } }}
        />

        <motion.div
          className="absolute w-2.5 h-2.5 bg-cyan-300 rounded-full cursor-pointer"
          style={{ top: '78%', left: '55%' }}
          animate={{
            boxShadow: [
              '0 0 18px rgba(103, 232, 249, 0.7)',
              '0 0 36px rgba(103, 232, 249, 1)',
              '0 0 18px rgba(103, 232, 249, 0.7)'
            ],
            scale: [1, 1.2, 1],
            x: [0, -2, 2, 0],
            y: [0, 1, -1, 0]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          whileHover={{ scale: 1.6, x: [0, -6, 8, 0], y: [0, 3, -4, 0], transition: { duration: 0.7 } }}
        />

        <motion.div
          className="absolute w-3.5 h-3.5 bg-blue-400 rounded-full cursor-pointer"
          style={{ top: '74%', left: '80%' }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(96, 165, 250, 0.8)',
              '0 0 40px rgba(96, 165, 250, 1.2)',
              '0 0 20px rgba(96, 165, 250, 0.8)'
            ],
            scale: [1, 1.1, 1],
            x: [0, 2, -2, 0],
            y: [0, -2.5, 2.5, 0]
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          whileHover={{ scale: 1.4, x: [0, -5, 7, 0], y: [0, 4, -3, 0], transition: { duration: 0.6 } }}
        />

        {/* Bottom area - Row 3 (85-95%) */}
        <motion.div
          className="absolute w-2 h-2 bg-blue-300 rounded-full cursor-pointer"
          style={{ top: '85%', left: '12%' }}
          animate={{
            boxShadow: [
              '0 0 14px rgba(147, 197, 253, 0.5)',
              '0 0 28px rgba(147, 197, 253, 0.9)',
              '0 0 14px rgba(147, 197, 253, 0.5)'
            ],
            scale: [1, 1.3, 1],
            x: [0, 1.5, -1.5, 0],
            y: [0, -1, 1, 0]
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
          whileHover={{ scale: 1.8, x: [0, 4, -6, 0], y: [0, -2, 3, 0], transition: { duration: 0.4 } }}
        />

        <motion.div
          className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full cursor-pointer"
          style={{ top: '88%', left: '40%' }}
          animate={{
            boxShadow: [
              '0 0 16px rgba(34, 211, 238, 0.6)',
              '0 0 32px rgba(34, 211, 238, 1)',
              '0 0 16px rgba(34, 211, 238, 0.6)'
            ],
            scale: [1, 1.2, 1],
            x: [0, -2.5, 2.5, 0],
            y: [0, 1.5, -1.5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.6, x: [0, 6, -4, 0], y: [0, -3, 5, 0], transition: { duration: 0.5 } }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-blue-400 rounded-full cursor-pointer"
          style={{ top: '90%', left: '70%' }}
          animate={{
            boxShadow: [
              '0 0 18px rgba(96, 165, 250, 0.7)',
              '0 0 36px rgba(96, 165, 250, 1)',
              '0 0 18px rgba(96, 165, 250, 0.7)'
            ],
            scale: [1, 1.15, 1],
            x: [0, 2, -2, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.4, x: [0, -7, 5, 0], y: [0, 3, -4, 0], transition: { duration: 0.6 } }}
        />

        {/* Corner accent particles */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full cursor-pointer"
          style={{ top: '10%', left: '90%' }}
          animate={{
            boxShadow: [
              '0 0 10px rgba(147, 197, 253, 0.4)',
              '0 0 20px rgba(147, 197, 253, 0.8)',
              '0 0 10px rgba(147, 197, 253, 0.4)'
            ],
            scale: [1, 1.3, 1],
            x: [0, -1, 1, 0],
            y: [0, 0.5, -0.5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          whileHover={{ scale: 1.8, x: [0, -4, 6, 0], y: [0, 2, -3, 0], transition: { duration: 0.4 } }}
        />

        <motion.div
          className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full cursor-pointer"
          style={{ top: '93%', left: '5%' }}
          animate={{
            boxShadow: [
              '0 0 10px rgba(103, 232, 249, 0.4)',
              '0 0 20px rgba(103, 232, 249, 0.8)',
              '0 0 10px rgba(103, 232, 249, 0.4)'
            ],
            scale: [1, 1.25, 1],
            x: [0, 1, -1, 0],
            y: [0, -0.5, 0.5, 0]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          whileHover={{ scale: 1.8, x: [0, 3, -2, 0], y: [0, -2, 4, 0], transition: { duration: 0.4 } }}
        />
      </div>

      {/* Static background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse z-30"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500 z-30"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-1000 z-30"></div>
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-1500 z-30"></div>

      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-blue-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-spin-slow z-0"></div>

      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] z-0">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-400"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
