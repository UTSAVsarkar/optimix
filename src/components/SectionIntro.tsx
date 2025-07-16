// src/components/SectionIntro.tsx
import React, { useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion, useInView } from 'framer-motion';

const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);

interface SectionIntroProps {
  title: string;
  descriptionLines: string[]; // ✅ now an array of lines
  bgcolor?: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  descriptionLines,
  bgcolor = 'transparent',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const isBgColored = bgcolor !== 'transparent' && bgcolor !== '';
  const textColor = isBgColored ? 'white' : 'black';

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: bgcolor,
        color: textColor,
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
      }}
    >
      {/* Left side - Title */}
      <MotionStack
        spacing={2}
        alignItems="center"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            letterSpacing: 2,
            fontSize: '1rem',
            textTransform: 'uppercase',
            color: textColor,
          }}
        >
          {title}
        </Typography>
        <ArrowDownwardIcon
          sx={{
            transform: 'rotate(-45deg)',
            fontSize: '10rem',
            color: textColor,
          }}
        />
      </MotionStack>

      {/* Right side - Paragraph */}
      <MotionTypography
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 200,
          lineHeight: 1.4,
          textAlign: { xs: 'center', md: 'left' },
          color: textColor,
        }}
      >
        {descriptionLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </MotionTypography>
    </Box>
  );
};

export default SectionIntro;