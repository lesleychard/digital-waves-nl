type Sponsor = {
  id: string
  name: string
  format?: 'jpeg' | 'png'
  noLogo?: boolean
};

type SponsorTier = {
  tierId: 'gb' | 'mb' | 'kb' | 'build-your-own'
  tierName: 'Gigabyte Tier' | 'Megabyte Tier' | 'Kilobyte Tier' | 'Build Your Own'
  tierSponsors: Array<Sponsor>
};

export type SponsorTiers = Array<SponsorTier>;
