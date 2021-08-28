import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import Logo from '../components/Logo';
import { lighten } from '../styles/helpers/color';
import createShadow from '../styles/helpers/createShadow';
import { fontSmoothOn } from '../styles/helpers/extend';
import { light } from '../styles/theme/_palette';

type Props = {
  children: ReactNode,
  title?: ReactNode,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        minHeight: '100vh',
        justifyContent: 'flex-end',
      },
    },
    container: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    containerTitle: {
      ...fontSmoothOn,
      flex: '0 0 60%',
      textAlign: 'center',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: theme.spacing(12),
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
        marginTop: 0,
        padding: theme.spacing(4),
      },
    },
    typographyTitle: {
      color: light,
      maxWidth: '40rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
      '& strong': {
        color: lighten(theme.palette.secondary.light, 0.05),
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    logoContainer: {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& > div': {
        width: '25rem',
        maxWidth: '100%',
      },
    },
    containerContent: {
      boxShadow: createShadow(theme.palette.primary.dark, 12),
      flex: '0 0 40%',
      background: theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        height: '80vh',
        overflow: 'auto',
      },
    },
  })
);

const ShortPage = ({ children, title }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <Typography variant="h1" className={classes.typographyTitle}>
            {
              title
                ? title
                : (
                  <>
                    Help us make room for a more <strong>diverse</strong> future.
                  </>
                )
            }
          </Typography>
          <div className={classes.logoContainer}>
            <div>
              <Logo />
            </div>
          </div>
        </div>
        <div className={classes.containerContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShortPage;
