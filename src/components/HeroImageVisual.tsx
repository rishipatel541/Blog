import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../assets/hh.jpeg';

export function HeroImageVisual() {
  const ref = useRef<HTMLDivElement>(null);
  // Parallax effect on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);
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
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ x, y }}
      className="relative h-[380px] w-full sm:h-[420px] flex items-center justify-center"
    >
      <motion.img
        src={heroImg}
        alt="Hero visual"
        className="w-full max-w-[340px] sm:max-w-[400px] shadow-2xl"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        draggable={false}
      />
    </motion.div>
  );
}
