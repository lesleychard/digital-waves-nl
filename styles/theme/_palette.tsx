import { 
  fade,
  lighten,
  darken,
} from '../helpers/color';

export const dark = '#292929';
export const light = '#fff';
export const background = '#83BCD9';

// Teal
export const primary = '#5BD6DE';
export const primaryDark = darken(primary, 0.33);
// Pink
export const secondary = '#F6A5C6';
export const secondaryDark = darken(secondary, 0.15);
// Green
export const highlight = '#68E8AA';
export const highlightDark = darken(highlight, 0.15);
// Purple
export const lowlight = '#9E99DC';

const palette = {
  background: {
    default: background,
  },
  primary: {
    light: lighten(primary, 0.15),
    main: primary,
    dark: primaryDark,
    contrastText: dark,
  },
  secondary: {
    light: lighten(secondary, 0.04),
    main: secondary,
    dark: secondaryDark,
    contrastText: dark,
  },
  highlight: {
    light: lighten(highlight, 0.15),
    main: highlight,
    dark: highlightDark,
    contrastText: light,
  },
  lowlight: {
    light: lighten(lowlight, 0.15),
    main: lowlight,
    dark: darken(lowlight, 0.15),
    contrastText: light,
  },
  text: {
    primary: dark,
  },
  divider: fade(primaryDark, 0.88),
  action: {
    active: fade(primaryDark, 0.6),
    hover: fade(primaryDark, 0.96),
    selected: fade(primaryDark, 0.92),
  },
};

export default palette;
