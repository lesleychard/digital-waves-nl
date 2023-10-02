import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import RegistrationForm from '../../components/RegistrationForm';
import { container } from '../../styles/helpers/extend';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
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
  })
);

const ContestRegister2021 = (): ReactElement => {
  const classes = useStyles();
  const title = (
    <>
      <span>
        Register
      </span>
      &nbsp;for
      <br />
      Digital Waves 2023
    </>
  );

  return (
    <div className={classes.root} id="register">
      <div className={classes.container} id="success">
        <Typography
          variant="h1"
          className={classes.typographyH1}
        >
          {title}
        </Typography>
        <RegistrationForm />
      </div>
      <div className={classes.aside} />
    </div>
  );
};

export default ContestRegister2021;
