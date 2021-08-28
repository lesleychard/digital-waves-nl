import { ReactElement } from 'react';

import Layout from '../layout/Layout';
import ShortPage from '../layout/ShortPage';
import Footer from '../modules/footer/Footer';
import FooterCTA from '../modules/footer/FooterCTA';
import SubscribeForm from '../modules/subscribe/SubscribeForm';

const subscribe = (): ReactElement => {
  const title = (
    <>
      Stay <strong>in the loop</strong> for the 2021 contest experience.
    </>
  );

  return (
    <Layout>
      <ShortPage title={title}>
        <SubscribeForm />
      </ShortPage>
      <FooterCTA noMinHeight />
      <Footer />
    </Layout>
  );
};

export default subscribe;
