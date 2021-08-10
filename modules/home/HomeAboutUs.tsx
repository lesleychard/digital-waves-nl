import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import RetroUI from '../../components/RetroUI';

import { container, fontSmoothOn } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      ...fontSmoothOn,
      background: theme.palette.text.primary,
      minHeight: '100vh',
      color: light,
      position: 'relative',
      zIndex: 1,
    },
    container: {
      ...container(theme),
      [theme.breakpoints.up('md')]: {
        margin: 0,
        padding: '10vw 20vw 10vw 15vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '20vw',
        paddingRight: '25vw',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '30vw',
      },
    },
    typographyOverline: {
      marginBottom: theme.spacing(3),
    },
    typographyLg: {
      marginBottom: theme.spacing(3),
      '& strong': {
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.highlight.main,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
      },
    },
    containerContentBody: {
      '& p': {
        fontSize: '1rem',
        lineHeight: 1.75,
      },
    },
    aside: {
      background: 'url(assets/images/home/home-about-us-aside.jpg) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      margin: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: '2vw',
        bottom: '2vw',
        width: '36vw',
        margin: 0,
      },
    },
    containerAnimation: {
      width: '14rem',
      position: 'relative',
    },
    retroUI: {
      position: 'relative',
      textAlign: 'center',
      fontSize: '1.25rem',
      fontWeight: theme.typography.fontWeightBold,
    },
    animationCursor: {
      background: 'url(assets/images/icons/icon-cursor.svg) no-repeat center center',
      backgroundSize: 'contain',
      width: '2.75rem',
      height: '2.75rem',
      position: 'absolute',
      zIndex: 1,
      top: -8,
      left: 8,
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
  })
);

const HomeAboutUs = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.typographyOverline}
          variant="overline"
          component="h1"
        >
          About Us
        </Typography>
        <Typography
          className={classes.typographyLg}
          variant="h1"
          component="p"
        >
          We are a grassroots organization dedicated to <strong>closing the gender gap</strong> in tech.
        </Typography>
        <div className={classes.containerContentBody}>
          <p>
            Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they&rsquo;re actually proud of that shit. 
          </p>
          <p>
            Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that&rsquo;s what you see at a toy store. And you must think you&rsquo;re in a toy store, because you&rsquo;re here shopping for an infant named Jeb.
          </p>
        </div>
      </div>
      <aside className={classes.aside}>
        <div className={classes.containerAnimation}>
          <RetroUI showTopButtons className={classes.retroUI}>
            <img
              src="assets/images/emojis/emoji-trash.svg"
              alt="Waste Basket Emoji"
            />
            <br />
            NL Technology Gender Gap
          </RetroUI>
          <div className={classes.animationCursor} />
        </div>
      </aside>
      <div className={classNames(classes.containerCircuit, classes.containerCircuitLeft)} />
    </section>
  );
};

export default HomeAboutUs;
