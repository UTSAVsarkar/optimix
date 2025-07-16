import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const MotionLine = () => {
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
        backgroundColor: '#000',
        width: '100%',
        margin: '2rem 0',
      }}
    />
  );
};

export default MotionLine;