import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; /* Hide cursor on mobile devices */
  }
`;

const CursorDot = styled(motion.div)`
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      // Use the tablet breakpoint from theme - 768px is common for tablets
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Skip all event listeners on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('clickable')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .clickable');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Run this effect when the DOM changes to catch newly rendered elements
  useEffect(() => {
    // Skip on mobile
    if (isMobile) return;
    
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .clickable');
      
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
      
      return () => {
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };
    
    // Set up a mutation observer to detect DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    
    const cleanup = addHoverListeners();
    
    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [isMobile]);

  const dotVariants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      opacity: 0.8,
    },
    clicking: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      scale: 1.5,
      opacity: 1,
    },
    hovering: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      scale: 1.8,
      backgroundColor: "#f50057",
      opacity: 1,
    },
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 0.5,
      },
      opacity: 0.6,
    },
    clicking: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 0.7,
      backgroundColor: "rgba(245, 0, 87, 0.15)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 0.5,
      },
      opacity: 1,
    },
    hovering: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: "rgba(245, 0, 87, 0.15)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        mass: 0.5,
      },
      opacity: 1,
    },
  };

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <CursorContainer>
      <CursorDot
        variants={dotVariants}
        animate={isClicking ? "clicking" : isHovering ? "hovering" : "default"}
      />
      <CursorRing
        variants={ringVariants}
        animate={isClicking ? "clicking" : isHovering ? "hovering" : "default"}
      />
    </CursorContainer>
  );
};

export default Cursor; 