const SITE_VERSION_HACKATHON_2023 = "hackathon-2023";

const getSiteVersion = (): string | undefined => {
  return process.env.NEXT_PUBLIC_SITE_VERSION;
};

export { getSiteVersion, SITE_VERSION_HACKATHON_2023 };

