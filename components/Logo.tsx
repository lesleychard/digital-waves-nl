import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactElement } from 'react';

type Props = {
  color?: 'black' | 'white',
  component?: React.ElementType,
  includeIntro?: boolean,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: 'url(assets/images/brand/logo-white.svg) no-repeat center center',
      backgroundSize: 'contain',
      width: '100%',
      paddingBottom: '30%',
      fontSize: 0,
      position: 'relative',
    },
    black: {
      backgroundImage: 'url(assets/images/brand/logo-black.svg)',
    },
    typographyIntro: {
      position: 'absolute',
      fontWeight: theme.typography.fontWeightBold,
      top: '-2.5rem',
      lineHeight: 1,
      textAlign: 'center',
      fontSize: '0.7rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.8rem',
        top: '-3.25rem',
      },
    },
  })
);

const Logo = ({ color = 'white', component, includeIntro = false }: Props): ReactElement => {
  const classes = useStyles();

  const Component: React.ElementType = component || 'p';

  return (
    <Component
      className={classNames(
        classes.root,
        {
          [classes.black]: color === 'black',
        }
      )}
    >
      {
        includeIntro
          ? (
            <Typography
              component="span"
              className={classes.typographyIntro}
              variant="overline"
            >
              Newfoundland &amp; Labrador Youth Make
            </Typography>
          )
          : null
      }
      Digital Waves
    </Component>
  );
};

export default Logo;
