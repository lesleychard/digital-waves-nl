import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import { fontFamilyBody } from '../../styles/theme/_typography';
import DownloadIcon from '@material-ui/icons/GetApp';
import Button from '../../components/Button';

const SPONSOR_PACKAGES = [
  {
    id: 'tb',
    tier: 'Terabyte',
    cost: '$5000+',
    perks: [
      'Become an official Digital Waves 2023 partner.',
      'Two (2) commercial spots during remote workshops.',
      'Three (3) dedicated social media shoutouts from Digital Waves, STEMforGIRLS, and/or WRDC accounts as a partner.',
      'Logo displayed as a partner on: DigitalWavesNL.ca, dedicated slides during opening and closing ceremonies, official email updates, opening slides of all workshops.',
    ],
  },
  {
    id: 'gb',
    tier: 'Gigabyte',
    cost: '$2500',
    perks: [
      'One (1) commercial spot during remote workshops.',
      'Dedicated social media shoutouts from WRDC and/or Digital Waves accounts.',
      'Included in two (2) Gigabyte Tier social media shoutouts from WRDC and/or Digital Waves accounts.',
      'Logo (medium size) displayed on: DigitalWavesNL.ca, included in slides during all workshops, plus opening and closing ceremonies.',
    ],
  },
  {
    id: 'mb',
    tier: 'Megabyte',
    cost: '$1000',
    perks: [
      'Included in two (2) Megabyte Tier social media shoutouts from WRDC and/or Digital Waves accounts.',
      'Logo (small size) displayed on: DigitalWavesNL.ca, included in slides during all workshops, plus opening and closing ceremonies.',
    ],
  },
  {
    id: 'kb',
    tier: 'Kilobyte',
    cost: '$500',
    perks: [
      'Included in Kilobyte Tier social media shout out from WRDC and/or Digital Waves accounts.',
      'Logo (small size) displayed on: DigitalWavesNL.ca, included in slides during all workshops, plus opening and closing ceremonies.',
    ],
  },
  {
    id: 'custom',
    tier: 'Build Your Own',
    perks: [
      'We also accept monetary donations of any size, company swag, and any cool tech we can give away to our well deserving participants.',
      'Benefits for Build Your Own Tier vary: may include logo on DigitalWavesNL.ca, or logo on shared social post on Digital Waves accounts.',
    ],
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.text.primary,
      color: light,
    },
    container: {
      ...containerSm(theme),
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
      },
    },
    typographyOverline: {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    typographyHeading: {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(8),
        fontSize: '3rem',
      },
    },
    containerDownload: {
      position: 'relative',
      zIndex: 1,
      marginBottom: theme.spacing(8),
    },
    typographyDownload: {
      marginBottom: theme.spacing(4),
    },
    gridContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      textAlign: 'left',
    },
    gridItemIcon: {
      textAlign: 'center',
    },
    containerIcon: {
      textAlign: 'center',
      background: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(3),
      display: 'inline-block',
    },
    imgIcon: {
      width: '3rem',
    },
    typographyTier: {
      fontSize: '2rem',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    'typographyTier-tb': {
      color: theme.palette.highlight.light,
    },
    'typographyTier-gb': {
      color: theme.palette.primary.light,
    },
    'typographyTier-mb': {
      color: theme.palette.lowlight.light,
    },
    'typographyTier-kb': {
      color: theme.palette.secondary.light,
    },
    typographyPrice: {
      fontSize: '1.5rem',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    listPerks: {
      fontFamily: fontFamilyBody,
      fontSize: '1.1em',
    },
  })
);

const SponsorPackages = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}  id="sponsor-packages">
      <div className={classes.container}>
        <Typography
          variant="overline"
          component="h1"
          className={classes.typographyOverline}
        >
          Sponsorship Options
        </Typography>
        <Typography
          variant="h1"
          component="p"
          className={classes.typographyHeading}
        >
          Every byte helps.
        </Typography>
        <div className={classes.containerDownload}>
          <Typography className={classes.typographyDownload}>
            Our Sponsor Information Package contains everything you (or your organization)
            may need to know about becoming a Digital Waves NL 2023 sponsor, including a
            sneak-peek of our upcoming program plans, fundraising goals, and an itemized
            budget of projected expenses.
          </Typography>
          <Button
            component="a"
            variant="raised"
            color="primary"
            href="assets/documents/Digital-Waves-Sponsorship-Package-2023.pdf"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsor Information Package (PDF)
            <DownloadIcon />
          </Button>
        </div>
        {
          SPONSOR_PACKAGES.map(pkg => (
            <Grid
              key={pkg.id}
              container
              className={classes.gridContainer}
              spacing={4}
            >
              {
                pkg.id !== 'custom'
                  ? (
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      md={2}
                      className={classes.gridItemIcon}
                    >
                      <div className={classes.containerIcon}>
                        <img
                          src={`assets/images/icons/icon-${pkg.id}.svg`}
                          alt={`${pkg.tier} memory icon`}
                          className={classes.imgIcon}
                        />
                      </div>
                    </Grid>
                  )
                  : null
              }
              <Grid item xs={12} sm={9} md={10}>
                <Typography
                  variant="h2"
                  className={classNames(
                    classes.typographyTier,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    classes[`typographyTier-${pkg.id}`],
                  )}
                >
                  {
                    pkg.id === 'custom'
                      ? pkg.tier
                      : `${pkg.tier} Tier`
                  }
                </Typography>
                {
                  pkg.id !== 'custom'
                    ? (
                      <Typography variant="subtitle1" className={classes.typographyPrice}>
                        {pkg.cost}
                      </Typography>
                    )
                    : null
                }
                <ul className={classes.listPerks}>
                  {
                    pkg.perks.map((perk, index) => (
                      <li key={index}>
                        {perk}
                      </li>
                    ))
                  }
                </ul>
              </Grid>
            </Grid>
          ))
        }
      </div>
    </div>
  );
};

export default SponsorPackages;
