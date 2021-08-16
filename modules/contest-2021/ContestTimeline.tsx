import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import RetroUI from '../../components/RetroUI';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import { fontFamilyHeading } from '../../styles/theme/_typography';

const TIMELINE_DATES = [
  {
    m: 'Oct',
    d: '04',
    y: '2021',
    label: 'Registration Opens',
  },
  {
    m: 'Oct',
    d: '25',
    y: '2021',
    label: 'Registration Closes',
  },
  {
    m: 'Nov',
    d: '01',
    y: '2021',
    label: 'Idea Submission',
  },
  {
    m: 'Nov',
    d: '??',
    y: '2021',
    sub: 'Remote Workshop',
    label: 'App Design 101',
  },
  {
    m: 'Nov',
    d: '??',
    y: '2021',
    sub: 'Remote Workshop',
    label: 'Marketing & Logo Design 101',
  },
  {
    m: 'Nov',
    d: '??',
    y: '2021',
    label: 'Design & Pitch Submission',
  },
];

const useStyles = makeStyles(
  (theme) => {
    const retroUIWidth = '6rem';
    const retroUIConnecterOffset = '5rem';
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
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(6),
        },
      },
      typographyH1: {
        color: light,
        marginBottom: theme.spacing(2),
      },
      gridContainer: {
        marginTop: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(4),
        },
      },
      gridItem: {
        textAlign: 'center',
        marginBottom: theme.spacing(4),
        position: 'relative',
        '&:nth-of-type(-n+3)': {
          borderBottom: `0.1em solid ${theme.palette.text.primary}`,
        },
        '&:before, &:after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          borderTop: `0.1em solid ${theme.palette.text.primary}`,
          top: retroUIConnecterOffset,
          zIndex: 5,
        },
        '&:before': {
          left: 0,
          width: 'calc(50% - 2rem)',
        },
        '&:after': {
          left: `calc(50% + 2rem)`,
          right: 0,
        },
        '&:first-of-type:before': {
          display: 'none',
        },
        '&:last-of-type:after': {
          display: 'none',
        },
        '&:nth-of-type(3) > div:before, &:nth-of-type(4) > div:before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          borderRight: `0.1em solid ${theme.palette.text.primary}`,
        },
        '&:nth-of-type(3) > div:before': {
          right: 0,
          bottom: 0,
          top: retroUIConnecterOffset,
        },
        '&:nth-of-type(4) > div:before': {
          left: 0,
          top: -theme.spacing(4),
          height: `calc(${retroUIConnecterOffset} + ${theme.spacing(4)}px)`,
        },
        [theme.breakpoints.down('xs')]: {
          '&:nth-of-type(-n+4)': {
            borderBottom: `0.1em solid ${theme.palette.text.primary}`,
          },
          '& > div:before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            borderRight: `0.1em solid ${theme.palette.text.primary}`,
          },
          '&:nth-of-type(3) > div:before, &:nth-of-type(5) > div:before': {
            left: 0,
            right: 'auto',
            top: -theme.spacing(4),
            height: `calc(${retroUIConnecterOffset} + ${theme.spacing(4)}px)`,
          },
          '&:nth-of-type(even) > div:before': {
            right: 0,
            bottom: 0,
            top: retroUIConnecterOffset,
          },
          '&:last-of-type > div:before': {
            display: 'none',
          },
        },
      },
      dateMonth: {
        fontFamily: fontFamilyHeading,
        fontSize: '1.25rem',
        lineHeight: 1.2,
      },
      dateDay: {
        fontFamily: fontFamilyHeading,
        fontSize: '2rem',
        display: 'block',
        lineHeight: 1,
      },
      dateYear: {
        fontFamily: fontFamilyHeading,
        fontSize: '1.15rem',
      },
      containerRetroUI: {
        maxWidth: retroUIWidth,
        margin: '0 auto',
        position: 'relative',
        '&:before, &:after': {
          content: '"\u2219"',
          display: 'block',
          position: 'absolute',
          top: '2.05rem',
          fontFamily: 'Times New Roman',
          fontSize: '3rem',
          zIndex: 5,
          lineHeight: 1,
        },
        '&:before': {
          left: theme.spacing(1),
        },
        '&:after': {
          right: theme.spacing(1),
        },
        '$gridItem:first-of-type &:before': {
          display: 'none',
        },
        '$gridItem:last-of-type &:after': {
          display: 'none',
        },
      },
      retroUI: {
        position: 'relative',
        zIndex: 1,
        marginBottom: theme.spacing(2),
      },
      containerSubSpacer: {
        height: '0.5rem',
      },
      typographyDateOverline: {
        lineHeight: 1.25,
        marginBottom: theme.spacing(0.5),
      },
    };
  }
);

const ContestTimeline = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="overline"
          className={classes.typographyOverline}
          component="p"
        >
          Fall 2021
        </Typography>
        <Typography variant="h1" className={classes.typographyH1}>
          Contest Timeline
        </Typography>
        <Typography>
          Our experience will run a total of six weeks between initial registration and final judging.
          <br />
          Here’s the breakdown:
        </Typography>

        <Grid
          container
          spacing={6}
          className={classes.gridContainer}
        >
          {
            TIMELINE_DATES.map(date => (
              <Grid
                className={classes.gridItem}
                item
                key={date.label}
                xs={6}
                sm={4}
              >
                <div>
                  <div className={classes.containerRetroUI}>
                    <RetroUI
                      className={classes.retroUI}
                      title={(
                        <div className={classes.dateMonth}>
                          {date.m}
                        </div>
                      )}
                    >
                      <div className={classes.dateDay}>
                        {date.d}
                      </div>
                      <div className={classes.dateYear}>
                        {date.y}
                      </div>
                    </RetroUI>
                  </div>
                  {
                    date.sub
                      ? (
                        <Typography
                          variant="overline"
                          component="p"
                          className={classes.typographyDateOverline}
                        >
                          {date.sub}
                        </Typography>
                      )
                      : <div className={classes.containerSubSpacer} />
                  }
                  <Typography variant="h3" component="p">
                    {date.label}
                  </Typography>
                </div>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default ContestTimeline;
