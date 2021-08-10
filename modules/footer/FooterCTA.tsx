import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import { fade } from '../../styles/helpers/color';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: fade(theme.palette.text.primary, 0.3),
      color: light,
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    container: {
      ...containerSm(theme),
    },
    typographyH1: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
    containerButtons: {
      maxWidth: '30rem',
      margin: '0 auto',
    },
    gridContainer:  {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    button: {
      width: '100%',
    },
  })
);

const FooterCTA = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.typographyH1}>
          We can&rsquo;t close the technology gender gap without your help.
        </Typography>
        <Typography>
          Join us in making the technology sector in Newfoundland &amp; Labrador as diverse, resilient and creative as the people who live here.
        </Typography>
        <div className={classes.containerButtons}>
          <Grid
            className={classes.gridContainer}
            spacing={4}
            container
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link href="/volunteer">
                <Button
                  className={classes.button}
                  component="a"
                  variant="raised"
                  color="highlight"
                >
                  Volunteer With Us
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link href="/volunteer">
                <Button
                  className={classes.button}
                  component="a"
                  variant="raised"
                  color="secondary"
                >
                  Sponsor Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
