import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import SocialMeta from '../components/SocialMeta';
import Hackathon2023TopBanner from '../modules/hackathon-2023/Hackathon2023TopBanner';
import Hackathon2023Hero from '../modules/hackathon-2023/Hackathon2023Hero';
import Hackathon2023ProgramInfo from '../modules/hackathon-2023/Hackathon2023ProgramInfo';
import Hackathon2023Register from '../modules/hackathon-2023/Hackathon2023Register';
import Hackathon2023FAQ from '../modules/hackathon-2023/Hackathon2023FAQ';
import Hackathon2023Footer from '../modules/footer/Hackathon2023Footer';
import Footer from '../modules/footer/Footer';
import FooterSubscribe from '../modules/footer/FooterSubscribe';

import Layout from '../layout/Layout';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const hackathon2023 = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <SocialMeta title="Hackathon 2023" />
      <div className={classes.root}>
        <Hackathon2023TopBanner />
        <Hackathon2023Hero />
        <Hackathon2023ProgramInfo />
        <Hackathon2023Register />
        <Hackathon2023FAQ />
        <Hackathon2023Footer />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default hackathon2023;
