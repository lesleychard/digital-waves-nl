import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DownloadIcon from '@material-ui/icons/GetApp';
import Link from 'next/link';

import SocialMeta from '../../components/SocialMeta';
import Layout from '../../layout/Layout';
import ShortPage from '../../layout/ShortPage';
import Footer from '../../modules/footer/Footer';
import FooterCTA from '../../modules/footer/FooterCTA';
import FooterSubscribe from '../../modules/footer/FooterSubscribe';
import { Typography } from '@material-ui/core';
import Button from '../../components/Button';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
      },
      '& .MuiTypography-root': {
        marginBottom: theme.spacing(3),
      },
    },
    buttonDownload: {
      marginBottom: theme.spacing(4),
    },
    link: {
      '&:active, &:visited': {
        color: theme.palette.primary.dark,
      },
    },
  })
);

const pressRoom = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <SocialMeta title="Press Room" />
      <ShortPage
        title={
          <>
            Stay up to date with
            <br />
            the <strong>latest news</strong>.
          </>
        }
      >
        <div className={classes.root}>
          <Typography variant="h1">
            Press Room
          </Typography>

          <Typography>
            Mentioning Digital Waves NL in an article, blog, or social post? Download our official logos and brand assets.
          </Typography>
          <Button
            variant="raised"
            color="primary"
            startIcon={<DownloadIcon />}
            className={classes.buttonDownload}
            component="a"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            target="_blank"
            rel="norferrer"
            href="https://drive.google.com/drive/folders/1KBN_Atnzq4FCqdfIjFLm2qLwkbzjx8Qj"
          >
            Brand Package (Google Drive)
          </Button>

          <Typography variant="h2">
            Media Releases
          </Typography>

          <Typography>
            <ul>
              <li>
                <Link href="/press-room/2023-10-26-program-launch">
                  <a className={classes.link}>
                    October 26, 2023 - Digital Waves NL Launches Impact-Driven Technology Learning Experience to Newfoundland and Labrador Youth
                  </a>
                </Link>
              </li>
            </ul>
          </Typography>
        </div>
      </ShortPage>
      <FooterCTA noMinHeight layoutThreeCols />
      <Footer />
      <FooterSubscribe />
    </Layout>
  );
};

export default pressRoom;
