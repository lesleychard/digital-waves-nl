import { CSSProperties } from '@material-ui/core/styles/withStyles';

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
