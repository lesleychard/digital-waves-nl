import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import { darken } from '../../styles/helpers/color';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: `linear-gradient(to bottom, ${darken(theme.palette.primary.dark, 0.3)}, ${theme.palette.primary.dark})`,
      color: theme.palette.text.secondary,
      paddingTop: theme.spacing(12),
    },
    gridContainer: {
      padding: theme.spacing(4),
    },
    typography: {
      textTransform: 'uppercase',
      fontSize: '1em',
      fontWeight: theme.typography.fontWeightBold,
    },
    gridItemLeft: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        padding: `0 ${theme.spacing(3)}px`,
        textAlign: 'right',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '0.1em',
          top: 0,
          bottom: 0,
          background: theme.palette.text.secondary,
          opacity: 0.5,
          position: 'absolute',
          right: 0,
        },
      },
    },
    gridItemRight: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        padding: `0 ${theme.spacing(3)}px`,
        textAlign: 'left',
      },
    },
  })
);

const Hackathon2023TopBanner = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.gridContainer}
      >
        <Grid
          item
          xs={12}
          md={6}
          className={classes.gridItemLeft}
        >
          <Typography className={classes.typography}>
            Free Virtual Digital Skills Program
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.gridItemRight}
        >
          <Typography className={classes.typography}>
            April 1, 2023 to May 6, 2023
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hackathon2023TopBanner;

