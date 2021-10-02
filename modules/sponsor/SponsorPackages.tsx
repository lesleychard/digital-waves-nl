import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { containerSm } from '../../styles/helpers/extend';
import { light } from '../../styles/theme/_palette';
import { fontFamilyBody } from '../../styles/theme/_typography';

const SPONSOR_PACKAGES = [
  {
    id: 'tb',
    tier: 'Terabyte',
    cost: '$7500+',
    perks: [
      'Become an official Digital Waves 2021 partner.',
      'Two (2) commercial spots during our remote workshops.',
      'Five (5) dedicated social media shout outs from WRDC and/or Digital Waves accounts.',
      'Your large, prominent logo on all digital and print participant deliverables, including the official contest package, website, and all experience slide decks. Your logo will also be featured in all email updates.',
    ],
  },
  {
    id: 'gb',
    tier: 'Gigabyte',
    cost: '$5000',
    perks: [
      'One (1) commercial spot during our remote workshops.',
      'Three (3) dedicated social media shout outs from WRDC and/or Digital Waves accounts.',
      'Your medium-sized logo on all digital and print participant deliverables, including the official contest package, website, and all experience slide decks.',
    ],
  },
  {
    id: 'mb',
    tier: 'Megabyte',
    cost: '$2500',
    perks: [
      'One (1) dedicated social media shout out from WRDC and/or Digital Waves accounts.',
      'Your small-sized logo on all digital and print participant deliverables, including the official contest package, website, and all experience slide decks.',
    ],
  },
  {
    id: 'kb',
    tier: 'Kilobyte',
    cost: '$1000',
    perks: [
      'One (1) social media shout out from WRDC and/or Digital Waves accounts.',
      'Your small-sized logo on the Digital Waves website.',
    ],
  },
  {
    id: 'custom',
    tier: 'Build Your Own',
    perks: [
      'We also accept monetary donations of any size, company swag, and any cool tech we can give away to our well deserving participants.',
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
          Sponsorship Packages
        </Typography>
        <Typography
          variant="h1"
          component="p"
          className={classes.typographyHeading}
        >
          Every byte helps.
        </Typography>

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
