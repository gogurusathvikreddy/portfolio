import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 120px ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 2px;
  }
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.light : theme.colors.text};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.primary : 'rgba(33, 150, 243, 0.1)'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const ProjectImage = styled.div<{ bgImage: string }>`
  height: 200px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
  }
`;

const ProjectInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`;

const ProjectDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.75rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
`;

const ProjectLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Local Map Application',
      date: 'March - May 2024',
      description: 'A web-based local map application developed using the MERN stack. Enables users to search, view, and interact with local places efficiently. Implemented user authentication, real-time location tracking, and an interactive UI.',
      image: 'https://images.unsplash.com/photo-1508802654646-fb6b7f78027d?q=80&w=1000&auto=format&fit=crop',
      category: 'web',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Open street'],
      demoLink: '#',
      codeLink: 'https://github.com/gogurusathvikreddy'
    },
    {
      id: 2,
      title: 'LLM-Based Chatbot',
      date: 'March - May 2023',
      description: 'An AI-powered chatbot using Large Language Models (LLMs) for intelligent and context-aware conversations. Designed to assist users by providing accurate and relevant responses in real-time.',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1000&auto=format&fit=crop',
      category: 'ai',
      techStack: ['Python', 'Langchain', 'Langsmith', 'OpenAI/GPT', 'React.js'],
      demoLink: '#',
      codeLink: 'https://github.com/gogurusathvikreddy'
    },
    {
      id: 3,
      title: 'AWS Cloud Infrastructure',
      date: 'Dec 2022 - Feb 2024',
      description: 'Designed and implemented scalable AWS cloud infrastructure for web applications. Includes EC2 instances, S3 storage, RDS databases, Lambda functions, and more.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      category: 'cloud',
      techStack: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'VPC'],
      demoLink: '#',
      codeLink: 'https://github.com/gogurusathvikreddy'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      date: 'Jan - Apr 2023',
      description: 'A full-featured e-commerce platform with user authentication, product listings, shopping cart, and payment integration. Built with responsive design for optimal user experience.',
      image: 'https://images.unsplash.com/photo-1565138146061-e29b079736c0?q=80&w=1000&auto=format&fit=crop',
      category: 'web',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
      demoLink: '#',
      codeLink: 'https://github.com/gogurusathvikreddy'
    },
    {
      id: 5,
      title: 'Stock Market Analysis Tool',
      date: 'Jun - Aug 2023',
      description: 'An application for conducting stock market analysis, leveraging data visualization and statistical methods to provide insights for investment decisions.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
      category: 'ai',
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'React', 'Node.js'],
      demoLink: '#',
      codeLink: 'https://github.com/gogurusathvikreddy'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <ProjectsSection>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </SectionTitle>
      
      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'web'} 
          onClick={() => setFilter('web')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Web Development
        </FilterButton>
        <FilterButton 
          active={filter === 'ai'} 
          onClick={() => setFilter('ai')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AI/ML
        </FilterButton>
        <FilterButton 
          active={filter === 'cloud'} 
          onClick={() => setFilter('cloud')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cloud Computing
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <ProjectImage bgImage={project.image} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDate>{project.date}</ProjectDate>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </ProjectLink>
                <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 