import { ReactElement } from 'react';
import RegistrationForm from '../../components/RegistrationForm';

const CONSENT_LABEL = (
  'I give my consent to Digital Waves to contact the above student '
  + 'with information about the 2023 Hackathon.'
);

const PARENT_MERGE_TAG = 'PARENT_23';
const PARTICIPANT_MERGE_TAG = 'PARTIC_23';

const Hackathon2023Register = (): ReactElement => {
  const title = (
    <>
      <span>
        Pre-Register
      </span>
      &nbsp;for the
      <br />
      2023 Hackathon
    </>
  );

  return (
    <RegistrationForm
      title={title}
      consentLabel={CONSENT_LABEL}
      parentMergeTag={PARENT_MERGE_TAG}
      participantMergeTag={PARTICIPANT_MERGE_TAG}
    />
  );
};

export default Hackathon2023Register;

