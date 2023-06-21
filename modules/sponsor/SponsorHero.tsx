import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';
import Button from '../../components/Button';
import { lighten } from '../../styles/helpers/color';
import { container, fontSmoothOn } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: 'url(assets/images/brand/section-bg-teal.jpg) no-repeat center center',
      backgroundSize: 'cover',
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    container: {
      ...container(theme),
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        paddingRight: '40vw',
        paddingTop: theme.spacing(12),
      },
    },
    containerCopy: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: '38rem',
      },
    },
    typographyHeading: {
      ...fontSmoothOn,
      color: light,
      marginBottom: theme.spacing(2),
      fontSize: '2rem',
      '& strong': {
        color: lighten(theme.palette.secondary.light, 0.1),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.75rem',
      },
    },
    typographyParagraph: {
      marginBottom: theme.spacing(2),
    },
    containerCtas: {
      marginTop: theme.spacing(4),
      '& > div:first-child': {
        marginBottom: theme.spacing(2),
      },
    },
    buttonDownload: {
      '&:hover, &:visited': {
        color: theme.palette.text.primary,
      },
    },
    containerImg: {
      background: 'url(assets/images/sponsor/hero-image.jpg) no-repeat center center',
      backgroundSize: 'cover',
      height: '60vh',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        right: 0,
        width: '35vw',
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    img: {
      maxWidth: '100%',
    },
  })
);

const SponsorHero = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.containerImg} />
      <div className={classes.container}>
        <div className={classes.containerCopy}>
          <Typography variant="h1" className={classes.typographyHeading}>
            We believe that technology is the future, and the future has <strong>a place for everyone</strong>.
          </Typography>
          <Typography className={classes.typographyParagraph}>
            This experience won&rsquo;t be possible without wonderful local sponsors. By sponsoring Digital Waves,
            you&rsquo;re helping to provide life-changing experiences to local populations who are underrepresented
            in the global technology industry.
          </Typography>
          <Typography className={classes.typographyParagraph}>
            Our vision is that by boosting digital confidence and giving young people the opportunity to see themselves
            in technology, we will be able to increase diversity in our technology sector.
          </Typography>
          <div className={classes.containerCtas}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Button
                  variant="raised"
                  color="secondary"
                  component="a"
                  href="#sponsor-packages"
                >
                  View Our Sponsorship Options
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  component="a"
                  href="assets/documents/Digital-Waves-Sponsorship-Package-2023.pdf"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttonDownload}
                >
                  Sponsor Information Package (PDF)
                  <DownloadIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorHero;
