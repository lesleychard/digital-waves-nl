import Color from 'color';

/**
 * Darkens a given color
 * @param {string} color Color (hex, rgb, rgba)
 * @param {number} value Amount (0-1)
 */
export const darken = (color: string, value: number): string => {
  const c = Color(color);
  return c.darken(value).string();
};

/**
 * Increase transparency of a given color
 * @param {string} color Color (hex, rgb, rgba)
 * @param {number} value Amount (0-1)
 */
export const fade = (color: string, value: number): string => {
  const c = Color(color);
  return c.fade(value).string();
};

/**
 * Lightens a given color
 * @param {string} color Color (hex, rgb, rgba)
 * @param {number} value Amount (0-1)
 */
export const lighten = (color: string, value: number): string => {
  const c = Color(color);
  return c.lighten(value).string();
};
