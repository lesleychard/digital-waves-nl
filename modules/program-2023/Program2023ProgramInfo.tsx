import { Grid, makeStyles, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import RetroUI from '../../components/RetroUI';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import { fontFamilyHeading, fontFamilyBody } from '../../styles/theme/_typography';

const EVENTS = [
  {
    title: 'Virtual Beginners Workshops',
    image: 'assets/images/emojis/emoji-teacher.svg',
    label: 'Learn To Design & Code',
    description: 'Learn the digital skills needed for your website, no prior design or coding knowledge required. We’ll teach you everything you need to know!',
    time: 'November 22, 5-7pm',
    date: 'November 25 & 26, 1-3pm', 
    step: '1',
  },
  {
    title: 'Work with Industry Mentors',
    image: 'assets/images/emojis/emoji-tech-girl.svg',
    label: 'Get 1:1 Support',
    description: 'Level-up your unique digital creation with the help of diverse industry experts in NL’s technology sector.',
    time: 'November 29 & 30, 5-7pm',
    date: '',
    step: '2',
  },
  {
    title: 'Program Showcase & Awards',
    image: 'assets/images/emojis/emoji-rockstar.svg',
    label: 'Show Off Your New Skills',
    description: 'Join us to celebrate all of your hard work! All participants will be entered to win awesome prizes.',
    time: 'Date TBA',
    date: '',
    step: '3',
  },
];

const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        background: 'url(assets/images/brand/section-bg-teal.jpg) no-repeat center center',
        backgroundSize: 'cover',
        textAlign: 'center',
      },
      container: {
        ...containerSm(theme),
      },
      typographyOverline: {
        marginBottom: theme.spacing(2),
        color: 'white',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(6),
        },
      },
      typographyH1: {
        color: light,
        marginBottom: theme.spacing(2),
        '& strong': {
          color: theme.palette.text.primary,
        },
      },
      gridContainer: {
        margin: `${theme.spacing(8)}px 0`,
        width: '100%',
      },
      gridItem: {
        textAlign: 'center',
        position: 'relative',

      },
      stepCircle: {
        position: 'absolute',
        background: theme.palette.lowlight.dark,
        color: theme.palette.lowlight.contrastText,
        left: '-1rem',
        top: '2.5rem',
        zIndex: 2,
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '1.2rem',
        lineHeight: '2.7rem',
      },
      title: {
        fontFamily: fontFamilyBody,
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '0.8rem',
        lineHeight: 1.5,
      },
      label: {
        fontFamily: fontFamilyHeading,
        fontSize: '1.5rem',
        display: 'block',
        lineHeight: 1,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
      },
      date: {
        fontFamily: fontFamilyBody,
        fontSize: '1rem',
        fontWeight: theme.typography.fontWeightBold,
      },
      description: {
        fontFamily: fontFamilyBody,
        fontSize: '1rem',
        marginBottom: theme.spacing(2),
      },
      image: {
        marginBottom: theme.spacing(2),
        '& > img': {
          width: '5rem',
        },
      },
      time: {
        fontFamily: fontFamilyBody,
        fontSize: '1rem',
        fontWeight: theme.typography.fontWeightBold,
      },
      containerRetroUI: {
        width: '100%',
        height: '100%',
        padding: `${theme.spacing(2)}px 0`,
        position: 'relative',
      },
      retroUI: {
        position: 'relative',
        height: '100%',
        zIndex: 1,
      },
      containerCTAs: {
        width: '100%',
        zIndex: 1,
        position: 'relative',
      },
      buttonFaq: {
        marginTop: theme.spacing(2),
        textDecoration: 'underline',
      },
    };
  }
);

const Program2023ProgramInfo = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="info">
      <div className={classes.container}>
        <Typography
          variant="overline"
          className={classes.typographyOverline}
          component="p"
        >
          Program Information & Key Dates
        </Typography>
        <Typography variant="h1" className={classes.typographyH1}>
          What&rsquo;s included in the&nbsp;
          <strong>2023 Program</strong>
          ?
        </Typography>
        <Typography>
        Interested in participating in our 2023 Program? Registration is free, and participants will be entered to win prizes and swag from our amazing local sponsors.
        </Typography>

        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justifyContent="center"
        >
          {
            EVENTS.map(event => (
              <Grid
                className={classes.gridItem}
                item
                key={event.title}
                xs={12}
                md={6}
              >
                <div className={classes.containerRetroUI}>
                  <div className={classes.stepCircle}>
                    {event.step}
                  </div>
                  <RetroUI
                    className={classes.retroUI}
                    title={(
                      <div className={classes.title}>
                        {event.title}
                      </div>
                    )}>
                    <div className={classes.label}>
                      {event.label}
                    </div>
                    <div className={classes.image}>
                      <img src={event.image} />
                    </div>
                    <div className={classes.description}>
                      {event.description}
                    </div>
                    <div className={classes.time}>
                      {event.time}
                    </div>
                    <div className={classes.date}>
                      {event.date}
                    </div>
                  </RetroUI>
                </div>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default Program2023ProgramInfo;

