import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { Typography, Link, Grid } from '@material-ui/core';

import Button from '../../components/Button';
import { container } from '../../styles/helpers/extend';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
    },
    spaceContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
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
    },
    button: {
      marginBottom: theme.spacing(4),
    },
    paragraph: {
      marginBottom: theme.spacing(4),
    },
    aside: {
      background: 'url(assets/images/hackathon/hackathon_2023_hero_image.png) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75%',
      flexBasis: '100%',
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
    link: {
      color: 'black',
    },
    proudSponserContainer: {
      marginTop: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      flexBasis: '100%',
    },
    sponserContainer: {
      marginTop: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      flexBasis: '100%',
    },
    sponserImage: {
      background: 'url(assets/images/hackathon/STEM_for_girls_test.png) no-repeat center center',
      backgroundSize: 'cover',
      height: '130px',
      flexBasis: '20%',
    },
    upperCase: {
      textTransform: 'uppercase',
    },
  })
);

const Hackathon2023Hero = (): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={8}>
        <Grid className={classes.container}>
          <Typography
            variant="h1"
            className={classes.typographyH1}
          >
            <strong>Help us</strong> create NL&apos;s queer-owned and -inclusive resource app.
          </Typography>
          <Typography className={classes.paragraph}>
            InQueeries will be Newfoundland & Labrador&apos;s first comprehensive 
            2SLGBTQIA+ directory of businesses, organizations, and professionals 
            who support the queer community, and we need your help to create our app.
          </Typography>
          <Typography className={classes.paragraph}>
            We are calling on girls, gender-diverse and queer youth ages 11-18, residing
            anywhere in the province of Newfoundland & Labrador to help us design and 
            code the InQueeries web app in our 2023 Digital Triathlon. Learn all the digital skills
            required through our virtual workshops (beginner friendly!), build a real webpage
            that will be included in our app, and enter to win amazing prizes.
          </Typography>
          <Grid className={classes.spaceContainer}>
            <Button
              className={classes.button}
              component="a"
              variant="raised"
              color="secondary"
            >
              Pre-register for 2023 Digital Triathlon
            </Button>
            <Link><Typography className={classes.link}>Program Information & Key Dates</Typography></Link>
          </Grid>
        </Grid>
        <div className={classes.aside} />
      </Grid>
      <Grid container className={classes.proudSponserContainer} alignItems="stretch" >
        <Typography align="center" className={classes.upperCase}><strong>Proud partners of the 2023 Digital Triathlon</strong></Typography>
      </Grid>
      <div className={classes.sponserContainer}>
        <div className={classes.sponserImage} />
        <div className={classes.sponserImage} />
        <div className={classes.sponserImage} />
      </div>
    </Grid>
  );
};

export default Hackathon2023Hero;

