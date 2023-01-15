import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { Typography, Link } from '@material-ui/core';

import Button from '../../components/Button';
import { container } from '../../styles/helpers/extend';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    spaceContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
    link: {
      color: "black",
    },
    sponserContainer: {
      marginTop: theme.spacing(50),
      display: "flex",
      justifyContent: "center",
    },
    upperCase: {
      textTransform: "uppercase",
    },
  })
);

const Hackathon2023Hero = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contest-register">
      <div>
        <div className={classes.container}>
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
            code the InQueeries web app in our 2023 Hackathon. Learn all the digital skills
            required through our virtual workshops (beginner friendly!), build a real webpage
            that will be included in our app, and enter to win amazing prizes.
          </Typography>
          <div className={classes.spaceContainer}>
            <Button
              className={classes.button}
              component="a"
              variant="raised"
              color="secondary"
            >
              Pre-register for 2023 Hackathon
            </Button>
            <Link><Typography className={classes.link}>Program Information & Key Dates</Typography></Link>
          </div>
        </div>
        <div className={classes.aside} />
      </div>
      <div className={classes.sponserContainer}>
        <Typography className={classes.upperCase}>Proud partners of the 2023 Hackathon</Typography>
      </div>
    </div>
  );
};

export default Hackathon2023Hero;

