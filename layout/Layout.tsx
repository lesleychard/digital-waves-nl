import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';

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
    <div>
      <div className={classes.videoContainer}>
        <video autoPlay className={classes.video}>
          <source src="assets/videos/video-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <TopNav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
