import { Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const container = (theme: Theme): CSSProperties => ({
  padding: theme.spacing(3),
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '80vw',
    padding: '10vw 0',
  },
});

export const containerSm = (theme: Theme): CSSProperties => ({
  padding: theme.spacing(3),
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '80vw',
    padding: '10vw 0',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '52rem',
  },
});

/**
 * Strips default UL styles
 */
export const stripUl: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

/**
 * Toggles font smoothing on
 */
export const fontSmoothOn: CSSProperties = {
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'greyscale',
  fontSmooth: 'always',
};

/**
 * Toggles font smoothing off
 */
export const fontSmoothOff: CSSProperties = {
  '-webkit-font-smoothing': 'auto',
  '-moz-osx-font-smoothing': 'auto',
  fontSmooth: 'auto',
};
