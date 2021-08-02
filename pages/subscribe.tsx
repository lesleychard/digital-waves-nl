import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import Layout from '../layout/Layout';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const subscribe = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        Stay Updated
      </div>
    </Layout>
  );
};

export default subscribe;
