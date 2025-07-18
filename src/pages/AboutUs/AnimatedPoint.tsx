import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  text: string;
}

export default function AnimatedPoint({ text }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        background: '#ffffff',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        fontSize: '1rem',
        textAlign: 'left',
        color: '#2c2c2c'
      }}
    >
      • {text}
    </motion.div>
  );
}
