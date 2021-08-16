import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Layout from '../layout/Layout';
import ContestHero from '../modules/contest-2021/ContestHero';
import ContestOutline from '../modules/contest-2021/ContestOutline';
import ContestTimeline from '../modules/contest-2021/ContestTimeline';
import Footer from '../modules/footer/Footer';
import FooterCTA from '../modules/footer/FooterCTA';
import FooterSubscribe from '../modules/footer/FooterSubscribe';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const contest2021 = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <ContestHero />
        <ContestOutline />
        <ContestTimeline />
        <FooterCTA />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default contest2021;
