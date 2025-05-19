import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      text: string;
      background: string;
      accent1: string;
      accent2: string;
      grey: string;
      darkGrey: string;
      success: string;
      error: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      code: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

declare global {
  interface Window {
    addEventListener(type: string, listener: (this: Window, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: (this: Window, ev: MouseEvent) => any, options?: boolean | EventListenerOptions): void;
  }
  
  interface Element {
    addEventListener(type: string, listener: (this: Element, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: (this: Element, ev: MouseEvent) => any, options?: boolean | EventListenerOptions): void;
  }
} 