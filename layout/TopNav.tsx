import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState, useEffect } from 'react';

import { stripUl } from '../styles/helpers/extend';
import { light } from '../styles/theme/_palette';
import Button from '../components/Button';
import MobileMenu from './MobileMenu';
import Logo from '../components/Logo';
import { getSiteVersion, SITE_VERSION_HACKATHON_2023 } from '../lib/getSiteVersion';

export const NAV_ITEMS: NavItem[][] = [
  [
    {
      id: 'home',
      label: 'About Us',
      route: '/',
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

if (getSiteVersion() === SITE_VERSION_HACKATHON_2023) {
  NAV_ITEMS[0].push({
    id: "hackathon-2023",
    label: "2023 Hackathon",
    route: "/hackathon-2023",
  });
} else {
  NAV_ITEMS[0].push({
    id: "contest-2021",
    label: "Contest Fall 2021",
    route: "/contest-2021",
  });
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      left: 0,
      right: 0,
      top: '0.5rem',
      padding: theme.spacing(2),
      zIndex: 99,
      background: 'transparent',
      transition: `padding ${theme.transitions.duration.short}ms`,
      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: '-3rem',
        opacity: 0,
        background: `linear-gradient(to bottom, ${theme.palette.text.primary}, transparent 75%)`,
        transition: `opacity ${theme.transitions.duration.short}ms`,
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(4),
      },
    },
    dense: {
      padding: theme.spacing(2),
      '&:before': {
        opacity: 0.8,
      },
    },
    buttonMenu: {
      background: `url(assets/images/icons/icon-menu.svg) no-repeat center center`,
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
      backgroundImage: 'url(assets/images/icons/icon-menu-closed.svg)',
      backgroundSize: '50%',
    },
    containerLogo: {
      width: '9rem',
      position: 'absolute',
      left: '50%',
      top: '1.25rem',
      opacity: 0,
      transform: 'translateX(-50%)',
      transition: `opacity ${theme.transitions.duration.short}ms`,
      [theme.breakpoints.up('md')]: {
        '$dense &': {
          opacity: 1,
        },
      },
    },
    ul: {
      ...stripUl,
      transform: 'scale(1)',
      transition: `transform ${theme.transitions.duration.short}ms`,
      '$dense &': {
        transform: 'scale(0.9)',
      },
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
  const [navDense, setNavDense] = useState<boolean>(false);
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

  const toggleNavDense = () => {
    setNavDense(window.pageYOffset >= 100);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', toggleNavDense);
      return () => {
        window.removeEventListener('scroll', toggleNavDense);
      };
    },
    []
  );

  

  return (
    <nav
      className={classNames(
        classes.root,
        {
          [classes.dense]: navDense,
        }
      )}
    >
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
      <div className={classes.containerLogo}>
        <Logo />
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
