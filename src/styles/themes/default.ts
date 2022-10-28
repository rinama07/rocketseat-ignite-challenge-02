export const defaultTheme = {
  border: {
    radius: {
      sm: '4px',
      md: '6px',
      lg: '36px',
    },
  },
  font: {
    text: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
    },
    heading: {
      sm: '1.125rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '3rem',
    },
  },
  color: {
    white: '#ffffff',

    yellow300: '#f1e9c9',
    yellow500: '#dbac2c',
    yellow700: '#c47f17',

    purple300: '#ebe5f9',
    purple500: '#8047f8',
    purple700: '#4b2995',

    brown300: '#8d8686',
    brown400: '#574f4d',
    brown500: '#403937',
    brown700: '#272221',

    gray100: '#fafafa',
    gray200: '#f3f2f2',
    gray300: '#ededed',
    gray400: '#e6e5e5',
    gray500: '#d7d5d5',
  },
} as const;

export type ThemeColor = keyof typeof defaultTheme.color;
export type ThemeFontTextSize = keyof typeof defaultTheme.font.text;
export type ThemeFontHeadingSize = keyof typeof defaultTheme.font.heading;
