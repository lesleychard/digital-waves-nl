import { fade } from '../helpers/color';
import { secondaryDark, primary, dark } from './_palette';

const overrides = {
  MuiBackdrop: {
    root: {
      backgroundColor: fade(dark, 0.25),
    },
  },
  MuiButton: {
    root: {
      letterSpacing: '0.1em',
    },
  },
  MuiCard: {
    root: {
      borderRadius: 10,
    },
  },
  MuiDialog: {
    paper: {
      '@media (max-width: 768px)': {
        margin: 12,
      },
    },
  },
  MuiDialogContent: {
    root: {
      '@media (max-width: 768px)': {
        padding: 12,
      },
    },
  },
  MuiDialogTitle: {
    root: {
      '@media (max-width: 768px)': {
        padding: 12,
      },
    },
  },
  MuiCssBaseline: {
    '@global': {
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
