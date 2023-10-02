import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { Typography, Grid } from '@material-ui/core';

import Button from '../../components/Button';
import { container } from '../../styles/helpers/extend';
import SpeechBubble, { Props as SpeechBubbleProps } from '../../components/SpeechBubble';
import { animationChildDelay } from '../../styles/helpers/animations';

const SPEECH_BUBBLES: SpeechBubbleProps[] = [
  // Light Pink
  {
    children: 'How might we make it easier for NLers to support the queer community?',
    size: 'lg',
    caretDirection: 'right',
    style: { left: '-13%', top: '15%', zIndex: 1 },
  },
  // Dark Pink
  {
    color: 'customColor',
    customColor: '#AF2A60',
    customDimensions: 8,
    style: { left: '5%', bottom: '25%' },
  },
  // Light Purple
  {
    color: 'customColor',
    customColor: '#9E99DC',
    customDimensions: 14,
    style: { left: '30%', top: '30%' },
  },
  // Dark Purple
  {
    color: 'customColor',
    customColor: '#7A63A2',
    customDimensions: 15,
    style: { right: '20%', top: '10%' },
  },
  // Yellow
  {
    children: 'How might we help find spaces and services that are queer-inclusive?',
    color: 'yellow',
    style: { left: '15%', bottom: '13%', zIndex: 2 },
  },
  // Light Teal 
  {
    color: 'customColor',
    customColor: '#40CFD9',
    customDimensions: 10,
    style: { right: '5%', top: '20%' },
  },
  // Dark Green
  {
    color: 'customColor',
    customColor: '#4CCA8D',
    customDimensions: 16,
    style: { right: '-18%', bottom: '30%' },
  },
  // Dark Teal
  {
    children: 'How might we increase awareness of 2SLGBTQIA+ programs and resources in NL?',
    color: 'teal',
    size: 'sm',
    style: { right: '2%', top: '25%', zIndex: 3 },
  },
  // Light Green 
  {
    color: 'customColor',
    customColor: '#68E8AA',
    customDimensions: 10,
    caretDirection: 'right',
    style: { right: '15%', bottom: '20%' },
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
      width: '100vw',
      overflow: 'hidden',
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
    typographyH1: {
      fontSize: '3rem',
      marginBottom: theme.spacing(4),
      '& > span': {
        color: theme.palette.primary.main,
      },
      '& strong': {
        background: theme.palette.text.primary,
        color: theme.palette.highlight.main,
        fontWeight: theme.typography.fontWeightRegular,
        display: 'inline-block',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '3rem',
          height: '3rem',
          backgroundSize: 'contain',
          position: 'absolute',
          right: 0,
          top: '10%',
          transform: 'translateX(50%)',
        },
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    },
    paragraph: {
      marginBottom: theme.spacing(2),
      '& strong': {
        background: theme.palette.text.primary,
        color: theme.palette.primary.light,
        display: 'inline-block',
        padding: '0 0.2em',
      },
    },
    gridContainerCTAs: {
      position: 'relative',
      zIndex: 1,
      marginTop: theme.spacing(4),
    },
    buttonInfo: {
      textDecoration: 'underline',
    },
    aside: {
      background: 'url(assets/images/brand/section-bg-light-blue.png) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      minHeight: '40vh',
      marginBottom: '1rem',
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '36vw',
        margin: 0,
      },
    },
    asideContainer: {
      maxHeight: '44rem',
      height: '80vh',
      width: '200%',
      position: 'absolute',
      maxWidth: '32rem',
      left: '50%',
      transform: 'translateX(-50%) scale(0.7)',
      [theme.breakpoints.up('sm')]: {
        transform: 'translateX(-50%) scale(0.85)',
      },
      [theme.breakpoints.up('md')]: {
        transform: 'scale(0.8)',
        width: '130%',
        margin: '0 -15%',
        height: '100%',
        position: 'static',
      },
      [theme.breakpoints.up(1300)]: {
        transform: 'scale(1)',
        width: '100%',
        margin: 0,
      },
      [theme.breakpoints.up(1500)]: {
        transform: 'scale(1.1)',
      },
      [theme.breakpoints.up(1600)]: {
        transform: 'scale(1.2)',
      },
    },
    '@keyframes fade-in': {
      '0%' : {
        opacity: 0,
        transform: 'translateY(10%)',
      },
      '50%': {
        transform: 'translateY(-5%)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    speechBubble: {
      backfaceVisibility: 'hidden',
      opacity: 0,
      position: 'absolute',
      animation: '0.5s ease-in-out $fade-in forwards',
      ...animationChildDelay(SPEECH_BUBBLES.length, 0.4),
    },
  })
);

const Program2023Hero = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.aside}>
        <div className={classes.asideContainer}>
          {
            SPEECH_BUBBLES.map((bubble, index) => (
              <SpeechBubble
                key={index}
                className={classes.speechBubble}
                {...bubble}
              />
            ))
          }
        </div>
      </div>
      <div className={classes.container}>
        <Typography
          variant="h1"
          className={classes.typographyH1}
        >
          <strong>Help us</strong>
          &nbsp;create NL&rsquo;s queer-owned and -inclusive resource app.
        </Typography>
        <Typography className={classes.paragraph}>
          Help us create Newfoundland & Labrador&apos;s first comprehensive 
          2SLGBTQIA+ directory of businesses, organizations, and professionals 
          who support the queer community.
        </Typography>
        <Typography className={classes.paragraph}>
          We are calling on girls, gender-diverse and 2SLGBTQIA+ youth ages 11-18, residing
          anywhere in the province of Newfoundland & Labrador to help us build a web app that will make big impact on our communities.
          Participants will learn digital skills in our virtual workshops (beginner friendly!), build a real webpage
          that will be included in our app prototype, meet inspiring industry mentors, and be entered
          to win amazing prizes.
        </Typography>
        <Grid
          container
          className={classes.gridContainerCTAs}
          spacing={2}
        >
          <Grid item xs={12}>
            <Button
              component="a"
              variant="raised"
              color="secondary"
              href="#register"
            >
              Register Now (It&rsquo;s Free!)
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.buttonInfo}
              component="a"
              href="#info"
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Program2023Hero;

