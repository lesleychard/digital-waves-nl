import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { ReactElement } from 'react';
import Button from '../../components/Button';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      background: theme.palette.secondary.main,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    typography: {
      margin: `0 ${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
      fontSize: '1em',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        margin: `0 ${theme.spacing(1.5)}px`,
      },
    },
  })
);

const FooterSubscribe = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typography}>
        Want to stay updated?
      </Typography>
      <Link href="/subscribe">
        <Button
          variant="raised"
          color="highlight"
          size="small"
          component="a"
        >
          Subscribe Now
        </Button>
      </Link>
    </div>
  );
};

export default FooterSubscribe;
