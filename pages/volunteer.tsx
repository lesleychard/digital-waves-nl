import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import Layout from '../layout/Layout';

const useStyles = makeStyles(
  () => ({
    root: {},
  })
);

const volunteer = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        Volunteer With Us
      </div>
    </Layout>
  );
};

export default volunteer;
