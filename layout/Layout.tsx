import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ScrollMonitor from '../components/ScrollMonitor';

import TopNav from './TopNav';

type Props = {
  children?: ReactNode,
};

const useStyles = makeStyles(
  () => ({
    root: {},
    videoContainer: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1,
    },
    video: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  })
);

const Layout = ({ children }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <Controller>
      <Scene triggerHook="onLeave" triggerElement="#main-layout" duration="50%">
        {(progress: number) => (
          <ScrollMonitor progress={progress} />
        )}
      </Scene>
      <div>
        <div className={classes.videoContainer}>
          <video autoPlay muted className={classes.video} loop>
            <source src="assets/videos/video-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <TopNav />
        <main id="main-layout">
          {children}
        </main>
      </div>
    </Controller>
  );
};

export default Layout;
