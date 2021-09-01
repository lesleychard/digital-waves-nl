import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { ReactElement } from 'react';

import Logo from '../../components/Logo';
import { container, stripUl } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';

const MENU_ITEMS = [
  {
    title: 'About Us',
    route: '/',
  },
  {
    title: 'Contest Fall 2021',
    route: '/contest-2021',
  },
  {
    title: 'Sponsor Us',
    route: '/sponsor',
  },
  {
    title: 'Volunteer with Us',
    route: '/volunteer',
  },
];

const SOCIAL_ITEMS = [
  {
    id: 'facebook',
    title: 'Facebook',
    link: 'https://facebook.com/digitalwavesnlca',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    link: 'https://instagram.com/digitalwavesnl',
  },
  {
    id: 'twitter',
    title: 'Twitter',
    link: 'https://twitter.com/digitalwavesnl',
  },
  // {
  //   id: 'snapchat',
  //   title: 'Snapchat',
  //   link: '#',
  // },
  // {
  //   id: 'slack',
  //   title: 'Slack',
  //   link: '#',
  // },
  // {
  //   id: 'tiktok',
  //   title: 'TikTok',
  //   link: '#',
  // },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
      background: theme.palette.text.primary,
      color: light,
    },
    container: {
      ...container(theme),
    },
    containerLogo: {
      maxWidth: '20rem',
      margin: '0 auto',
      paddingTop: '4rem',
    },
    listSocial:{
      ...stripUl,
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(5),
      '& > li': {
        margin: `0 ${theme.spacing(0.5)}px`,
      },
    },
    imgSocialIcon: {
      height: '1.5rem',
    },
    gridContainerMenus: {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    typographyOverline: {
      fontWeight: theme.typography.fontWeightBold,
    },
    listMenu: {
      ...stripUl,
      '& > li': {
        margin: `${theme.spacing(1)}px 0`,
      },
      '& > li:first-of-type': {
        marginTop: 0,
      },
    },
    link: {
      color: light,
      textDecoration: 'none',
      fontSize: '0.9rem',
      '&:active, &:visited, &:focus': {
        color: light,
      },
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
);

const Footer = (): ReactElement => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            sm={4}
          >
            <div className={classes.containerLogo}>
              <Logo includeIntro />
            </div>
            <ul className={classes.listSocial}>
              {
                SOCIAL_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className={classes.link}
                      target="_blank" rel="noreferrer"
                    >
                      <img
                        className={classes.imgSocialIcon}
                        src={`/assets/images/icons/icon-${item.id}.svg`}
                        alt={`Follow us on ${item.title}`}
                      />
                    </a>
                  </li>
                ))
              }
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
          >
            <Grid
              container
              spacing={4}
              className={classes.gridContainerMenus}
            >
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Typography
                  className={classes.typographyOverline}
                  variant="overline"
                  gutterBottom
                >
                  Menu
                </Typography>
                <ul className={classes.listMenu}>
                  {
                    MENU_ITEMS.map((item) => (
                      <li key={item.title}>
                        <Link href={item.route}>
                          <a className={classes.link}>
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Typography
                  className={classes.typographyOverline}
                  variant="overline"
                >
                  Contact
                </Typography>
                <Typography gutterBottom>
                  All inquiries:
                </Typography>
                <Typography gutterBottom>
                  <a href="mailto:info@digitalwavesnl.ca" className={classes.link}>
                    info@digitalwavesnl.ca
                  </a>
                </Typography>

                <Typography
                  className={classes.typographyOverline}
                  variant="overline"
                >
                  Follow Us
                </Typography>
                <Typography gutterBottom>
                  On most platforms:
                </Typography>
                <Typography>
                  @digitalwavesnl
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
