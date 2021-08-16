
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import { fade } from '../styles/helpers/color';
import Layout from '../layout/Layout';
import HomeAboutUs from '../modules/home/HomeAboutUs';
import HomeHero from '../modules/home/HomeHero';
import HomeOurTeam from '../modules/home/HomeOurTeam';
import HomeWhatWeDo from '../modules/home/HomeWhatWeDo';
import FooterCTA from '../modules/footer/FooterCTA';
import Footer from '../modules/footer/Footer';
import FooterSubscribe from '../modules/footer/FooterSubscribe';

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    containerImg: {
      background: 'url(assets/images/home/home-hero-img-multiplied.jpg) no-repeat center center',
      backgroundSize: 'cover',
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      opacity: 0.6,
      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: fade(theme.palette.background.default, 0.75),
      },
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        width: '48vw',
        height: '48vw',
        opacity: 0.8,
        '&:before': {
          display: 'none',
        },
      },
      [theme.breakpoints.up('lg')]: {
        width: '36vw',
        height: '36vw',
      },
    },
  })
);

const index = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.containerImg} />
        <HomeHero />
        <HomeAboutUs />
        <HomeOurTeam />
        <HomeWhatWeDo />
        <FooterCTA />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default index;
