import classNames from 'classnames';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';

import { darken } from '../../styles/helpers/color';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: `linear-gradient(to bottom, ${darken(theme.palette.primary.dark, 0.3)}, ${theme.palette.primary.dark})`,
      color: theme.palette.text.secondary,
      paddingTop: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(12),
      },
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
    },
    gridItemRight: {
      textAlign: 'center',
    },
  })
);

const Program2023TopBanner = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classNames(
          classes.gridContainer
        )}
      >
        <Grid
          item
          xs={12}
          md={12}
          className={classes.gridItemLeft}
        >
          <Typography className={classes.typography}>
            Free Digital Skills Program Coming November 2023
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Program2023TopBanner;

