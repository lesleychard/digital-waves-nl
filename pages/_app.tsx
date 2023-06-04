import { init } from 'emailjs-com';
import { create } from 'jss';
import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ReactNode, useEffect } from 'react';

import globals from '../styles/globals/globals';
import theme from '../styles/theme/theme';

const jssGlobals = create().setup(jssPreset());

const queryClient = new QueryClient();

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
      { meta: 'DigitalWavesGlobals' },
    ).attach();

    init(process.env.EMAILJS_USER_ID as string);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StylesProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
