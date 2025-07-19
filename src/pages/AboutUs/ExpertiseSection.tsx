import { motion } from 'framer-motion';
import AnimatedPoint from './AnimatedPoint';
import { useInView } from 'react-intersection-observer';
import { points } from './AboutConfig';


export default function ExpertiseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div style={{
      padding: '4rem 2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: '#f0f0f0',
      fontFamily: 'sans-serif',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      borderRadius: '16px'
    }}>
      <h2
        style={{
          fontSize: '1.8rem',
          marginBottom: '2rem',
          fontWeight: '700',
        }}
      >
        With{' '}
        <span
          style={{
            borderBottom: '3px solid #AF6118',
            paddingBottom: '2px',
          }}
        >
          over 25+ years
        </span>{' '}
        of combined industry experience,<br />
        we specialize in practical, high-impact solutions across
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '900px'
      }}>
        {points.map((point, index) => (
          <AnimatedPoint key={index} text={point} />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          marginTop: '4rem',
          padding: '3rem 2rem',
          maxWidth: '900px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#e0e0e0',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          fontWeight: 300,
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(255, 165, 0, 0.05)',
        }}
      >
        <p style={{ marginBottom: '1.5rem' }}>
          We’ve successfully led <strong style={{ color: '#ffa500' }}>localization</strong>, <strong style={{ color: '#ffa500' }}>sourcing</strong>,
          and <strong style={{ color: '#ffa500' }}>digital transformation</strong> projects for global OEMs, Tier-1 suppliers, and MSMEs —
          delivering measurable cost savings, improved supplier performance, and streamlined operations.
        </p>
        <p>
          <span style={{ fontWeight: 500, color: '#ffffff' }}>Optimax</span> blends engineering depth with modern tools to create
          real-world, scalable results for manufacturers ready to evolve.
        </p>
      </motion.div>


    </div>
  );
}
