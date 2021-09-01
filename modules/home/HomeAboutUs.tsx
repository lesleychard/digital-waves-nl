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
    typographyBody: {
      fontSize: '1rem',
      marginBottom: theme.spacing(4),
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
        <div>
          <Typography variant="h2" gutterBottom>
            Helping Youth
          </Typography>
          <Typography className={classes.typographyBody}>
            Digital Waves aims to help young women and gender-diverse youth develop new skills, and to inspire young people who are underrepresented in technology fields.
            As our dependency on technology grows, we wish to show the next generation of engineers, designers and entrepreneurs that tech can be harnessed to make the world a better place.
            We hope that by learning the creative aspects of the tech industry, and meeting adults who they can see themselves in, our participants will leave with not only new skills and confidence, but new ideas about their own future in our digital landscape.
          </Typography>

          <Typography variant="h2" gutterBottom>
            Helping Parents
          </Typography>
          <Typography className={classes.typographyBody}>
            Inspiring your kids to get out of their comfort zone can be tough, which is why we have incentivized our program to excite and motivate our participants.
            We also know that extracurricular activities in tech related fields can be impossible to find, especially in our rural communities.
            Digital Waves is a completely remote experience so we can deliver to as many diverse participants from across our province as possible.
            Our experience will also reveal new ideas of who can succeed in a career in science and technology, and how impactful a future in technology can be.
          </Typography>

          <Typography variant="h2" gutterBottom>
            Helping Business
          </Typography>
          <Typography className={classes.typographyBody}>
            Hiring tech talent in NL has been difficult -- finding diverse candidates with fresh perspectives can be nearly impossible.
            Our team of volunteers are dedicated to our mission of closing the gender gap in technology.
            When the impact and inclusiveness of technology is taught to a more diverse selection of young people, the future of our industry will also be more diverse.
            By helping Digital Waves you are not only providing a young person with a potentially life-changing experience, you are also communicating to our participants that they are welcome in our community.
          </Typography>
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
