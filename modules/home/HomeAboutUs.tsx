import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.text.primary,
      minHeight: '100vh',
      color: light,
    },
  })
);

const HomeAboutUs = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      About Us
    </section>
  );
};

export default HomeAboutUs;
