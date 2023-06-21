import classNames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { fade, darken } from '../../styles/helpers/color';
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
        paddingBottom: '8vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '20vw',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'block',
        background: fade(darken(theme.palette.primary.dark, 0.25), 0.65),
      },
    },
    containerContent: {
      position: 'relative',
      zIndex: 1,
      padding: `${theme.spacing(20)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
      width: '100%',
      maxWidth: '55rem',
      [theme.breakpoints.up('sm')]: {
        padding: 0,
        width: '60%',
      },
      [theme.breakpoints.up('md')]: {
        padding: 0,
        width: '100%',
        maxWidth: '45rem',
      },
    },
    containerLogo: {
      [theme.breakpoints.up('md')]: {
        marginTop: '12rem',
      },
    },
    logo: {
      [theme.breakpoints.up('md')]: {
        marginTop: '12rem',
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
        transform: 'scale(1.25)',
        transformOrigin: 'left',
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
        background: theme.palette.text.primary,
        color: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.25em',
      },
    },
    containerPartners: {
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(12),
      },
    },
    typographyPartners: {
      fontWeight: theme.typography.fontWeightBold,
    },
    imgPartner: {
      background: fade(theme.palette.background.paper, 0.4),
      width: '9rem',
      padding: '0.5rem',
      borderRadius: '0.5rem',
    },
    retroUI: {
      zIndex: 1,
      maxWidth: '28rem',
      margin: `${theme.spacing(4)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: '18rem',
        position: 'absolute',
        right: theme.spacing(4),
        bottom: theme.spacing(4),
        margin: 0,
      },
      [theme.breakpoints.up('md')]: {
        transform: 'scale(1.1)',
        transformOrigin: 'right',
      },
    },
    retroUICta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: theme.spacing(1),
    },
    imgRetroUIEmoji: {
      width: '1.75rem',
      [theme.breakpoints.up('md')]: {
        width: '2.5rem',
      },
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
      [theme.breakpoints.up('md')]: {
        fontSize: '0.8rem',
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
        <div className={classes.containerLogo}>
          <Logo component="h1" includeIntro />
        </div>
        <div className={classes.containerDescription}>
          <Typography
            className={classes.typographyH2}
            gutterBottom
            variant="h2"
          >
            Dream up tech that will change the world.
          </Typography>
          <Typography className={classes.typographyParagraph}>
            We deliver <strong>digital skills experiences</strong> for NL girls and gender-diverse youth ages 11-18.
          </Typography>
        </div>
        <div className={classes.containerPartners}>
          <Typography variant="overline" component="h2" className={classes.typographyPartners}>
            Proud Partner
          </Typography>
          <a href="https://stemforgirls.ca" target="_blank" rel="noreferrer">
            <img
              className={classes.imgPartner}
              src="assets/images/home/home-hero-partner-s4g.png"
              alt="STEMforGIRLS"
            />
          </a>
        </div>
      </div>
      <RetroUI className={classes.retroUI}>
        <strong>Calling all sponsors!</strong>
        &nbsp;Your donations will help make our 2023 program a reality.
        <div className={classes.retroUICta}>
          <img
            src="assets/images/emojis/emoji-rockstar.svg"
            alt="Female-presenting technologist emoji"
            className={classes.imgRetroUIEmoji}
          />
          <Link href="/sponsor">
            <Button
              component="a"
              variant="outlined"
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
