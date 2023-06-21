const SITE_VERSION_HACKATHON_2023 = 'hackathon-2023';
const SITE_VERSION_SPONSOR_OUTREACH_2023 = 'sponsor-outreach-2023';

const getSiteVersion = (): string | undefined => {
  return process.env.NEXT_PUBLIC_SITE_VERSION;
};

export {
  getSiteVersion,
  SITE_VERSION_HACKATHON_2023,
  SITE_VERSION_SPONSOR_OUTREACH_2023,
};
