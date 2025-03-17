'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const robotVariants = {
  right: {
    x: [0, 20, 0],
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: {
      x: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: 'easeInOut' },
      y: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: 'easeInOut' },
      rotate: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: 'easeInOut',
      },
    },
  },
  left: {
    x: [0, -20, 0],
    y: [0, -15, 0],
    rotate: [0, -5, 0],
    transition: {
      x: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: 'easeInOut' },
      y: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: 'easeInOut' },
      rotate: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: 'easeInOut',
      },
    },
  },
};

const sections = [
  {
    id: 'hero',
    position: 'left',
    image: '/peace-robot.png',
    sectionNumber: 1,
  },
  {
    id: 'about',
    position: 'left',
    image: '/peace-robot.png',
    sectionNumber: 2,
  },
  {
    id: 'services',
    position: 'right',
    image: '/peace-robot.png',
    sectionNumber: 3,
  },
  {
    id: 'dashboard',
    position: 'left',
    image: '/peace-robot.png',
    sectionNumber: 5,
  },
  {
    id: 'faq',
    position: 'right',
    image: '/peace-robot.png',
    sectionNumber: 7,
  },
];

export default function AnimatedRobot() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useEffect(() => {
    const checkSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
            setCurrentSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', checkSection);
    checkSection(); // Check on initial load

    return () => window.removeEventListener('scroll', checkSection);
  }, []);

  const isHeroSection = currentSection.id === 'hero';
  const isAboutSection = currentSection.id === 'about';

  const getRobotPosition = () => {
    if (isHeroSection) {
      return 'calc(50vw + 100px)'; // Slightly left in hero section
    } else if (isAboutSection) {
      return 'calc(50vw - 425px)'; // Slightly left in about section
    } else {
      return currentSection.position === 'right'
        ? 'calc(100vw - 350px)'
        : '50px';
    }
  };

  return (
    <motion.div
      className="fixed z-40 w-[200px] md:w-[300px] pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: getRobotPosition(),
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      style={{ top: '30%' }}
    >
      <motion.div
        variants={robotVariants}
        animate={currentSection.position}
        className="relative"
      >
        <div className="absolute inset-0 bg-yellow-300/30 dark:bg-yellow-400/20 rounded-full filter blur-3xl -z-10" />
        <img
          src={currentSection.image || '/placeholder.svg'}
          alt="Animated Robot"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
