import { ReactElement } from 'react';

import Layout from '../layout/Layout';
import ShortPage from '../layout/ShortPage';
import Footer from '../modules/footer/Footer';
import FooterCTA from '../modules/footer/FooterCTA';
import FooterSubscribe from '../modules/footer/FooterSubscribe';
import VolunteerForm from '../modules/volunteer/VolunteerForm';

const subscribe = (): ReactElement => {
  return (
    <Layout>
      <ShortPage>
        <VolunteerForm />
      </ShortPage>
      <FooterCTA noMinHeight hideVolunteer />
      <Footer />
      <FooterSubscribe />
    </Layout>
  );
};

export default subscribe;
