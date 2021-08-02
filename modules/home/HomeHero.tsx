import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import Logo from '../../components/Logo';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minHeight: '100vh',
      background: 'url(assets/images/home-hero-bg.png) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: light,
    },
    containerContent: {
      // width: '50vw',
      padding: theme.spacing(2),
    },
    containerDescription: {
      marginTop: theme.spacing(8),
      maxWidth: '28rem',
    },
    typographyH2: {
      fontSize: '2rem',
    },
    typographyParagraph: {
      fontSize: '1.25em',
    },
    [theme.breakpoints.up('md')]: {
      containerContent: {
        width: '50vw',
      },
    },
  }),
);

const HomeHero = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.containerContent}>
        <Logo component="h1" includeIntro />
        <div className={classes.containerDescription}>
          <Typography
            className={classes.typographyH2}
            gutterBottom
            variant="h2"
          >
            Dream up world-changing tech for a chance to win big.
          </Typography>
          <Typography className={classes.typographyParagraph}>
            A <strong>digital skills experience</strong> for NL girls and gender-diverse youth ages 13-18.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
