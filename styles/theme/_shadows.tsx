// Shadow logic from MUI
// https://github.com/mui-org/material-ui/blob/
// da728bc99e9757961a32209b1f225996d9d23311/packages/material-ui/src/styles/shadows.js#L13-L20

import { Shadows } from '@material-ui/core/styles/shadows';

import createShadow from '../helpers/createShadow';
import { primaryDark } from './_palette';

// Shadows type requires exactly 25 elements so array cannot
// be generated via iteration

const shadows: Shadows = [
  'none',
  createShadow(primaryDark, 1),
  createShadow(primaryDark, 2),
  createShadow(primaryDark, 3),
  createShadow(primaryDark, 4),
  createShadow(primaryDark, 5),
  createShadow(primaryDark, 6),
  createShadow(primaryDark, 7),
  createShadow(primaryDark, 8),
  createShadow(primaryDark, 9),
  createShadow(primaryDark, 10),
  createShadow(primaryDark, 11),
  createShadow(primaryDark, 12),
  createShadow(primaryDark, 13),
  createShadow(primaryDark, 14),
  createShadow(primaryDark, 15),
  createShadow(primaryDark, 16),
  createShadow(primaryDark, 17),
  createShadow(primaryDark, 18),
  createShadow(primaryDark, 19),
  createShadow(primaryDark, 20),
  createShadow(primaryDark, 21),
  createShadow(primaryDark, 22),
  createShadow(primaryDark, 23),
  createShadow(primaryDark, 24),
];

export default shadows;
