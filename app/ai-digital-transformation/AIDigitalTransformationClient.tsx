'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Brain, Zap } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Projects from '../../components/Projects'
import TechnologyStack from '../../components/TechnologyStack'
import Process from '../../components/Process'
import Contact from '../../components/Contact'
import { useLanguage } from '../../contexts/LanguageContext'

export default function AIDigitalTransformationClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* AI Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mercury-blue-50/20 via-white to-mercury-gold-50/20">
        {/* Enhanced Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
                    {/* Rotating Globe with Meridian Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-25">
                <defs>
                  <radialGradient id="globeGradient" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="rgba(46, 91, 255, 0.2)" />
                    <stop offset="70%" stopColor="rgba(46, 91, 255, 0.1)" />
                    <stop offset="100%" stopColor="rgba(46, 91, 255, 0)" />
                  </radialGradient>
                  <linearGradient id="meridianGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(46, 91, 255, 0)" />
                    <stop offset="20%" stopColor="rgba(46, 91, 255, 0.4)" />
                    <stop offset="50%" stopColor="rgba(46, 91, 255, 0.6)" />
                    <stop offset="80%" stopColor="rgba(46, 91, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(46, 91, 255, 0)" />
                  </linearGradient>
                </defs>
                
                {/* Main Globe Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="200"
                  fill="url(#globeGradient)"
                  stroke="rgba(46, 91, 255, 0.3)"
                  strokeWidth="1.5"
                />
                
                {/* Meridian Lines */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30) * (Math.PI / 180);
                  const x1 = 300 + Math.cos(angle) * 200;
                  const y1 = 300 + Math.sin(angle) * 200;
                  const x2 = 300 - Math.cos(angle) * 200;
                  const y2 = 300 - Math.sin(angle) * 200;
                  
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
                  const radius = Math.sqrt(200 * 200 - (y - 300) * (y - 300));
                  
                  if (radius > 0) {
                    return (
                      <ellipse
                        key={`parallel-${i}`}
                        cx="300"
                        cy={y}
                        rx={radius}
                        ry={radius * 0.3}
                        fill="none"
                        stroke="rgba(46, 91, 255, 0.35)"
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
                    const x = 300 + Math.cos(angle) * radius;
                    const y = 300 + Math.sin(angle) * radius;
                    
                    return (
                      <circle
                        key={`orbit-dot-${i}`}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="rgba(46, 91, 255, 0.4)"
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
                className="absolute border border-mercury-blue-300/20 rounded-full"
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
                <stop offset="0%" stopColor="rgba(46, 91, 255, 0)" />
                <stop offset="50%" stopColor="rgba(46, 91, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(46, 91, 255, 0)" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(46, 91, 255, 0)" />
                <stop offset="50%" stopColor="rgba(46, 91, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(46, 91, 255, 0)" />
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
            {/* Top area particles - fewer particles */}
            <motion.div
              className="absolute w-3 h-3 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '15%', left: '20%' }}
              animate={{
                boxShadow: [
                  '0 0 15px rgba(46, 91, 255, 0.6)',
                  '0 0 30px rgba(46, 91, 255, 1)',
                  '0 0 15px rgba(46, 91, 255, 0.6)'
                ],
                scale: [1, 1.1, 1],
                x: [0, 2, -2, 0],
                y: [0, -1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.4,
                x: [0, 8, -8, 0],
                y: [0, -4, 4, 0],
                transition: { duration: 0.6 }
              }}
            />
            
            <motion.div
              className="absolute w-2 h-2 bg-mercury-blue-500 rounded-full cursor-pointer"
              style={{ top: '25%', left: '70%' }}
              animate={{
                boxShadow: [
                  '0 0 12px rgba(46, 91, 255, 0.5)',
                  '0 0 24px rgba(46, 91, 255, 0.9)',
                  '0 0 12px rgba(46, 91, 255, 0.5)'
                ],
                scale: [1, 1.15, 1],
                x: [0, -1.5, 1.5, 0],
                y: [0, 1, -1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{
                scale: 1.5,
                x: [0, -6, 6, 0],
                y: [0, 3, -3, 0],
                transition: { duration: 0.5 }
              }}
            />

            {/* Middle transition area particles */}
            <motion.div
              className="absolute w-2.5 h-2.5 bg-mercury-blue-600 rounded-full cursor-pointer"
              style={{ top: '45%', left: '10%' }}
              animate={{
                boxShadow: [
                  '0 0 18px rgba(46, 91, 255, 0.7)',
                  '0 0 36px rgba(46, 91, 255, 1.1)',
                  '0 0 18px rgba(46, 91, 255, 0.7)'
                ],
                scale: [1, 1.2, 1],
                x: [0, 1, -1, 0],
                y: [0, -2, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{
                scale: 1.6,
                x: [0, 10, -5, 0],
                y: [0, -6, 3, 0],
                transition: { duration: 0.7 }
              }}
            />

            {/* Enhanced Bottom Half - More particles with stronger glow */}
            
            {/* Bottom area - Row 1 (55-65%) */}
            <motion.div
              className="absolute w-3.5 h-3.5 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '55%', left: '15%' }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(46, 91, 255, 0.8)',
                  '0 0 40px rgba(46, 91, 255, 1.2)',
                  '0 0 20px rgba(46, 91, 255, 0.8)'
                ],
                scale: [1, 1.15, 1],
                x: [0, 3, -3, 0],
                y: [0, -2, 2, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              whileHover={{
                scale: 1.5,
                x: [0, -8, 5, 0],
                y: [0, 4, -6, 0],
                transition: { duration: 0.6 }
              }}
            />

            <motion.div
              className="absolute w-2.5 h-2.5 bg-mercury-blue-500 rounded-full cursor-pointer"
              style={{ top: '60%', left: '45%' }}
              animate={{
                boxShadow: [
                  '0 0 16px rgba(46, 91, 255, 0.6)',
                  '0 0 32px rgba(46, 91, 255, 1)',
                  '0 0 16px rgba(46, 91, 255, 0.6)'
                ],
                scale: [1, 1.2, 1],
                x: [0, -2, 2, 0],
                y: [0, 1.5, -1.5, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
              whileHover={{
                scale: 1.6,
                x: [0, 6, -4, 0],
                y: [0, -3, 5, 0],
                transition: { duration: 0.5 }
              }}
            />

            <motion.div
              className="absolute w-3 h-3 bg-mercury-blue-600 rounded-full cursor-pointer"
              style={{ top: '58%', left: '75%' }}
              animate={{
                boxShadow: [
                  '0 0 18px rgba(46, 91, 255, 0.7)',
                  '0 0 36px rgba(46, 91, 255, 1.1)',
                  '0 0 18px rgba(46, 91, 255, 0.7)'
                ],
                scale: [1, 1.1, 1],
                x: [0, 2.5, -2.5, 0],
                y: [0, -1, 1, 0]
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.1
              }}
              whileHover={{
                scale: 1.4,
                x: [0, -7, 4, 0],
                y: [0, 2, -5, 0],
                transition: { duration: 0.6 }
              }}
            />

            {/* Bottom area - Row 2 (70-80%) */}
            <motion.div
              className="absolute w-2 h-2 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '72%', left: '8%' }}
              animate={{
                boxShadow: [
                  '0 0 14px rgba(46, 91, 255, 0.5)',
                  '0 0 28px rgba(46, 91, 255, 0.9)',
                  '0 0 14px rgba(46, 91, 255, 0.5)'
                ],
                scale: [1, 1.25, 1],
                x: [0, -1.5, 1.5, 0],
                y: [0, 2, -2, 0]
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8
              }}
              whileHover={{
                scale: 1.7,
                x: [0, 5, -3, 0],
                y: [0, -4, 6, 0],
                transition: { duration: 0.4 }
              }}
            />

            <motion.div
              className="absolute w-3 h-3 bg-mercury-blue-500 rounded-full cursor-pointer"
              style={{ top: '75%', left: '30%' }}
              animate={{
                boxShadow: [
                  '0 0 16px rgba(46, 91, 255, 0.6)',
                  '0 0 32px rgba(46, 91, 255, 1)',
                  '0 0 16px rgba(46, 91, 255, 0.6)'
                ],
                scale: [1, 1.15, 1],
                x: [0, 3, -3, 0],
                y: [0, -1.5, 1.5, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              whileHover={{
                scale: 1.5,
                x: [0, 7, -4, 0],
                y: [0, -3, 5, 0],
                transition: { duration: 0.5 }
              }}
            />

            <motion.div
              className="absolute w-2.5 h-2.5 bg-mercury-blue-600 rounded-full cursor-pointer"
              style={{ top: '78%', left: '55%' }}
              animate={{
                boxShadow: [
                  '0 0 18px rgba(46, 91, 255, 0.7)',
                  '0 0 36px rgba(46, 91, 255, 1.1)',
                  '0 0 18px rgba(46, 91, 255, 0.7)'
                ],
                scale: [1, 1.2, 1],
                x: [0, -2, 2, 0],
                y: [0, 1, -1, 0]
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
              whileHover={{
                scale: 1.6,
                x: [0, -6, 8, 0],
                y: [0, 3, -4, 0],
                transition: { duration: 0.7 }
              }}
            />

            <motion.div
              className="absolute w-3.5 h-3.5 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '74%', left: '80%' }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(46, 91, 255, 0.8)',
                  '0 0 40px rgba(46, 91, 255, 1.2)',
                  '0 0 20px rgba(46, 91, 255, 0.8)'
                ],
                scale: [1, 1.1, 1],
                x: [0, 2, -2, 0],
                y: [0, -2.5, 2.5, 0]
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
              whileHover={{
                scale: 1.4,
                x: [0, -5, 7, 0],
                y: [0, 4, -3, 0],
                transition: { duration: 0.6 }
              }}
            />

            {/* Bottom area - Row 3 (85-95%) */}
            <motion.div
              className="absolute w-2 h-2 bg-mercury-blue-500 rounded-full cursor-pointer"
              style={{ top: '85%', left: '12%' }}
              animate={{
                boxShadow: [
                  '0 0 14px rgba(46, 91, 255, 0.5)',
                  '0 0 28px rgba(46, 91, 255, 0.9)',
                  '0 0 14px rgba(46, 91, 255, 0.5)'
                ],
                scale: [1, 1.3, 1],
                x: [0, 1.5, -1.5, 0],
                y: [0, -1, 1, 0]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3.2
              }}
              whileHover={{
                scale: 1.8,
                x: [0, 4, -6, 0],
                y: [0, -2, 3, 0],
                transition: { duration: 0.4 }
              }}
            />

            <motion.div
              className="absolute w-2.5 h-2.5 bg-mercury-blue-600 rounded-full cursor-pointer"
              style={{ top: '88%', left: '40%' }}
              animate={{
                boxShadow: [
                  '0 0 16px rgba(46, 91, 255, 0.6)',
                  '0 0 32px rgba(46, 91, 255, 1)',
                  '0 0 16px rgba(46, 91, 255, 0.6)'
                ],
                scale: [1, 1.2, 1],
                x: [0, -2.5, 2.5, 0],
                y: [0, 1.5, -1.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{
                scale: 1.6,
                x: [0, 6, -4, 0],
                y: [0, -3, 5, 0],
                transition: { duration: 0.5 }
              }}
            />

            <motion.div
              className="absolute w-3 h-3 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '90%', left: '70%' }}
              animate={{
                boxShadow: [
                  '0 0 18px rgba(46, 91, 255, 0.7)',
                  '0 0 36px rgba(46, 91, 255, 1.1)',
                  '0 0 18px rgba(46, 91, 255, 0.7)'
                ],
                scale: [1, 1.15, 1],
                x: [0, 2, -2, 0],
                y: [0, -2, 2, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{
                scale: 1.4,
                x: [0, -7, 5, 0],
                y: [0, 3, -4, 0],
                transition: { duration: 0.6 }
              }}
            />

            {/* Corner accent particles */}
            <motion.div
              className="absolute w-1.5 h-1.5 bg-mercury-blue-400 rounded-full cursor-pointer"
              style={{ top: '10%', left: '90%' }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(46, 91, 255, 0.4)',
                  '0 0 20px rgba(46, 91, 255, 0.8)',
                  '0 0 10px rgba(46, 91, 255, 0.4)'
                ],
                scale: [1, 1.3, 1],
                x: [0, -1, 1, 0],
                y: [0, 0.5, -0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
              whileHover={{
                scale: 1.8,
                x: [0, -4, 6, 0],
                y: [0, 2, -3, 0],
                transition: { duration: 0.4 }
              }}
            />

            <motion.div
              className="absolute w-1.5 h-1.5 bg-mercury-blue-500 rounded-full cursor-pointer"
              style={{ top: '93%', left: '5%' }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(46, 91, 255, 0.4)',
                  '0 0 20px rgba(46, 91, 255, 0.8)',
                  '0 0 10px rgba(46, 91, 255, 0.4)'
                ],
                scale: [1, 1.25, 1],
                x: [0, 1, -1, 0],
                y: [0, -0.5, 0.5, 0]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              whileHover={{
                scale: 1.8,
                x: [0, 3, -2, 0],
                y: [0, -2, 4, 0],
                transition: { duration: 0.4 }
              }}
            />
          </div>

          {/* Static background elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-mercury-blue-400 rounded-full animate-pulse z-30"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-mercury-gold-400 rounded-full animate-pulse delay-500 z-30"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-mercury-blue-500 rounded-full animate-pulse delay-1000 z-30"></div>
          <div className="absolute bottom-20 right-40 w-2 h-2 bg-mercury-gold-500 rounded-full animate-pulse delay-1500 z-30"></div>
          
          {/* Large gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-mercury-blue-100/30 to-mercury-blue-200/20 rounded-full blur-3xl animate-pulse z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-mercury-gold-100/30 to-mercury-gold-200/20 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-mercury-blue-50/15 to-mercury-gold-50/15 rounded-full blur-3xl animate-spin-slow z-0"></div>
          
          {/* Tech grid pattern */}
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="grid grid-cols-12 h-full w-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-mercury-blue-200"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-custom relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-mercury-blue-50 to-mercury-gold-50 backdrop-blur-sm border-2 border-gradient-to-r from-mercury-blue-200/50 to-mercury-gold-200/50 text-mercury-blue-700 rounded-full text-sm font-semibold mb-12 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Brain className="w-5 h-5 mr-3 text-mercury-blue-600" />
              {t('aiTransformation.badge')}
              <Sparkles className="w-4 h-4 ml-3 text-mercury-gold-600 animate-pulse" />
          </motion.div>

            {/* Enhanced Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-mercury-blue-600 via-mercury-blue-700 to-mercury-blue-800 bg-clip-text text-transparent drop-shadow-sm">
                {t('aiTransformation.hero.title')}
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              {t('aiTransformation.hero.subtitle')}
            </motion.p>
            
            {/* Compact Stats Grid */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-16 max-w-4xl mx-auto relative z-20"
            >
              {[
                { number: "50M+", label: t('aiTransformation.stats.users'), icon: Brain },
                { number: "99.9%", label: t('aiTransformation.stats.uptime'), icon: Zap },
                { number: "24/7", label: t('aiTransformation.stats.support'), icon: Sparkles }
              ].map((stat, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-mercury-blue-100/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:border-mercury-blue-200/60 relative overflow-hidden">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-50/0 to-mercury-gold-50/0 group-hover:from-mercury-blue-50/20 group-hover:to-mercury-gold-50/10 transition-all duration-300 rounded-2xl"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Down Indicator - Perfectly Centered */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#projects-section')
              nextSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="flex flex-col items-center justify-center group">
              <span className="text-sm font-semibold text-mercury-blue-600 mb-3 group-hover:text-mercury-blue-700 transition-colors duration-300 text-center whitespace-nowrap">
                {t('common.explorePortfolio')}
              </span>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-12 border-2 border-mercury-blue-400 rounded-full flex justify-center items-start group-hover:border-mercury-blue-600 transition-colors duration-300 bg-white/20 backdrop-blur-sm mx-auto"
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-4 bg-mercury-blue-500 rounded-full mt-2 group-hover:bg-mercury-blue-700 transition-colors duration-300"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="mt-3 flex justify-center"
              >
                <ChevronDown className="w-6 h-6 text-mercury-blue-500 group-hover:text-mercury-blue-700 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with proper spacing */}
      <div id="projects-section" className="py-24 bg-gradient-to-b from-white to-mercury-blue-50/30">
      <Projects />
      </div>

      {/* Technology Stack with Enhanced Moving Bubbles Background */}
      <div id="technology-stack" className="relative py-24 overflow-hidden">
        {/* Elegant Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-50/40 via-white to-mercury-gold-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mercury-blue-100/20 via-transparent to-mercury-gold-100/15"></div>
        
        {/* Moving Glowing Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Mercury Blue Bubbles */}
          <motion.div
            className="absolute w-64 h-64 rounded-full opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(46, 91, 255, 0.15) 0%, rgba(46, 91, 255, 0.05) 50%, transparent 100%)',
              boxShadow: '0 0 60px rgba(46, 91, 255, 0.2)',
            }}
            animate={{
              x: [-100, 1400],
              y: [200, 100, 250, 150],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-48 h-48 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(46, 91, 255, 0.2) 0%, rgba(46, 91, 255, 0.08) 50%, transparent 100%)',
              boxShadow: '0 0 40px rgba(46, 91, 255, 0.25)',
            }}
            animate={{
              x: [1450, -150],
              y: [300, 180, 320, 200],
              scale: [0.8, 1.3, 0.9, 1.1, 0.8],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Medium Mercury Gold Bubbles */}
          <motion.div
            className="absolute w-32 h-32 rounded-full opacity-70"
            style={{
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.18) 0%, rgba(255, 193, 7, 0.06) 50%, transparent 100%)',
              boxShadow: '0 0 35px rgba(255, 193, 7, 0.3)',
            }}
            animate={{
              x: [-80, 1380],
              y: [50, 120, 80, 140, 60],
              scale: [1, 0.7, 1.4, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7
            }}
          />

          <motion.div
            className="absolute w-40 h-40 rounded-full opacity-55"
            style={{
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.16) 0%, rgba(255, 193, 7, 0.05) 50%, transparent 100%)',
              boxShadow: '0 0 45px rgba(255, 193, 7, 0.25)',
            }}
            animate={{
              x: [1460, -120],
              y: [350, 250, 380, 220],
              scale: [0.9, 1.2, 0.8, 1.3, 0.9],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 12
            }}
          />

          {/* Small Accent Bubbles */}
          <motion.div
            className="absolute w-20 h-20 rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle, rgba(46, 91, 255, 0.25) 0%, rgba(46, 91, 255, 0.08) 60%, transparent 100%)',
              boxShadow: '0 0 25px rgba(46, 91, 255, 0.4)',
            }}
            animate={{
              x: [-40, 1340],
              y: [100, 180, 120, 160, 110],
              scale: [1, 1.5, 0.6, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 15
            }}
          />

          <motion.div
            className="absolute w-24 h-24 rounded-full opacity-65"
            style={{
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.22) 0%, rgba(255, 193, 7, 0.07) 60%, transparent 100%)',
              boxShadow: '0 0 30px rgba(255, 193, 7, 0.35)',
            }}
            animate={{
              x: [1330, -70],
              y: [80, 160, 100, 140, 90],
              scale: [0.8, 1.3, 0.7, 1.1, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 18
            }}
          />

          {/* Micro Floating Bubbles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`micro-bubble-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(46, 91, 255, 0.4) 0%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(255, 193, 7, 0.4) 0%, transparent 100%)',
                boxShadow: i % 2 === 0 
                  ? '0 0 8px rgba(46, 91, 255, 0.5)'
                  : '0 0 8px rgba(255, 193, 7, 0.5)',
              }}
              animate={{
                x: [Math.random() * -50, 1300 + Math.random() * 50],
                y: [Math.random() * 100 + 50, Math.random() * 100 + 200, Math.random() * 100 + 100],
                scale: [0.5, 1.2, 0.3, 1, 0.5],
                opacity: [0.3, 0.8, 0.2, 0.6, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 20
              }}
            />
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <TechnologyStack />
        </div>
      </div>

      {/* Process Section with proper spacing */}
      <div className="py-24 bg-gradient-to-b from-white to-mercury-gold-50/20">
        <Process />
        </div>

      {/* Contact Section with proper spacing */}
      <div className="py-24 bg-gradient-to-b from-mercury-gold-50/20 to-white">
      <Contact />
      </div>
      
      <Footer />
    </div>
  )
}