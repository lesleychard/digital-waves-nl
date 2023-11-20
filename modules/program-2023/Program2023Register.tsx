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
    typographyH2: {
      marginBottom: theme.spacing(4),
    },
    typography: {
      marginBottom: theme.spacing(2),
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
        <RegistrationForm
          eligibility={(
            <>
              <Typography variant="h2" className={classes.typographyH2}>
                Eligibility Requirements:
              </Typography>
              <Typography className={classes.typography}>
                To be eligible to participate in Digital Waves NL 2023, you must meet the following requirements:
              </Typography>
              <Typography className={classes.typography}>
                <ol>
                  <li>You must reside in the province of Newfoundland and Labrador.</li>
                  <li>You must be between the ages of 11-18 during the entire course of the program (November 22 - December 1, 2023).</li>
                  <li>Your gender identification must be female or gender diverse (e.g. non-binary, two-spirit, gender fluid, agender, or third gender), or self-identify within the 2SLGBTQIA+ spectrum.</li>
                  <li>You must communicate in English throughout Digital Waves NL virtual events.</li>
                  <li>Your legal guardian must agree to these terms and conditions on your behalf.</li>
                  <li>Family members and/or persons who share residences with Digital Waves NL organizers are eligible to participate providing they meet all other eligibility requirements.</li>
                  <li>Multiple students per household are welcome to join simultaneously.</li>
                  <li>Registration closes on December 22nd. All workshops will be recorded and viewable at any time.</li>
                </ol>
              </Typography>
              <Typography className={classes.typographyH2}>
                Please review the program information on this page with your parent or guardian before registering to
                ensure you meet the eligibility requirements and understand your commitment to Digital Waves.
              </Typography>
            </>
          )}
        />
      </div>
      <div className={classes.aside} />
    </div>
  );
};

export default ContestRegister2021;
