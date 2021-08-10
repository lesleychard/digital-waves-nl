// Shadow logic from MUI
// https://github.com/mui-org/material-ui/blob/
// da728bc99e9757961a32209b1f225996d9d23311/packages/material-ui/src/styles/shadows.js#L13-L20

import { Shadows } from '@material-ui/core/styles/shadows';

import createShadow from '../helpers/createShadow';
import { dark } from './_palette';

// Shadows type requires exactly 25 elements so array cannot
// be generated via iteration

const shadows: Shadows = [
  'none',
  createShadow(dark, 1),
  createShadow(dark, 2),
  createShadow(dark, 3),
  createShadow(dark, 4),
  createShadow(dark, 5),
  createShadow(dark, 6),
  createShadow(dark, 7),
  createShadow(dark, 8),
  createShadow(dark, 9),
  createShadow(dark, 10),
  createShadow(dark, 11),
  createShadow(dark, 12),
  createShadow(dark, 13),
  createShadow(dark, 14),
  createShadow(dark, 15),
  createShadow(dark, 16),
  createShadow(dark, 17),
  createShadow(dark, 18),
  createShadow(dark, 19),
  createShadow(dark, 20),
  createShadow(dark, 21),
  createShadow(dark, 22),
  createShadow(dark, 23),
  createShadow(dark, 24),
];

export default shadows;
