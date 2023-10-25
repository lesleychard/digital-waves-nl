import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import classNames from 'classnames';

import { containerSm } from '../../../styles/helpers/extend';
import {
  getSiteVersion,
  SITE_VERSION_PROGRAM_2023,
  SITE_VERSION_CONTEST_2021,
} from '../../../lib/getSiteVersion';
import {
  SPONSORS_2021,
  SPONSORS_2023,
} from './constants';
import {
  SponsorTiers,
} from './types';

const siteVersion = getSiteVersion();

const getSponsorYearAndPartners = (): [string | null, SponsorTiers] => {
  switch (siteVersion) {
    case SITE_VERSION_PROGRAM_2023:
      return ['2023', SPONSORS_2023];
    case SITE_VERSION_CONTEST_2021:
      return ['2021', SPONSORS_2021];
    default:
      return [null, []];
  }
};
const [sponsorYear, sponsorYearPartners] = getSponsorYearAndPartners();

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
    typographyTierName: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    imgSponsorLogo: {
      width: '12rem',
      maxWidth: `calc(100% - ${theme.spacing(2)}px)`,
      margin: theme.spacing(2),
    },
    imgSponsorLogoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: "wrap",
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
      '& $imgSponsorLogo': {
        width: '10rem',
      },
    },
    'containerTier-build-your-own': {
      '& $imgSponsorLogo': {
        width: '6rem',
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
            {sponsorYear ? `${sponsorYear} ` : ''}Sponsors
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
              We are still accepting contributions for our {sponsorYear ? `${sponsorYear} ` : ''}Digital Waves experience!
            </strong>
          </Typography>
          <Typography>
            100% of proceeds go towards program development, participant outreach, and prizes for
            our {sponsorYear ? `${sponsorYear} ` : ''}program. Scroll down to learn more about
            how your organization can help.
          </Typography>
        </div>

        {
          sponsorYearPartners?.map(tier => (
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
              <div className={classes.imgSponsorLogoContainer}>
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
            </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default SponsorPartners;
