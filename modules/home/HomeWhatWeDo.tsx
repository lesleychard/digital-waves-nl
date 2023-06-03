import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import CircuitLine from '../../components/CircuitLine';
import RetroUI from '../../components/RetroUI';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const PROGRAM_STEPS = [
  {
    img: 'assets/images/emojis/emoji-teacher.svg',
    alt: 'Female teacher emoji',
    title: 'Learn Digital Skills',
    description: 'Our team of industry leaders will teach concepts like coding, design, and entrepreneurship.',
  },
  {
    img: 'assets/images/emojis/emoji-tech-girl.svg',
    alt: 'Female technologist emoji',
    title: 'Create Technology',
    description: 'Invent impactful designs and learn how to harness the power of technology.',
  },
  {
    img: 'assets/images/emojis/emoji-business-woman.svg',
    alt: 'Female business woman emoji',
    title: 'Meet Mentors',
    description: 'Connect with professionals in the local technology and learn from shared experiences.',
  },
  {
    img: 'assets/images/emojis/emoji-rockstar.svg',
    alt: 'Female rockstar emoji',
    title: 'Gain New Confidence',
    description: 'Level up digital skills with impactful projects, enter to win awesome prizes.',
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: 'url(assets/images/brand/section-bg-teal.jpg) no-repeat center center',
      backgroundSize: 'cover',
      position: 'relative',
      zIndex: 1,
    },
    container: {
      ...containerSm(theme),
    },
    typographyOverline: {
      textAlign: 'center',
      marginTop: theme.spacing(3),
    },
    typographyHeading: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      color: light,
      textAlign: 'center',
      '& > strong': {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
    gridContainerSteps: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(6),
      },
    },
    gridItemSteps: {
      position: 'relative',
      '&:last-of-type $containerCircuitLines': {
        display: 'none',
      },
      [theme.breakpoints.up('sm')]: {
        '&:nth-of-type(2) $containerCircuitLines': {
          display: 'none',
        },
      },
    },
    retroUI: {
      position: 'relative',
      textAlign: 'center',
      height: '100%',
    },
    stepIndex: {
      position: 'absolute',
      left: '-1rem',
      top: '1rem',
      borderRadius: '50%',
      width: '2rem',
      height: '2rem',
      textAlign: 'center',
      background: theme.palette.lowlight.main,
      fontWeight: theme.typography.fontWeightBold,
      color: light,
      fontSize: '1rem',
      lineHeight: '2.1rem',
    },
    imgStep: {
      width: '4rem',
      marginBottom: theme.spacing(1),
    },
    containerCircuitLines: {
      position: 'absolute',
      zIndex: 3,
      width: theme.spacing(6),
      left: '50%',
      transform: 'translateX(-50%) rotate(90deg)',
      bottom: 2,
      [theme.breakpoints.up('sm')]: {
        transform: 'none',
        left: 'auto',
        width: theme.spacing(10),
        right: -theme.spacing(5),
        bottom: '47%',
      },
    },
  })
);

const HomeWhatWeDo = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          component="h1"
          variant="overline"
          className={classes.typographyOverline}
        >
           What We Do
        </Typography>
        <Typography
          className={classes.typographyHeading}
          component="p"
          variant="h1"
        >
          The Digital Waves experience incentivizes young women and gender-diverse youth to become&nbsp;
          <strong>technology creators</strong>.
        </Typography>
        <Typography align="center">
          We believe that every person is capable of learning digital skills and creating world-changing technology.
          Here&rsquo;s how our contestants become future innovators:
        </Typography>
        <Grid
          className={classes.gridContainerSteps}
          container
          spacing={6}
        >
          {
            PROGRAM_STEPS.map((step, index) => (
              <Grid
                className={classes.gridItemSteps}
                item
                key={step.title}
                xs={12}
                sm={6}
              >
                <RetroUI className={classes.retroUI}>
                  <span className={classes.stepIndex}>
                    {index + 1}
                  </span>
                  <img
                    className={classes.imgStep}
                    src={step.img}
                    alt={step.alt}
                  />
                  <Typography variant="h2" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography>
                    {step.description}
                  </Typography>
                </RetroUI>
                <div className={classes.containerCircuitLines}>
                  <CircuitLine />
                  <CircuitLine />
                </div>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
