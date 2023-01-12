import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import RetroUI from '../../components/RetroUI';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import { fontFamilyHeading, fontFamilyBody } from '../../styles/theme/_typography';
import Button from '../../components/Button';

const EVENTS = [
  {
   title: 'Virtual Beginners Workshops',
   image: '',
   label: 'Learn To Design & Code',
   description: 'Learn the digital skills needed for your hackathon project, no prior design or coding knowledge required. We’ll teach you everything you need to know!',
   time: '12pm - 2pm (Online)',
   date: 'April 1 & 8, 2023', 
   step: '1'
  },
  {
    title: 'Work with Industry Mentors',
    image: '',
    label: 'Get 1:1 Support',
    description: 'Level-up your hackathon project with the help of our diverse pool of local design and coding experts in NL’s technology sector.',
    time: '12pm - 2pm (Online)',
    date: 'April 15 & 22, 2023',
    step: '2'
  },
  {
   title: 'In-Person Or Online Event',
   image: '',
   label: 'Show Off Your New Skills',
   description: 'Join us this spring for a virtual-friendly, in-person event to celebrate the launch of InQueeries, where your work will be exhibited!',
   time: '1pm - 4pm (Online or In-Person)',
   date: 'May 6, 2023',
   step: '3'
  },
]

const useStyles = makeStyles(
  (theme) => {
    const retroUIWidth = '50rem';
    return {
      root: {
        background: 'url(assets/images/brand/section-bg-teal.jpg) no-repeat center center',
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
          textAlign: 'center',
        },
      },
      container: {
        ...containerSm(theme),
      },
      typographyOverline: {
        marginBottom: theme.spacing(2),
        color: 'white',
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(6),
        },
      },
      typographyH1: {
        color: light,
        marginBottom: theme.spacing(2),
      },
      gridContainer: {
        marginTop: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(4),
        },
      },
      gridItem: {
        textAlign: 'center',
        marginBottom: theme.spacing(8),
        position: 'relative',

      },
      stepCircle: {
        position: 'absolute',
        backgroundColor: '#9E99DC',
        color: 'white',
        
      },
      title: {
        fontFamily: fontFamilyHeading,
        fontSize: '1.25rem',
        lineHeight: 1.2,
        marginBottom: '1rem'
      },
      label: {
        fontFamily: fontFamilyHeading,
        fontSize: '24px',
        display: 'block',
        lineHeight: 1,
        marginBottom: '1rem'
      },
      date: {
        fontFamily: fontFamilyBody,
        fontSize: '1.15rem',
      },
      description: {
        fontFamily: fontFamilyBody,
        fontSize: '1rem',
        marginBottom: '1rem'
      },
      image: {

      },
      time: {
        fontFamily: fontFamilyBody,
        fontSize: '1.15rem',
      },
      containerRetroUI: {
        maxWidth: retroUIWidth,
        margin: '0 auto',
        position: 'relative',
      },
      retroUI: {
        position: 'relative',
        width: '20rem',
        height: '20rem',
        zIndex: 1,
        marginBottom: theme.spacing(2),
      },
      button: {

      },
      faq: {
        color: 'black',
        margin: '1rem'
      }
    }
  }
)

const Hackathon2023ProgramInfo = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="overline"
          className={classes.typographyOverline}
          component="p"
        >
          Program Information & Key Dates
        </Typography>
        <Typography variant="h1" className={classes.typographyOverline}>
          What’s included in the <span style={{color: 'black'}}>2023 Hackathon</span>?
        </Typography>
        <Typography>
        Interested in participating in our 2023 Hackathon? Registration is free, and participants will be entered to win prizes and swag from our amazing local sponsors. Here’s what to expect by signing up:
        </Typography>

        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
        >
          {
            EVENTS.map(event => (
              <Grid
              className={classes.gridItem}
              item
              key={event.title}
              xs={12}
              sm={6}
              >
                <div>
                  <div className={classes.stepCircle}>
                    {event.step}
                  </div>
                  <div className={classes.containerRetroUI}>
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
                        {event.image}
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
                </div>
              </Grid>
            ))
          }
        </Grid>
        <Link href="/">
          <Button
            className={classes.button}
            component="a"
            variant="raised"
            color="secondary"
          >
            Pre-Register For 2023 Hackaton
          </Button>
        </Link>
        <div style={{ margin: '1rem'}}>
          <Link href="/" className={classes.faq}>
            Frequently Asked Questions
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Hackathon2023ProgramInfo;

