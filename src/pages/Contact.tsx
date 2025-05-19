import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
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

const ContactText = styled(motion.p)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactInfoList = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: white;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4px;
`;

const ContactValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-5px);
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.dark};
`;

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: ${({ theme }) => theme.spacing.md};
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection>
      <Container>
        <ContentColumn
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionTitle variants={fadeInUp}>Get In Touch</SectionTitle>
          <ContactText variants={fadeInUp}>
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology and development. Feel free to reach out through the form or via any of the contact methods below.
          </ContactText>
          
          <ContactInfoList variants={staggerContainer}>
                        <ContactItem variants={fadeInUp}>              <ContactIcon>                <FontAwesomeIcon icon={faEnvelope} />              </ContactIcon>              <ContactInfo>                <ContactLabel>Email</ContactLabel>                <ContactValue>gogurusathvikreddy@gmail.com</ContactValue>              </ContactInfo>            </ContactItem>            <ContactItem variants={fadeInUp}>              <ContactIcon>                <FontAwesomeIcon icon={faPhone} />              </ContactIcon>              <ContactInfo>                <ContactLabel>Phone</ContactLabel>                <ContactValue>+91-9573158664</ContactValue>              </ContactInfo>            </ContactItem>            <ContactItem variants={fadeInUp}>              <ContactIcon>                <FontAwesomeIcon icon={faMapMarkerAlt} />              </ContactIcon>              <ContactInfo>                <ContactLabel>Location</ContactLabel>                <ContactValue>Hyderabad, India</ContactValue>              </ContactInfo>            </ContactItem>
          </ContactInfoList>
          
          <SectionTitle variants={fadeInUp}>Follow Me</SectionTitle>
          <SocialLinks variants={staggerContainer}>
                        <SocialLink               href="https://github.com/gogurusathvikreddy"               target="_blank"              rel="noopener noreferrer"              variants={fadeInUp}              whileHover={{ y: -5 }}              whileTap={{ scale: 0.95 }}            >              <FontAwesomeIcon icon={faGithub} />            </SocialLink>            <SocialLink               href="https://linkedin.com/in/gogurusathvikreddy"               target="_blank"              rel="noopener noreferrer"              variants={fadeInUp}              whileHover={{ y: -5 }}              whileTap={{ scale: 0.95 }}            >              <FontAwesomeIcon icon={faLinkedinIn} />            </SocialLink>            <SocialLink               href="https://twitter.com/gogurusathvik"               target="_blank"              rel="noopener noreferrer"              variants={fadeInUp}              whileHover={{ y: -5 }}              whileTap={{ scale: 0.95 }}            >              <FontAwesomeIcon icon={faTwitter} />            </SocialLink>            <SocialLink               href="https://instagram.com/gogurusathvik"               target="_blank"              rel="noopener noreferrer"              variants={fadeInUp}              whileHover={{ y: -5 }}              whileTap={{ scale: 0.95 }}            >              <FontAwesomeIcon icon={faInstagram} />            </SocialLink>
          </SocialLinks>
        </ContentColumn>
        
        <ContentColumn
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Form
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            )}
          </Form>
        </ContentColumn>
      </Container>
    </ContactSection>
  );
};

export default Contact; 