import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Layout from '../layout/Layout';

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
        Contest 2021
      </div>
    </Layout>
  );
};

export default contest2021;
