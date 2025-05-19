import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './styled';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Roboto+Mono&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body {
    position: relative;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }
  
  ul, ol {
    list-style: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  /* Disable cursor to use custom cursor */
  * {
    cursor: none !important;
  }
`;

export default GlobalStyle; 