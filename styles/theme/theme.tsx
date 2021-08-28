import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';

import overrides from './_overrides';
import palette from './_palette';
import shadows from './_shadows';
import shape from './_shape';
import typography from './_typography';

const theme = createTheme({
  overrides,
  palette,
  shadows,
  shape,
  typography,
});

export default theme;
