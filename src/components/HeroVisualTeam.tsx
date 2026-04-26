import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Simple SVGs for plants and speech bubble
const Plant = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} width={40} height={40}>
    <ellipse cx="20" cy="35" rx="12" ry="5" fill="#A7F3D0" fillOpacity="0.5" />
    <path d="M20 35 Q18 25 10 20 Q18 22 20 10 Q22 22 30 20 Q22 25 20 35 Z" fill="#6EE7B7" />
  </svg>
);

const SpeechBubble = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 60 36" fill="none" className={className} width={60} height={36}>
    <rect x="4" y="4" width="52" height="24" rx="8" fill="#fff" fillOpacity="0.9" />
    <path d="M20 28 L30 36 L28 28 Z" fill="#fff" fillOpacity="0.9" />
    <rect x="12" y="12" width="36" height="4" rx="2" fill="#A5B4FC" />
    <rect x="12" y="18" width="20" height="3" rx="1.5" fill="#A5B4FC" />
  </svg>
);

// Abstract team illustration (3 people, laptops, flat style)
const Person = ({ color, laptop, style, className = '' }: { color: string; laptop: string; style?: React.CSSProperties; className?: string }) => (
  <div className={`absolute ${className}`} style={style}>
    {/* Body */}
    <div className="w-10 h-20 rounded-[20px]" style={{ background: color }} />
    {/* Head */}
    <div className="w-7 h-7 rounded-full bg-white border-2 border-gray-200 absolute left-1.5 top-[-18px]" />
    {/* Laptop */}
    <div className="w-9 h-5 rounded-lg absolute left-0.5 top-10" style={{ background: laptop, boxShadow: '0 2px 8px #0001' }} />
  </div>
);

export function HeroVisualTeam() {
  const ref = useRef<HTMLDivElement>(null);
  // Parallax effect on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set((e.clientX - rect.left - centerX) / centerX);
    mouseY.set((e.clientY - rect.top - centerY) / centerY);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ x, y }}
      className="relative h-[380px] w-full sm:h-[420px]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-violet-500/30 blur-[80px]" />
        <div className="absolute h-40 w-40 rounded-full bg-blue-500/25 blur-[60px]" />
      </div>
      {/* Plants */}
      <motion.div
        className="absolute left-0 bottom-0"
        initial={{ y: 10, opacity: 0.7 }}
        animate={{ y: [10, 0, 10], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Plant />
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-2"
        initial={{ y: 8, opacity: 0.7 }}
        animate={{ y: [8, 0, 8], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Plant />
      </motion.div>
      {/* Team illustration */}
      <Person
        color="#FBBF24"
        laptop="#fff"
        className="left-8 bottom-0 z-10"
        style={{ transform: 'scale(1.1)' }}
      />
      <Person
        color="#6366F1"
        laptop="#fff"
        className="left-1/2 bottom-0 z-20"
        style={{ transform: 'translateX(-50%) scale(1.2)' }}
      />
      <Person
        color="#F87171"
        laptop="#fff"
        className="right-8 bottom-0 z-10"
        style={{ transform: 'scale(1.1)' }}
      />
      {/* Speech bubble */}
      <motion.div
        className="absolute left-1/2 top-8 z-30"
        style={{ x: '-50%' }}
        initial={{ y: -10, opacity: 0.8 }}
        animate={{ y: [-10, 0, -10], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SpeechBubble />
      </motion.div>
    </motion.div>
  );
}
