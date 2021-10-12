import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import SocialMeta from '../components/SocialMeta';

import Layout from '../layout/Layout';
import ContestHero from '../modules/contest-2021/ContestHero';
import ContestOutline from '../modules/contest-2021/ContestOutline';
import ContestRegister from '../modules/contest-2021/ContestRegister';
import ContestSpreadTheWord from '../modules/contest-2021/ContestSpreadTheWord';
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
      <SocialMeta title="Contest Fall 2021" />
      <div className={classes.root}>
        <ContestHero />
        <ContestRegister />
        <ContestOutline />
        <ContestTimeline />
        <ContestSpreadTheWord />
        <FooterCTA />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default contest2021;
