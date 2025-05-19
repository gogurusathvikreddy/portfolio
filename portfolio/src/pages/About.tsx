import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 120px ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContentColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 5px solid ${({ theme }) => theme.colors.secondary};
    z-index: -1;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 2px;
  }
`;

const Bio = styled(motion.p)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled(motion.li)`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  min-width: 120px;
  color: ${({ theme }) => theme.colors.dark};
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const EducationList = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const EducationItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const EducationTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`;

const EducationInstitution = styled.div`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.grey};
`;

const EducationYear = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
`;

const EducationGrade = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const CertificationList = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const CertificationItem = styled(motion.div)`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CertificationIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  img {
    width: 24px;
    height: 24px;
  }
`;

const CertificationContent = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`;

const CertificationIssuer = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About: React.FC = () => {
  return (
    <AboutSection>
      <Container>
        <ContentColumn
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionTitle variants={fadeInUp}>About Me</SectionTitle>
          <Bio variants={fadeInUp}>
            Aspiring Software Engineer with a solid foundation in Java, JavaScript, and Full-Stack (MERN) Development. I have cultivated a passion for Data Structures & Algorithms and AI-driven solutions. My experience includes building scalable applications and conducting stock market analysis, combining technical expertise with problem-solving capabilities to contribute to dynamic and innovation-driven teams.
          </Bio>
          
          <InfoList variants={staggerContainer}>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>Name:</InfoLabel>
              <InfoValue>Goguru Sathvik Reddy</InfoValue>
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>gogurusathvikreddy@gmail.com</InfoValue>
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>Phone:</InfoLabel>
              <InfoValue>+91-9573158664</InfoValue>
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>GitHub:</InfoLabel>
              <InfoValue>github.com/gogurusathvikreddy</InfoValue>
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>LinkedIn:</InfoLabel>
              <InfoValue>linkedin.com/in/gogurusathvikreddy</InfoValue>
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              <InfoLabel>Location:</InfoLabel>
              <InfoValue>Hyderabad, India</InfoValue>
            </InfoItem>
          </InfoList>
          
          <SectionTitle variants={fadeInUp}>Certifications</SectionTitle>
          <CertificationList variants={staggerContainer}>
            <CertificationItem variants={fadeInUp}>
              <CertificationIcon>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazon.svg" alt="AWS" />
              </CertificationIcon>
              <CertificationContent>
                <CertificationTitle>AWS Certified Machine Learning</CertificationTitle>
                <CertificationIssuer>AICTE EDUSKILLS, FEB 2024</CertificationIssuer>
              </CertificationContent>
            </CertificationItem>
            <CertificationItem variants={fadeInUp}>
              <CertificationIcon>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg" alt="Java" />
              </CertificationIcon>
              <CertificationContent>
                <CertificationTitle>NPTEL ON JAVA</CertificationTitle>
                <CertificationIssuer>NPTEL, In Progress</CertificationIssuer>
              </CertificationContent>
            </CertificationItem>
            <CertificationItem variants={fadeInUp}>
              <CertificationIcon>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/c.svg" alt="C" />
              </CertificationIcon>
              <CertificationContent>
                <CertificationTitle>Problem Solving Through Programming in C</CertificationTitle>
                <CertificationIssuer>Swayam, NPTEL, July - October 2023</CertificationIssuer>
              </CertificationContent>
            </CertificationItem>
            <CertificationItem variants={fadeInUp}>
              <CertificationIcon>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg" alt="DSA" />
              </CertificationIcon>
              <CertificationContent>
                <CertificationTitle>DATA STRUCTURES AND ALGORITHMS</CertificationTitle>
                <CertificationIssuer>Swayam, NPTEL, July - October 2023</CertificationIssuer>
              </CertificationContent>
            </CertificationItem>
          </CertificationList>
        </ContentColumn>
        
        <ContentColumn
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <ProfileImageContainer variants={fadeInUp}>
            <ProfileImage 
              src="https://via.placeholder.com/500x600/f5f5f5/333333?text=Goguru+Sathvik+Reddy" 
              alt="Goguru Sathvik Reddy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </ProfileImageContainer>
          
          <SectionTitle variants={fadeInUp} style={{ marginTop: '3rem' }}>Education</SectionTitle>
          <EducationList variants={staggerContainer}>
            <EducationItem variants={fadeInUp}>
              <EducationTitle>Bachelor of Technology in Computer Science and Engineering (AI/ML)</EducationTitle>
              <EducationInstitution>Vardhaman College of Engineering, Shamshabad</EducationInstitution>
              <EducationYear>2022-26</EducationYear>
              <EducationGrade>CGPA: 8.5</EducationGrade>
            </EducationItem>
            <EducationItem variants={fadeInUp}>
              <EducationTitle>Intermediate in MPC</EducationTitle>
              <EducationInstitution>Tagore Junior College, Shamshabad</EducationInstitution>
              <EducationYear>2020-22</EducationYear>
              <EducationGrade>CGPA or Percentage: 9.0</EducationGrade>
            </EducationItem>
            <EducationItem variants={fadeInUp}>
              <EducationTitle>Tenth Class</EducationTitle>
              <EducationInstitution>Dr.KKR'S Gowtham School, Medchal</EducationInstitution>
              <EducationYear>2020</EducationYear>
              <EducationGrade>CGPA or Percentage: 10</EducationGrade>
            </EducationItem>
          </EducationList>
          
          <SectionTitle variants={fadeInUp} style={{ marginTop: '3rem' }}>Achievements</SectionTitle>
          <InfoList variants={staggerContainer}>
            <InfoItem variants={fadeInUp}>
              • Manage and mentor a team of 10 peer students to guarantee successful team performance.
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              • First Prize in the "Data Explorer Challenge", in FESTRONIX 2K24 at Vardhaman College of Engineering.
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              • Rated 5 STAR in coding platform, HackerRack with ID gogurusathvikre1.
            </InfoItem>
            <InfoItem variants={fadeInUp}>
              • Achieved 5 badges in coding platform, Hackerrank with ID gogurusathvikre1.
            </InfoItem>
          </InfoList>
        </ContentColumn>
      </Container>
    </AboutSection>
  );
};

export default About; 