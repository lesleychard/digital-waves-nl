import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Layout from '../layout/Layout';
import SponsorFAQ from '../modules/sponsor/SponsorFAQ';
import SponsorHero from '../modules/sponsor/SponsorHero';
import SponsorPackages from '../modules/sponsor/SponsorPackages';
import SponsorForm from '../modules/sponsor/SponsorForm';
import FooterCTA from '../modules/footer/FooterCTA';
import Footer from '../modules/footer/Footer';
import FooterSubscribe from '../modules/footer/FooterSubscribe';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const sponsor = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <SponsorHero />
        <SponsorFAQ />
        <SponsorPackages />
        <SponsorForm />
        <FooterCTA hideSponsor />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default sponsor;
