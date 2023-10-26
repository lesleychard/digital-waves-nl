import { makeStyles } from '@material-ui/core/styles';
import { ReactElement, ReactNode } from 'react';
import { Link, Typography } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardBackspace';

import SocialMeta from '../../components/SocialMeta';
import Layout from '../../layout/Layout';
import Footer from '../footer/Footer';
import FooterSubscribe from '../footer/FooterSubscribe';
import { container } from '../../styles/helpers/extend';
import Button from '../../components/Button';

type Props = {
  heroImageUrl?: string,
  title: string,
  subtitle: string,
  body: ReactNode,
};

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    hero: {
      background: 'url(../assets/images/brand/section-bg-teal.jpg) no-repeat center center',
      backgroundSize: 'cover',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
    },
    heroContainer: {
      ...container(theme),
      [theme.breakpoints.up('sm')]: {
        maxWidth: '50rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '8rem 5vw 10vw',
      },
    },
    buttonBack: {
      marginBottom: theme.spacing(3),
    },
    body: {
      background: theme.palette.background.paper,
      '& .MuiTypography-root': {
        marginBottom: theme.spacing(3),
      },
      '& img': {
        maxWidth: '100%',
      },
    },
    bodyContainer: {
      ...container(theme),
      [theme.breakpoints.up('sm')]: {
        maxWidth: '68rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '5vw',
      },
      '& a, & a:active, & a:visited': {
        color: theme.palette.primary.dark,
      },
    },
    typographyTitle: {
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        lineHeight: 1.3,
      },
    },
    typographySubtitle: {
      fontSize: '1.25rem',
      marginTop: theme.spacing(3),
      fontStyle: 'italic',
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        lineHeight: 1.5,
        marginTop: theme.spacing(2),
      },
    },
  })
);

const MediaRelease = (props: Props): ReactElement => {
  const {
    title,
    subtitle,
    body,
  } = props;
  const classes = useStyles();

  return (
    <Layout>
      <SocialMeta title={title} />
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.heroContainer}>
            <Link href="/press-room">
              <Button
                component="a"
                startIcon={<BackIcon />}
                className={classes.buttonBack}
              >
                Back to Press Room
              </Button>
            </Link>
            <Typography variant="h1" className={classes.typographyTitle}>
              {title}
            </Typography>
            <Typography variant="subtitle1" className={classes.typographySubtitle}>
              {subtitle}
            </Typography>
          </div>
        </div>

        <div className={classes.body}>
          <div className={classes.bodyContainer}>
            {body}

            <Typography variant="h2">
              About Digital Waves
            </Typography>
            <Typography>
              <a href="https://digitalwavesnl.ca" target="_blank" rel="noreferrer">Digital Waves NL</a> inspires young women and
              gender-diverse youth to consider a future career in the technology sector by 
              learning digital skills and contributing to impact-driven projects. While the technology sector is growing in NL,
              diverse representation within technical and leadership roles is static or declining. Digital Waves NL, a volunteer-led
              division of <a href="https://stemforgirls.ca/" target="_blank" rel="noreferrer">STEMforGIRLS</a>,
              develops digital learning experiences tailored to NL youth from populations underrepresented in today&rsquo;s
              technology sector. By showing young people that they can harness technology to create a better world and allowing them
              to meet local professionals they can identify with, the organization believes that more diverse young people will
              consider a future in a technology role.
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
      <FooterSubscribe />
    </Layout>
  );
};

export default MediaRelease;
