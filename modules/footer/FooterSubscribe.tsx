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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    typography: {
      margin: `0 ${theme.spacing(1.5)}px`,
      fontSize: '1em',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const FooterSubscribe = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typography}>
        Want to stay updated about our 2021 contest?
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
