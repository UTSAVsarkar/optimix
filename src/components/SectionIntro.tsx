import React, { useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);

interface SectionIntroProps {
  title: string;
  descriptionLines: string[];
  bgcolor?: string;
  children?: React.ReactNode;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  descriptionLines,
  bgcolor = 'transparent',
  children = '',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const isBgColored = bgcolor !== 'transparent' && bgcolor !== '';
  const textColor = isBgColored ? 'white' : 'black';

  return (
    <div style={{backgroundColor: bgcolor}}>
      <Box sx={{ color: textColor }}>
        <Box
          ref={ref}
          sx={{
            px: { xs: 2, md: 4 },
            py: { xs: 2, md: 2 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Left side - Title */}
          <MotionStack
            spacing={1}
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
            <KeyboardDoubleArrowDown
              sx={{
                fontSize: '8rem',
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
      </Box>
      {children}
    </div>
  );
};

export default SectionIntro;