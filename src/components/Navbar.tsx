import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(motion.div)<{ active: boolean }>`
  position: relative;
  font-weight: 500;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  
  div {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    transition: all 0.3s ease;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 9;
`;

const MobileNavLink = styled(motion.div)<{ active: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
`;

const menuVariants = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const logoVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  tap: { scale: 0.95 },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Skills', path: '/skills' },
    { title: 'Experience', path: '/experience' },
    { title: 'Contact', path: '/contact' },
  ];
  
  return (
    <NavContainer>
      <Link to="/">
        <Logo 
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileTap="tap"
        >
          SATHVIK<span>REDDY</span>
        </Logo>
      </Link>
      
      <NavLinks>
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <NavLink 
              active={location.pathname === item.path}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              {item.title}
            </NavLink>
          </Link>
        ))}
      </NavLinks>
      
      <MobileMenuButton onClick={toggleMenu}>
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
      </MobileMenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <MobileNavLink
                  active={location.pathname === item.path}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </MobileNavLink>
              </Link>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar; 