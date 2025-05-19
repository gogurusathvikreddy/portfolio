import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
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

const SkillCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CategoryButton = styled(motion.button)<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ active, theme }) => active ? 
    `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` : 
    theme.colors.light};
  color: ${({ active, theme }) => active ? theme.colors.light : theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const SkillName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.dark};
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
`;

const ProgressFill = styled(motion.div)<{ percentage: number }>`
  height: 100%;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  width: ${({ percentage }) => `${percentage}%`};
  border-radius: 4px;
`;

const ProficiencyText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
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

const progressVariants = {
  initial: { width: 0 },
  animate: (percentage: number) => ({
    width: `${percentage}%`,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 }
  })
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'cloud', name: 'Cloud/Databases' },
    { id: 'tools', name: 'Tools & Methodologies' }
  ];
  
  const skills = [
    {
      name: 'JavaScript',
      category: 'languages',
      description: 'Modern ES6+ JavaScript for building interactive web applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      proficiency: 85
    },
    {
      name: 'Java',
      category: 'languages',
      description: 'Object-oriented programming for enterprise applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      proficiency: 90
    },
    {
      name: 'Python',
      category: 'languages',
      description: 'Data processing, AI/ML applications, and scripting.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      proficiency: 80
    },
    {
      name: 'C',
      category: 'languages',
      description: 'System programming and algorithmic problem solving.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      proficiency: 75
    },
    {
      name: 'React.js',
      category: 'webdev',
      description: 'Building component-based user interfaces and SPAs.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      proficiency: 85
    },
    {
      name: 'Node.js',
      category: 'webdev',
      description: 'Server-side JavaScript runtime for building scalable applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      proficiency: 80
    },
    {
      name: 'MongoDB',
      category: 'cloud',
      description: 'NoSQL database for storing application data.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      proficiency: 85
    },
    {
      name: 'Express.js',
      category: 'webdev',
      description: 'Web application framework for Node.js.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      proficiency: 80
    },
    {
      name: 'AWS',
      category: 'cloud',
      description: 'Cloud services for deploying and scaling applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      proficiency: 75
    },
    {
      name: 'HTML/CSS',
      category: 'webdev',
      description: 'Creating structured, responsive and visually appealing web pages.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      proficiency: 90
    },
    {
      name: 'Git',
      category: 'tools',
      description: 'Version control and collaborative development.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      proficiency: 85
    },
    {
      name: 'Agile/Scrum',
      category: 'tools',
      description: 'Iterative and incremental software development methodologies.',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/scrumalliance.svg',
      proficiency: 80
    }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <SkillsSection>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </SectionTitle>
      
      <SkillCategoriesContainer>
        {categories.map((category) => (
          <CategoryButton 
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </SkillCategoriesContainer>
      
      <SkillsContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <SkillIcon>
              <img src={skill.icon} alt={skill.name} />
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
            <ProgressBar>
              <ProgressFill 
                percentage={skill.proficiency}
                variants={progressVariants}
                initial="initial"
                animate="animate"
                custom={skill.proficiency}
              />
            </ProgressBar>
            <ProficiencyText>{skill.proficiency}% Proficiency</ProficiencyText>
          </SkillCard>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 