import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import { lighten } from '../../styles/helpers/color';

import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const BODY_HACKATHON = [
  'Hackathons get people together to hack (or code) a solution to a real-life problem in a short amount of time. While hackathons generate apps and other tech quickly, they offer infinite possibilities to be creative and learn new skills, all while helping make a real impact.',
  'Our Hackathon will be engaging girls and 2SLGBTQIA+ youth ages 11-18, from anywhere in Newfoundland and Labrador, to help build NL\'s 2SLGBTQIA+ online resource supporting the queer and trans community.',
];

const BODY_INQUEERIES= [
  'Have you ever wanted to support a 2SLGBTQIA+-owned business? Have you ever wondered where to find a service that’s queer- and trans- inclusive? Have you ever wondered what resources and organizations are out there for 2SLGBTQIA+ people in NL?',
  'The InQueeries app aims to increase awareness of queer-owned and -inclusive businesses, organizations, and professionals by creating a crowdsourced, searchable directory of listings. InQueeries will not only make it easier to be an ally by supporting 2SLGBTQIA+-owned businesses with greater ease, but will also provide valuable resources to queer and trans people in the province.',
];

const BODY_PARTICIPANT_TASKS = [
  'By registering to participate, you will be attending two virtual digital skills classes and creating a single-page website highlighting a 2SLGBTQIA+-owned or -inclusive business, organization, or professional. After the hackathon, we will combine all of the single-pages in a searchable directory, creating a crowdsourced online resource that is truly authentic to the province and its community!',
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
  })
);

const Program2023FAQ = (): ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="contest-outline">
      <div className={classes.container}>
        <Typography
          className={classes.typographyOverline}
          variant="overline"
          component="h1"
        >
          Frequently Asked Questions
        </Typography>

        <Grid container className={classes.gridContainer}>
          <Grid item md={5}>
            <TypographyHeading>
              What&rsquo;s a Hackathon?
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_HACKATHON.map((copy, index) => (
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
              What&rsquo;s InQueeries?
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_INQUEERIES.map((copy, index) => (
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
              What&rsquo;s involved?
            </TypographyHeading>
          </Grid>
          <Grid item md={7}>
            {
              BODY_PARTICIPANT_TASKS.map((copy, index) => (
                <TypographyBody key={index}>
                  {copy}
                </TypographyBody>
              ))
            }
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const classes: any = makeStyles(
    (theme) => ({
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
    })
  );

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const classes: any = makeStyles(
    (theme) => ({
      typographyParagraph: {
        marginBottom: theme.spacing(2),
      },
    })
  );

  return (
    <Typography
      className={classes.typographyParagraph}
    >
      {children}
    </Typography>
  );
};

export default Program2023FAQ;
