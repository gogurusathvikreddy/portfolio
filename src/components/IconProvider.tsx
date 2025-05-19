import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import { 
  faGithub, 
  faLinkedinIn, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram
);

interface IconProviderProps {
  children: React.ReactNode;
}

const IconProvider: React.FC<IconProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default IconProvider; 