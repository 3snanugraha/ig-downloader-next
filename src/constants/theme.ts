export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    success: {
      light: '#86efac',
      default: '#22c55e',
      dark: '#15803d',
    },
    error: {
      light: '#fca5a5',
      default: '#ef4444',
      dark: '#b91c1c',
    },
    warning: {
      light: '#fcd34d',
      default: '#f59e0b',
      dark: '#b45309',
    },
    info: {
      light: '#93c5fd',
      default: '#3b82f6',
      dark: '#1d4ed8',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  typography: {
    fonts: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  radius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  zIndex: {
    behind: -1,
    base: 0,
    above: 1,
    dropdown: 1000,
    sticky: 1100,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
  
  backgrounds: {
    patterns: {
      dots: 'radial-gradient(circle, #00000010 1px, transparent 1px)',
      grid: 'linear-gradient(to right, #00000010 1px, transparent 1px), linear-gradient(to bottom, #00000010 1px, transparent 1px)',
      diagonal: 'repeating-linear-gradient(45deg, #00000005 0, #00000005 1px, transparent 0, transparent 50%)',
      noise: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
      secondary: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
      sunset: 'linear-gradient(to right, #f59e0b, #ef4444)',
      ocean: 'linear-gradient(to right, #0ea5e9, #2563eb)',
      forest: 'linear-gradient(to right, #22c55e, #15803d)',
      night: 'linear-gradient(to right, #1e293b, #0f172a)',
    },
    glass: {
      light: 'backdrop-filter: blur(16px) saturate(180%); background-color: rgba(255, 255, 255, 0.75)',
      dark: 'backdrop-filter: blur(16px) saturate(180%); background-color: rgba(17, 25, 40, 0.75)',
    },
    mesh: {
      blue: 'radial-gradient(at 40% 20%, hsla(212,98%,85%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
      purple: 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
    },
    animated: {
      gradient: 'background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); background-size: 400% 400%; animation: gradient 15s ease infinite;',
      pulse: 'background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
    },
    textures: {
      paper: 'url("/textures/paper.png")',
      fabric: 'url("/textures/fabric.png")',
      carbon: 'url("/textures/carbon.png")',
    },
    sizes: {
      sm: '20px 20px',
      md: '40px 40px',
      lg: '60px 60px',
    }
  }
};

export type Theme = typeof theme;
