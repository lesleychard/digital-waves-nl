import { Typography, Grid, GridSize } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import { fade } from '../../styles/helpers/color';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

type Props = {
  hideVolunteer?: boolean;
  hideSponsor?: boolean;
  noMinHeight?: boolean;
  layoutThreeCols?: boolean;
};

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
    noMinHeight: {
      minHeight: 'auto',
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
    containerThreeColHeading: {
      maxWidth: '30rem',
      margin: `0 auto ${theme.spacing(6)}px`,
    },
    containerThreeColItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    typographyThreeCol: {
      marginBottom: theme.spacing(2),
      fontSize: '1.1em',
    },
    spanNoBreak: {
      display: 'inline-block',
    },
  })
);

const FooterCTA = ( props: Props ): ReactElement => {
  const {
    hideVolunteer = false,
    hideSponsor = false,
    noMinHeight = false,
    layoutThreeCols = false,
  } = props;
  const classes = useStyles();

  let directoryColWidth: GridSize = hideVolunteer || hideSponsor ? 6 : 4;
  if (hideSponsor && hideVolunteer) {
    directoryColWidth = 12;
  }

  return (
    <section
      className={classNames(
        classes.root,
        {
          [classes.noMinHeight]: noMinHeight,
        },
      )}
    >
      <div className={classes.container}>
        {
          layoutThreeCols
            ? (
              <>
                <div className={classes.containerThreeColHeading}>
                  <Typography variant="h1" className={classes.typographyH1}>
                    Help us build an inclusive tech community.
                  </Typography>
                </div>
                <Grid
                  className={classes.gridContainer}
                  spacing={7}
                  container
                >
                  <Grid
                    item
                    xs={12}
                    md={directoryColWidth}
                  >
                    <div className={classes.containerThreeColItem}>
                      <Typography className={classes.typographyThreeCol}>
                        Know of a queer
                        <span className={classes.spanNoBreak}>-owned</span>
                        &nbsp;or
                        <span className={classes.spanNoBreak}>-inclusive</span>
                        &nbsp;business, organization, or professional?
                        Suggest a listing to be highlighted in our 2023 program.
                      </Typography>
                      <Button
                        className={classes.button}
                        component="a"
                        variant="raised"
                        color="lowlight"
                        href="https://inqueeries.ca"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        target="_blank"
                        rel="nopener noreferrer"
                        endIcon={
                          <LaunchIcon />
                        }
                      >
                        Suggest a Listing
                      </Button>
                    </div>
                  </Grid>
                  {
                    hideVolunteer
                      ? null
                      : (
                        <Grid
                          item
                          xs={12}
                          md={hideSponsor ? 6 : 4}
                        >
                          <div className={classes.containerThreeColItem}>
                            <Typography className={classes.typographyThreeCol}>
                              Interested in helping with Digital Waves programs? All skills and expertise needed - 
                              planners, designers, coders, marketers, and so much more.
                            </Typography>
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
                          </div>
                        </Grid>
                      )
                  }
                  {
                    hideSponsor
                      ? null
                      : (
                        <Grid
                          item
                          xs={12}
                          md={hideVolunteer ? 6 : 4}
                        >
                          <div className={classes.containerThreeColItem}>
                            <Typography className={classes.typographyThreeCol}>
                              By sponsoring this program you&rsquo;re helping provide life-changing experiences to 
                              those who are underrepresented in the tech sector.
                            </Typography>
                            <Link href="/sponsor">
                              <Button
                                className={classes.button}
                                component="a"
                                variant="raised"
                                color="secondary"
                              >
                                Sponsor Us
                              </Button>
                            </Link>
                          </div>
                        </Grid>
                      )
                  }
                </Grid>
              </>
            )
            : (
              <>
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
                    {
                      hideVolunteer
                        ? null
                        : (
                          <Grid
                            item
                            xs={12}
                            sm={hideSponsor ? 12 : 6}
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
                        )
                    }
                    {
                      hideSponsor
                        ? null
                        : (
                          <Grid
                            item
                            xs={12}
                            sm={hideVolunteer ? 12 : 6}
                          >
                            <Link href="/sponsor">
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
                        )
                    }
                  </Grid>
                </div>
              </>
            )
        }
      </div>
    </section>
  );
};

export default FooterCTA;
