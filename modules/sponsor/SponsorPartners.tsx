import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import classNames from 'classnames';

import { containerSm } from '../../styles/helpers/extend';

const CURRENT_SPONSORS = [
  {
    tierId: 'gb',
    tierName: 'Gigabyte Tier',
    tierSponsors: [
      {
        id: 'verafin',
        name: 'Verafin',
        format: 'jpg',
      },
    ],
  },
  {
    tierId: 'mb',
    tierName: 'Megabyte Tier',
    tierSponsors: [
      {
        id: 'bluedrop',
        name: 'Bluedrop Learning Networks',
        format: 'jpg',
      },
    ],
  },
  {
    tierId: 'kb',
    tierName: 'Kilobyte Tier',
    tierSponsors: [
      {
        id: 'ray',
        name: 'Ray Agency',
        format: 'png',
      },
      {
        id: 'icbts',
        name: 'I Code by the Sea Inc.',
        format: 'png',
      },
      {
        id: 'mysa',
        name: 'Mysa',
        format: 'png',
      },
    ],
  },
  {
    tierId: 'build-your-own',
    tierName: 'Build Your Own',
    tierSponsors: [
      {
        id: 'vision33',
        name: 'Vision33',
        format: 'png',
      },
      {
        id: 'chris-howse',
        name: 'Chris Howse',
        noLogo: true,
      },
    ],
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.background.paper,
    },
    container: {
      ...containerSm(theme),
      textAlign: 'center',
    },
    containerCopy: {
      marginBottom: theme.spacing(4),
      '& strong': {
        color: theme.palette.secondary.dark,
      },
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(6),
      },
    },
    typographyH1: {
      marginBottom: theme.spacing(2),
    },
    containerTier: {
      marginBottom: theme.spacing(2),
    },
    typographyTierName: {},
    imgSponsorLogo: {
      width: '12rem',
      maxWidth: `calc(100% - ${theme.spacing(2)}px)`,
      margin: theme.spacing(1),
    },
    'containerTier-gb': {
      '& $imgSponsorLogo': {
        width: '30rem',
      },
    },
    'containerTier-mb': {
      '& $imgSponsorLogo': {
        width: '20rem',
      },
    },
    'containerTier-kb': {
      '& $typographyTierName': {
        marginBottom: theme.spacing(3),
      },
    },
    'containerTier-build-your-own': {
      '& $imgSponsorLogo': {
        width: '6rem',
      },
      '& $typographyTierName': {
        marginBottom: theme.spacing(3),
      },
    },
    typographySponsor: {},
  })
);

const SponsorPartners = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerCopy}>
          <Typography variant="overline" component="h1" gutterBottom>
            2021 Sponsors
          </Typography>
          <Typography
            className={classes.typographyH1}
            variant="h1"
            component="p"
          >
            Our province is making waves.
          </Typography>
          <Typography gutterBottom>
            <strong>
              We are still accepting contributions for our 2021 Digital Waves experience!
            </strong>
          </Typography>
          <Typography>
            100% of proceeds go towards participant outreach and prizes for our 2021 contest.
            Scroll down to learn more about how your organization can help.
          </Typography>
        </div>

        {
          CURRENT_SPONSORS.map(tier => (
            <div
              className={classNames(
                classes.containerTier,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                classes[`containerTier-${tier.tierId}`],
              )}
              key={tier.tierId}
            >
              <Typography
                variant="h2"
                component="p"
                className={classes.typographyTierName}
              >
                {tier.tierName}
              </Typography>
              {
                tier.tierSponsors.map(sponsor => {
                  if (sponsor.noLogo) {
                    return (
                      <Typography className={classes.typographySponsor}>
                        {sponsor.name}
                      </Typography>
                    );
                  }
                  else {
                    return (
                      <img
                        className={classes.imgSponsorLogo}
                        src={`assets/images/sponsor/logos/${sponsor.id}.${sponsor.format}`}
                        alt={sponsor.name}
                      />
                    );
                  }
                })
              }
            </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default SponsorPartners;
