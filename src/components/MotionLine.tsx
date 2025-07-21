import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface MotionLineProps {
  color?: string; // Optional, default fallback
}

const MotionLine: React.FC<MotionLineProps> = ({ color = '#000' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        transformOrigin: 'left',
        height: '0.5px',
        backgroundColor: color,
        width: '100%',
      }}
    />
  );
};

export default MotionLine;