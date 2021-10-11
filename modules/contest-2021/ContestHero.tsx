import { Dialog, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { ReactElement } from 'react';

import Button from '../../components/Button';
import { fade, lighten } from '../../styles/helpers/color';
import { container } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import ContestHeroIdeaDialog from './ContestHeroIdeaDialog';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: 'url(assets/images/brand/section-bg-gradient.png) no-repeat center center',
      backgroundSize: 'cover',
      paddingBottom: theme.spacing(2),
    },
    container: {
      ...container(theme),
    },
    containerContent: {
      background: fade(lighten(theme.palette.primary.light, 0.1), 0.3),
      padding: `${theme.spacing(6)}px ${theme.spacing(3)}px ${theme.spacing(8)}px`,
      maxWidth: '40rem',
      margin: '6rem auto 2rem',
      position: 'relative',
      textAlign: 'center',
      '&:before': {
        content: '""',
        display: 'block',
        width: '4rem',
        height: '4rem',
        background: 'url(assets/images/emojis/emoji-earth.svg) no-repeat center center',
        backgroundSize: 'contain',
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translate(-50%, -50%)',
      },
      [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(8)}px ${theme.spacing(5)}px`,
      },
    },
    typographyOverline: {
      marginBottom: theme.spacing(2),
    },
    typographyH1: {
      lineHeight: 1.25,
      '& strong': {
        background: theme.palette.text.primary,
        color: theme.palette.highlight.main,
        fontWeight: theme.typography.fontWeightRegular,
        display: 'inline-block',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '3rem',
          height: '3rem',
          background: 'url(assets/images/icons/icon-cursor-text.svg) no-repeat center center',
          backgroundSize: 'contain',
          position: 'absolute',
          right: 0,
          top: '10%',
          transform: 'translateX(50%)',
        },
      },
    },
    containerButton: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
    },
    buttonCta: {
      marginTop: theme.spacing(4),
      '&:visited,&:active': {
        color: theme.palette.text.primary,
      },
    },
    buttonSecondaryCta: {
      marginTop: theme.spacing(2),
      '&:visited,&:active': {
        color: theme.palette.text.primary,
      },
      '&:hover': {
        color: light,
      },
    },
    imgEmoji:{
      marginRight: '1rem',
    },
  })
);

const ContestHero = (): ReactElement => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <Typography
            className={classes.typographyOverline}
            variant="overline"
            component="h1"
          >
            This year&rsquo;s design challenge:
          </Typography>
          <Typography
            className={classes.typographyH1}
            variant="h1"
            component="p"
          >
            How might we make Newfoundland &amp; Labrador more <strong>sustainable</strong> by using our smartphones?
          </Typography>
          <div className={classes.containerButton}>
            <Button
              className={classes.buttonCta}
              variant="raised"
              color="secondary"
              component="a"
              href="#contest-register"
              // onClick={openDialog}
            >
              <img
                className={classes.imgEmoji}
                src="assets/images/emojis/emoji-hand-raised.svg"
                alt="Girl-representing person raises hand"
              />
              Register Now
            </Button>
            <Button
              className={classes.buttonSecondaryCta}
              component="a"
              href="#spread-the-word"
              variant="text"
            >
              Help Spread the Word
            </Button>
          </div>
        </div>
      </div>
      <Dialog onClose={handleDialogClose} open={dialogOpen}>
        <ContestHeroIdeaDialog handleDialogClose={handleDialogClose} />
      </Dialog>
    </section>
  );
};

export default ContestHero;
