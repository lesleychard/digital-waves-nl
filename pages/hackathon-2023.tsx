import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import SocialMeta from '../components/SocialMeta';

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
      <SocialMeta title="Hackathon Spring 2023" />
      <div className={classes.root}>
        Hello World!
      </div>
    </Layout>
  );
};

export default hackathon2023;
