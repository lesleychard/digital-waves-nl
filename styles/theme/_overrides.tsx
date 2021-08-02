import { darken, fade } from '../helpers/color';
import { secondaryDark, primary, primaryDark } from './_palette';

const grandRoyal = {
  fontFamily: 'Grand Royal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Grand Royal'),
    url('assets/fonts/Grand-Royal.woff2') format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const overrides = {
  MuiBackdrop: {
    root: {
      backgroundColor: fade(darken(primaryDark, 0.5), 0.25),
    },
  },
  MuiButton: {
    root: {
      // textTransform: 'none' as const,
      letterSpacing: '0.1em',
    },
  },
  MuiCard: {
    root: {
      borderRadius: 10,
    },
  },
  MuiCssBaseline: {
    '@global': {
      '@font-face': [grandRoyal],
      a: {
        color: primary,
        transition: 'color 0.1s',
        '&:active, &:visited': {
          color: primary,
        },
        '&:hover': {
          color: secondaryDark,
        },
      },
    },
  },
};

export default overrides;
