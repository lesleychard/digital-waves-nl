import { ReactElement } from 'react';
import RegistrationForm from '../../components/RegistrationForm';

const ContestRegister2021 = (): ReactElement => {
  const title = (
    <>
      <span>
        Register
      </span>
      &nbsp;for
      <br />
      Digital Waves 2021
    </>
  );

  return (
    <RegistrationForm />
  );
};

export default ContestRegister2021;
