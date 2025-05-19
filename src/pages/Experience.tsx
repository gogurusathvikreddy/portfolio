import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 120px ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.light};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 0 50px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: left;
      padding: 0 0 0 60px;
    }
  }
  
  &:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 0 0 60px;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 12px;
    }
  }
  
  &:nth-child(odd):after {
    right: -10px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      right: auto;
    }
  }
  
  &:nth-child(even):after {
    left: -10px;
  }
`;

const ExperienceCard = styled(motion.div)`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: translateY(-5px);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CompanyName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const JobType = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const DateLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const DateRange = styled.div`
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Location = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  
  i {
    margin-right: 5px;
  }
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 50%;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TechStack = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const TechTitle = styled.div`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.75rem;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Development Intern',
      company: 'EY GDS',
      location: 'Hyderabad',
      type: 'Online',
      date: 'May - July 2024',
      responsibilities: [
        'Gained hands-on experience in developing scalable web applications using the MERN stack.',
        'Worked on both frontend and backend, implementing RESTful APIs and database management.',
        'Developed and optimized UI components for better user experience and performance.',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS']
    },
    {
      id: 2,
      title: 'AWS Cloud Computing Intern',
      company: 'AICTE-Eduskills',
      location: 'Hyderabad',
      type: 'Online',
      date: 'Dec 2022 - Feb 2024',
      responsibilities: [
        'In-depth understanding of AWS cloud computing services, including EC2, S3, RDS, Lambda, IAM, VPC, and more.',
        'Proficient in designing, deploying, and managing fault-tolerant, highly available, and scalable AWS solutions.',
        'Hands-on experience in cloud infrastructure provisioning, monitoring, and automation using AWS Management Console and AWS CLI.',
      ],
      techStack: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'VPC']
    },
    {
      id: 3,
      title: 'Project Lead',
      company: 'Local Map Application Project',
      location: 'Hyderabad',
      type: 'College Project',
      date: 'March - May 2024',
      responsibilities: [
        'Led the development of a web-based local map application using the MERN stack.',
        'Implemented user authentication, real-time location tracking, and an interactive UI.',
        'Collaborated with a team of developers to ensure timely project delivery.',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Open street']
    },
    {
      id: 4,
      title: 'ML Research Assistant',
      company: 'LLM-Based Chatbot Project',
      location: 'Hyderabad',
      type: 'College Project',
      date: 'March - May 2023',
      responsibilities: [
        'Designed and developed an AI-powered chatbot using Large Language Models.',
        'Implemented context-aware conversations to provide accurate and relevant responses.',
        'Integrated the chatbot with a React-based frontend for user interaction.',
      ],
      techStack: ['Python', 'Langchain', 'Langsmith', 'OpenAI/GPT', 'React.js']
    },
  ];

  return (
    <ExperienceSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </SectionTitle>

        <Timeline
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience) => (
            <TimelineItem key={experience.id} variants={fadeInUp}>
              <ExperienceCard whileHover={{ y: -5 }}>
                <ExperienceHeader>
                  <CompanyInfo>
                    <JobTitle>{experience.title}</JobTitle>
                    <CompanyName>{experience.company}</CompanyName>
                    <JobType>{experience.type}</JobType>
                  </CompanyInfo>
                  <DateLocation>
                    <DateRange>{experience.date}</DateRange>
                                         <Location>                      <FontAwesomeIcon icon={faMapMarkerAlt} />                      {experience.location}                    </Location>
                  </DateLocation>
                </ExperienceHeader>

                <Responsibilities>
                  {experience.responsibilities.map((responsibility, index) => (
                    <ResponsibilityItem key={index}>
                      {responsibility}
                    </ResponsibilityItem>
                  ))}
                </Responsibilities>

                <TechStack>
                  <TechTitle>Technology Stack:</TechTitle>
                  <TechTags>
                    {experience.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechTags>
                </TechStack>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 