import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DownloadIcon from '@material-ui/icons/GetApp';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import { container } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.text.primary,
      color: light,
      minHeight: '75vh',
    },
    container: {
      ...container(theme),
      [theme.breakpoints.up('md')]: {
        margin: 0,
        marginLeft: 'auto',
        padding: '10vw 15vw 10vw 20vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '25vw',
        paddingRight: '20vw',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '30vw',
      },
    },
    typographyOverline: {
      marginBottom: theme.spacing(2),
    },
    typography: {
      marginBottom: theme.spacing(4),
    },
    containerButtonCta: {
      position: 'relative',
      zIndex: 1,
    },
    aside: {
      background: 'url(assets/images/contest/spread-the-word.jpg) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      margin: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        left: 0,
        top: '2vw',
        bottom: '2vw',
        width: '36vw',
        margin: 0,
      },
    },
  })
);

const ContestSpreadTheWord = (): ReactElement => {
  const classes = useStyles();

  const handlePosterDownload = () => {
    window.open('assets/documents/Digital-Waves-Participant-Poster.pdf');
  };

  return (
    <div className={classes.root} id="spread-the-word">
      <div className={classes.container}>
        <Typography
          className={classes.typographyOverline}
          variant="overline"
          component="h1"
        >
          Help Spread the Word
        </Typography>
        <Typography
          className={classes.typography}
          variant="h1"
          component="p"
        >
          Share our experience with your community.
        </Typography>
        <Typography className={classes.typography}>
          Help us spread the word about Digital Waves by sharing our 2021 experience with a child within your community.
          Download the PDF poster below to share our experience within your social networks, school, organization or business.
        </Typography>
        <div className={classes.containerButtonCta}>
          <Button
            variant="raised"
            color="secondary"
            onClick={handlePosterDownload}
            startIcon={<DownloadIcon />}
          >
            Download Poster (PDF)
          </Button>
        </div>
      </div>
      <div className={classes.aside} />
    </div>
  );
};

export default ContestSpreadTheWord;
