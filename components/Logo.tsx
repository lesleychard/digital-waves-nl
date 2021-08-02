import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import { light } from '../styles/theme/_palette';

type Props = {
  color?: 'black' | 'white',
  component?: React.ElementType,
  includeIntro?: boolean,
};

const useStyles = makeStyles(
  () => ({
    root: {
      background: 'url(assets/images/logo-white.svg) no-repeat center center',
      backgroundSize: 'contain',
      width: '100%',
      paddingBottom: '30%',
      fontSize: 0,
      position: 'relative',
    },
    black: {
      backgroundImage: 'url(assets/images/logo-black.svg)',
    },
    spanIntro: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      color: light,
      position: 'absolute',
      top: '-3rem',
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
            <span className={classes.spanIntro}>
              Newfoundland &amp; Labrador Youth Make
            </span>
          )
          : null
      }
      Digital Waves
    </Component>
  );
};

export default Logo;
