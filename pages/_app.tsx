import { create } from 'jss';
import type { AppProps } from 'next/app';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactNode, useEffect } from 'react';

import globals from '../styles/globals/globals';
import theme from '../styles/theme/theme';

const jssGlobals = create().setup(jssPreset());

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    jssGlobals.createStyleSheet(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      globals,
      { meta: 'RanLabGlobals' },
    ).attach();
  }, []);

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default MyApp;
