import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import IconProvider from './components/IconProvider';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  return (
    <IconProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Cursor />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </IconProvider>
  );
};

export default App; 