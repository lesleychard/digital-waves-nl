// Extend createPalette module to include new color options
import {
  PaletteColor,
  PaletteColorOptions,
} from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    highlight?: PaletteColorOptions;
    lowlight?: PaletteColorOptions;
    amend?: string;
  }

  interface Palette {
    highlight: PaletteColor;
    lowlight: PaletteColor;
    amend: string;
  }
}
