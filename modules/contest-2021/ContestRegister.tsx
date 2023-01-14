import { ReactElement } from 'react';
import RegistrationForm from '../../components/RegistrationForm';

const CONSENT_LABEL = (
  'I give my consent to Digital Waves to contact the above student '
  + 'with information about the 2021 Experience.'
);
const PARTICIPANT_MERGE_TAG = 'ISPARTIC';

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
    <RegistrationForm
      title={title}
      consentLabel={CONSENT_LABEL}
      participantMergeTag={PARTICIPANT_MERGE_TAG}
    />
  );
};

export default ContestRegister2021;
