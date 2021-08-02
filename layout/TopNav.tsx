import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

import { stripUl } from '../styles/helpers/extend';
import { light } from '../styles/theme/_palette';
import Button from '../components/Button';
import MobileMenu from './MobileMenu';

export const NAV_ITEMS: NavItem[][] = [
  [
    {
      id: 'home',
      label: 'About Us',
      route: '/',
    },
    {
      id: 'contest-2021',
      label: 'Contest Fall 2021',
      route: '/contest-2021',
    },
  ],
  [
    {
      id: 'subscribe',
      label: 'Stay Updated',
      route: '/subscribe',
    },
    {
      id: 'sponsor',
      label: 'Sponsor Us',
      route: '/sponsor',
    },
  ],
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      left: 0,
      right: 0,
      top: 0,
      padding: theme.spacing(2),
      borderTop: `10px solid ${theme.palette.secondary.light}`,
      zIndex: 1,
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(4),
      },
    },
    buttonMenu: {
      background: `url(assets/images/icon-menu.svg) no-repeat center center`,
      backgroundSize: '60%',
      borderRadius: '50%',
      fontSize: 0,
      minWidth: 'unset',
      width: '3.4rem',
      height: '3.4rem',
      marginLeft: theme.spacing(1),
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    buttomMenuOpened: {
      backgroundImage: 'url(assets/images/icon-menu-closed.svg)',
      backgroundSize: '50%',
    },
    ul: {
      ...stripUl,
    },
    li: {
      display: 'inline-block',
      margin: `0 ${theme.spacing(0.5)}px`,
      [theme.breakpoints.up('lg')]: {
        margin: `0 ${theme.spacing(2)}px`,
      },
    },
    button: {
      display: 'none',
      background: 'transparent',
      border: '1px solid transparent',
      color: light,
      '&:before': {
        opacity: 0,
        transition: `opacity ${theme.transitions.duration.shortest}ms, transform ${theme.transitions.duration.shortest}ms`,
      },
      '&:after': {
        display: 'block',
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: `1px solid ${light}`,
        opacity: 0,
        transition: `opacity ${theme.transitions.duration.shortest}ms`,
      },
      '&:hover': {
        border: `1px solid ${theme.palette.text.primary}`,
        '&:before': {
          opacity: 1,
        },
      },
      '&$buttonSelected': {
        pointerEvents: 'none',
        '&:after': {
          opacity: 1,
        },
        '&:hover:after, &:active:after, &:focus:after': {
          opacity: 0,
        },
      },
      [theme.breakpoints.up('md')]: {
        display: 'inline-block',
      },
    },
    buttonSelected: {},
  })
);

const TopNav = (): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuButtonClick = () => {
    const menuOpen = !mobileMenuOpen;
    setMobileMenuOpen(menuOpen);
    if (menuOpen) {
      document.body.classList.add('prevent-scroll');
    }
    else {
      document.body.classList.remove('prevent-scroll');
    }
  };

  return (
    <nav className={classes.root}>
      <Button
        className={classNames(
          classes.buttonMenu,
          {
            [classes.buttomMenuOpened]: mobileMenuOpen,
          },
        )}
        onClick={mobileMenuButtonClick}
      >
        View Menu
      </Button>
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
      <MobileMenu open={mobileMenuOpen} />
    </nav>
  );
};

export default TopNav;

interface NavItem {
  id: string;
  label: string;
  route: string;
}
