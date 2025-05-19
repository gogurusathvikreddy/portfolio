import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const ContentContainer = styled.div`
  z-index: 1;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 60px;
    max-width: 100%;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background-color: rgba(33, 150, 243, 0.1);
  }
`;

const ModelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

const StatsContainer = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: ${({ theme }) => theme.spacing.xl};
    justify-content: center;
    width: 100%;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`;

// 3D Models
const FloatingShape = ({ position, size, color, speed }: any) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <dodecahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      
      <FloatingShape position={[-3, 2, -5]} size={1} color="#2196f3" speed={3} />
      <FloatingShape position={[3, -1, -2]} size={0.6} color="#f50057" speed={2} />
      <FloatingShape position={[0, 3, -1]} size={0.8} color="#4caf50" speed={4} />
      <FloatingShape position={[2, 1, -3]} size={1.2} color="#ff9800" speed={2.5} />
      <FloatingShape position={[-2, -2, -4]} size={0.7} color="#9c27b0" speed={3.5} />
    </>
  );
};

const Home: React.FC = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };
  
  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }
    }
  };
  
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.9,
        staggerChildren: 0.2,
        ease: "easeOut" 
      }
    }
  };
  
  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <HeroSection>
      <ContentContainer>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Goguru Sathvik Reddy
        </Title>
        <SubTitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Full Stack Developer specializing in MERN Stack, Data Structures &amp; Algorithms, and AI-driven solutions.
        </SubTitle>
        
        <ButtonContainer
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/projects">
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </PrimaryButton>
          </Link>
          <Link to="/contact">
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </SecondaryButton>
          </Link>
        </ButtonContainer>
        
        <StatsContainer
          variants={statsVariants}
          initial="hidden"
          animate="visible"
        >
          <StatItem variants={statItemVariants}>
            <StatNumber>5+</StatNumber>
            <StatLabel>Projects</StatLabel>
          </StatItem>
          <StatItem variants={statItemVariants}>
            <StatNumber>2+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem variants={statItemVariants}>
            <StatNumber>8.5</StatNumber>
            <StatLabel>CGPA</StatLabel>
          </StatItem>
        </StatsContainer>
      </ContentContainer>
      
      <ModelContainer>
        <Canvas>
          <Scene />
        </Canvas>
      </ModelContainer>
    </HeroSection>
  );
};

export default Home; 