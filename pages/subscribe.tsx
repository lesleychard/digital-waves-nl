import { ReactElement } from 'react';

import SocialMeta from '../components/SocialMeta';
import Layout from '../layout/Layout';
import ShortPage from '../layout/ShortPage';
import Footer from '../modules/footer/Footer';
import FooterCTA from '../modules/footer/FooterCTA';
import SubscribeForm from '../modules/subscribe/SubscribeForm';

const subscribe = (): ReactElement => {
  const title = (
    <>
      Stay <strong>in the loop</strong> about future Digital Waves experiences.
    </>
  );

  return (
    <Layout>
      <SocialMeta title="Stay Updated" />
      <ShortPage title={title}>
        <SubscribeForm />
      </ShortPage>
      <FooterCTA noMinHeight layoutThreeCols />
      <Footer />
    </Layout>
  );
};

export default subscribe;
