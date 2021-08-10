import classNames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { lighten } from '../../styles/helpers/color';
import { light } from '../../styles/theme/_palette';
import RetroUI from '../../components/RetroUI';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minHeight: 'calc(100vh - 2vw)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: light,
      position: 'relative',
      zIndex: 2,
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: '15vw',
        paddingBottom: '10vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '20vw',
      },
    },
    containerContent: {
      position: 'relative',
      zIndex: 1,
      padding: theme.spacing(3),
      maxWidth: '55rem',
      [theme.breakpoints.up('sm')]: {
        padding: 0,
      },
    },
    containerDescription: {
      marginTop: theme.spacing(4),
      maxWidth: '28rem',
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(6),
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(8),
      },
    },
    typographyH2: {
      fontSize: '1.6rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    typographyParagraph: {
      '& strong': {
        color: lighten(theme.palette.secondary.light, 0.1),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.25em',
      },
    },
    containerPartners: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(4),
      },
    },
    imgPartner: {
      width: '7rem',
      '&:first-of-type': {
        marginRight: theme.spacing(2),
      },
    },
    retroUI: {
      zIndex: 1,
      maxWidth: '28rem',
      margin: `${theme.spacing(4)}px ${theme.spacing(3)}px 0`,
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: '18rem',
        position: 'absolute',
        right: theme.spacing(4),
        bottom: theme.spacing(4),
        margin: 0,
      },
    },
    retroUICta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
    imgRetroUIEmoji: {
      width: '1.75rem',
    },
    buttonRetroUISponsor: {
      letterSpacing: 0,
      textTransform: 'none',
      textDecoration: 'underline',
    },
    typographyAside: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.7rem',
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      position: 'absolute',
      left: theme.spacing(4),
      bottom: '25vh',
      zIndex: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      [theme.breakpoints.up(800)]: {
        left: theme.spacing(8),
      },
    },
    containerCircuit: {
      background: 'no-repeat center center',
      backgroundSize: 'contain',
      position: 'absolute',
      opacity: 0.5,
    },
    containerCircuitLeft: {
      backgroundImage: 'url(assets/images/home/home-circuit-left.svg)',
      left: theme.spacing(6),
      bottom: '-3rem',
      height: '80vh',
      width: '5vh',
      [theme.breakpoints.down(800)]: {
        display: 'none',
      },
    },
    containerCircuitBottom: {
      backgroundImage: 'url(assets/images/home/home-circuit-bottom.svg)',
      right: '30vw',
      bottom: '-7rem',
      height: '22rem',
      width: '12rem',
      [theme.breakpoints.down(800)]: {
        right: 'auto',
        left: '5vw',
        width: '9rem',
        height: '18rem',
        bottom: '-3rem',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
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
        <div className={classes.containerPartners}>
          <Typography variant="overline" component="h2">
            Our Partners
          </Typography>
          <img
            className={classes.imgPartner}
            src="assets/images/home/home-hero-partner-wrdc.png"
            alt="Women in Resource Development Corporation"
          />
          <img
            className={classes.imgPartner}
            src="assets/images/home/home-hero-partner-wrdc.png"
            alt="Women in Resource Development Corporation"
          />
        </div>
      </div>
      <RetroUI className={classes.retroUI}>
        <strong>Hey NL technology sector!</strong>&nbsp;
        Sponsorship is now open for the Fall 2021 Digital Waves experience.
        <div className={classes.retroUICta}>
          <img
            src="assets/images/emojis/emoji-tech-girl.svg"
            alt="Female-presenting technologist emoji"
            className={classes.imgRetroUIEmoji}
          />
          <Link href="/sponsor">
            <Button
              component="a"
              className={classes.buttonRetroUISponsor}
            >
              Sponsor Us
            </Button>
          </Link>
        </div>
      </RetroUI>
      <Typography className={classes.typographyAside} variant="overline">
        Helping NL Youth See Themselves in Tech
      </Typography>
      <div className={classNames(classes.containerCircuit, classes.containerCircuitLeft)} />
      <div className={classNames(classes.containerCircuit, classes.containerCircuitBottom)} />
    </section>
  );
};

export default HomeHero;
