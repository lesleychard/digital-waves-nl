import { ReactElement, useState, SyntheticEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { makeStyles } from '@material-ui/core/styles';
import { container } from '../../styles/helpers/extend';
// import md5 from "md5";
// import RegistrationForm from '../../components/RegistrationForm';

// const CONSENT_LABEL = (
//   'I give my consent to Digital Waves to contact the above student '
//   + 'with information about the 2023 Hackathon.'
// );

// const PARENT_MERGE_TAG = 'PARENT_23';
// const PARTICIPANT_MERGE_TAG = 'PARTIC_23';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      background: theme.palette.background.paper,
    },
    container: {
      ...container(theme),
      [theme.breakpoints.up('md')]: {
        margin: 0,
        padding: '10vw 20vw 10vw 15vw',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '20vw',
        paddingRight: '25vw',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '30vw',
      },
    },
  })
);

type MutationTypes = {
  email?: string;
  parentEmail?: string;
};

const Hackathon2023Register = (): ReactElement => {
  const classes = useStyles();

  const [subscriberEmail, setSubscriberEmail] = useState<string | undefined>();
  const [subscriberParentEmail, setSubscriberParentEmail] = useState<string | undefined>();

  const mutation = useMutation({
    mutationFn: (newFormData: MutationTypes) => {
      return fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      });
    },
  });

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    mutation.mutate({ email: subscriberEmail, parentEmail: subscriberParentEmail });
    console.log('submit');
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={subscriberEmail}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                const element = event.currentTarget as HTMLInputElement;
                setSubscriberEmail(element.value);
              }}
            />
          </label>
          <label htmlFor="parent_email">
            Parent Email:
            <input
              type="parent_email"
              id="parent_email"
              value={subscriberParentEmail}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                const element = event.currentTarget as HTMLInputElement;
                setSubscriberParentEmail(element.value);
              }}
            />
          </label>
          <button type="submit">
            Submit
          </button>
        </form>
        {mutation.isLoading && "loading"}
        {mutation.error && mutation.error}
        {mutation.data && JSON.stringify(mutation.data)}
        {mutation.status && mutation.status}
      </div>
    </div>


  // <RegistrationForm
  //   title={"ABC"}
  //   consentLabel={CONSENT_LABEL}
  //   parentMergeTag={PARENT_MERGE_TAG}
  //   participantMergeTag={PARTICIPANT_MERGE_TAG}
  // />
  );
};

export default Hackathon2023Register;

