import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
};

const SocialMeta = ({ title }: Props): ReactElement => {
  // const baseUri = process.browser ? window.location.origin : '';
  const pageTitle = title ? `Digital Waves NL | ${title}` : 'Digital Waves NL';
  return (
    <Helmet>
      <title>
        {pageTitle}
      </title>
    </Helmet>
  );
};

export default SocialMeta;
