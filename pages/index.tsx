
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Layout from '../layout/Layout';
import HomeAboutUs from '../modules/home/HomeAboutUs';
import HomeHero from '../modules/home/HomeHero';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const index = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <HomeHero />
      <HomeAboutUs />
    </Layout>
  );
};

export default index;
