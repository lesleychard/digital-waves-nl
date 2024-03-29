const SITE_VERSION_PROGRAM_2023 = 'program-2023';
const SITE_VERSION_CONTEST_2021 = 'contest-2021';

const getSiteVersion = (): string | undefined => {
  return process.env.NEXT_PUBLIC_SITE_VERSION;
};

export {
  getSiteVersion,
  SITE_VERSION_PROGRAM_2023,
  SITE_VERSION_CONTEST_2021,
};
