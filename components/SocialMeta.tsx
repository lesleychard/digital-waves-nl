import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
};

const SocialMeta = ({ title }: Props): ReactElement => {
  const baseUri = process.browser ? window.location.origin : '';
  const pageTitle = title ? `Digital Waves NL | ${title}` : 'Digital Waves NL';
  return (
    <Helmet>
      <title>
        {pageTitle}
      </title>
      <meta name="description" property="description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
      <meta name="og:locale" property="og:locale" content="en_US" />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta name="og:description" property="og:description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
      <meta name="og:url" property="og:url" content={baseUri} />
      <meta name="og:site_name" property="og:site_name" content="Digital Waves NL" />
      <meta name="og:image" property="og:image" content={`${baseUri}/assets/images/social/social-facebook.png`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DigitalWavesNL" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:creator" property="twitter:creator" content="@DigitalWavesNL" />
      <meta name="twitter:image" content={`${baseUri}/assets/images/social/social-twitter.png`} />
      <meta name="twitter:url" content={baseUri} />
      <meta name="twitter:description" content="We are a grassroots organization dedicated to closing the gender gap in tech, starting with our home province of NL." />
    </Helmet>
  );
};

export default SocialMeta;
