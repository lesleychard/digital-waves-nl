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
import SocialMeta from '../components/SocialMeta';
import SponsorPartners from '../modules/sponsor/SponsorPartners/SponsorPartners';
import {
  getSiteVersion,
  SITE_VERSION_PROGRAM_2023,
  SITE_VERSION_CONTEST_2021,
} from '../lib/getSiteVersion';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const siteVersion = getSiteVersion();
const siteVersionsWithPartners = [SITE_VERSION_CONTEST_2021, SITE_VERSION_PROGRAM_2023];

const sponsor = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <SocialMeta title="Sponsor Us" />
      <div className={classes.root}>
        <SponsorHero />
        {(siteVersion && siteVersionsWithPartners.includes(siteVersion)) && (
          <SponsorPartners />
        )}
        <SponsorPackages />
        <SponsorFAQ />
        <SponsorForm />
        <FooterCTA hideSponsor noMinHeight layoutThreeCols />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default sponsor;
