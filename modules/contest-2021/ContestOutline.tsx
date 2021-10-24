import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import { lighten } from '../../styles/helpers/color';

import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const BODY_ELIGIBILITY = [
  'Must be between 13-18 years of age.',
  'Must Identify as female or gender-diverse.',
  'Must reside within the province of Newfoundland & Labrador during the contest timeline.',
];

const BODY_COMPETE = [
  'All applicants will receive a registration package which includes important information about this year’s design challenge, such as information on current sustainability issues our province is facing as well as tips to get started.',
  'Our contestants will be invited to digital skills workshops hosted by local industry leaders. Our applicants will learn the skills to create: interactive prototypes to help their ideas come to life; how to reach people to effect real change; and how to transform their idea into a branded, impact-driven business.',
  'Using new digital skills, contestants will create a set of prototypes for their ideas, a unique name and logo design, and a 5-minute presentation explaining how their design will make our province a more sustainable place to live.',
  'Submissions will then be judged by local industry experts, and winners for all predetermined categories will be selected.',
];

const BODY_JUDGING = [
  'This part wouldn’t be possible without amazing local sponsors. We are offering prizes on many, diverse categories to show our youth that all aptitudes are wanted and valued in our industry.',
  'Specifics on other prize categories will be announced closer to the submission deadline, but our offering includes:',
];

const BODY_PRIZES = [
  'Grand prize of $2,000 cash',
  'Around $8,000 in additional prizes, based on set categories such as age groups and different skill sets.',
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.text.primary,
      color: light,
    },
    container: {
      ...containerSm(theme),
    },
    typographyOverline: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
        marginBottom: theme.spacing(8),
      },
    },
    gridContainer: {
      marginBottom: theme.spacing(4),
    },
    typographyH2: {
      fontSize: '2rem',
      marginBottom: theme.spacing(2),
      '$gridContainer:first-of-type &': {
        color: lighten(theme.palette.secondary.light, 0.05),
      },
      '$gridContainer:nth-of-type(2) &': {
        color: lighten(theme.palette.highlight.light, 0.05),
      },
      '$gridContainer:nth-of-type(3) &': {
        color: lighten(theme.palette.lowlight.light, 0.05),
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
        paddingRight: theme.spacing(4),
        marginBottom: theme.spacing(6),
      },
    },
    typographyParagraph: {

    },
  })
);

const ContestOutline = (): ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="contest-outline">
      <div className={classes.container}>
        <Typography
          className={classes.typographyOverline}
          variant="overline"
          component="h1"
        >
          Contest Outline
        </Typography>

        <Grid container className={classes.gridContainer}>
          <Grid item md={5}>
            <TypographyHeading>
              Contest Eligibility
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_ELIGIBILITY.map((copy, index) => (
                <TypographyBody key={index}>
                  {copy}
                </TypographyBody>
              ))
            }
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
          <Grid item md={5}>
            <TypographyHeading>
              How to Compete
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_COMPETE.map((copy, index) => (
                <TypographyBody key={index}>
                  {copy}
                </TypographyBody>
              ))
            }
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
          <Grid item md={5}>
            <TypographyHeading>
              Judging &amp; Prizes
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_JUDGING.map((copy, index) => (
                <TypographyBody key={index}>
                  {copy}
                </TypographyBody>
              ))
            }
            <ul>
              {
                BODY_PRIZES.map((prize, index) => (
                  <li key={index}>
                    {prize}
                  </li>
                ))
              }
            </ul>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

type CustomTypographyProps = {
  children: ReactNode,
};

const TypographyHeading = ({ children }: CustomTypographyProps): ReactElement => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.typographyH2}
      variant="h2"
    >
      {children}
    </Typography>
  );
};

const TypographyBody = ({ children }: CustomTypographyProps): ReactElement => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.typographyParagraph}
    >
      {children}
    </Typography>
  );
};

export default ContestOutline;
