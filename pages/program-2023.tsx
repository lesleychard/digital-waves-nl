import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import SocialMeta from '../components/SocialMeta';
import Program2023TopBanner from '../modules/program-2023/Program2023TopBanner';
import Program2023Hero from '../modules/program-2023/Program2023Hero';
import Program2023ProgramInfo from '../modules/program-2023/Program2023ProgramInfo';
import Program2023Register from '../modules/program-2023/Program2023Register';
import Program2023FAQ from '../modules/program-2023/Program2023FAQ';
import Program2023Footer from '../modules/program-2023/Program2023Footer';
import Footer from '../modules/footer/Footer';
import FooterSubscribe from '../modules/footer/FooterSubscribe';

import Layout from '../layout/Layout';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const program2023 = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <SocialMeta title="Program 2023" />
      <div className={classes.root}>
        <Program2023TopBanner />
        <Program2023Hero />
        <Program2023ProgramInfo />
        <Program2023Register />
        <Program2023Footer />
        <Footer />
        <FooterSubscribe />
      </div>
    </Layout>
  );
};

export default program2023;
