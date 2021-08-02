import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { fade } from '../styles/helpers/color';
import { stripUl } from '../styles/helpers/extend';
import { light } from '../styles/theme/_palette';
import Button from '../components/Button';
import { NAV_ITEMS } from './TopNav';
import Logo from '../components/Logo';

type Props = {
  open?: boolean,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {
      pointerEvents: 'none',
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      alignItems: 'center',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        background: fade(light, 0.2),
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        transform: 'translateY(100%)',
        transition: `transform ${theme.transitions.duration.short}ms`,
      },
      '$open&:before': {
        transform: 'translateY(0)',
      },
    },
    open: {
      pointerEvents: 'all',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    logoContainer: {
      opacity: 0,
      width: '20rem',
      maxWidth: '90vw',
      marginBottom: theme.spacing(6),
      '$open &': {
        transition: `opacity ${theme.transitions.duration.standard}ms`,
        opacity: 1,
      },
    },
    ul: {
      ...stripUl,
      opacity: 0,
      margin: `${-theme.spacing(1)}px 0`,
      '$open &': {
        transition: `opacity ${theme.transitions.duration.standard}ms`,
        opacity: 1,
      },
    },
    li: {
      margin: theme.spacing(2),
      textAlign: 'center',
    },
    button: {},
    buttonSelected: {},
  })
);

const MobileMenu = ({ open = false }: Props): ReactElement => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div
      aria-hidden={!open}
      className={classNames(
        classes.root,
        {
          [classes.open]: open,
        }
      )}
    >
      <div>
        <div className={classes.logoContainer}>
          <Logo color="black" />
        </div>
        {
          NAV_ITEMS.map((navCol, index) => (
            <div key={index}>
              <ul className={classes.ul}>
                {
                  navCol.map(item => (
                    <li key={item.id} className={classes.li}>
                      <Link href={item.route}>
                        <Button
                          component="a"
                          className={classNames({
                            [classes.button]: item.id !== 'sponsor',
                            [classes.buttonSelected]: router.pathname === item.route,
                          })}
                          variant="raised"
                          color={item.id === 'sponsor' ? 'secondary' : 'primary'}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MobileMenu;
