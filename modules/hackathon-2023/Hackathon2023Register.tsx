import { ReactElement, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { makeStyles } from '@material-ui/core/styles';
import { container } from '../../styles/helpers/extend';
import md5 from "md5";
import RegistrationForm from '../../components/RegistrationForm';

const CONSENT_LABEL = (
  'I give my consent to Digital Waves to contact the above student '
  + 'with information about the 2023 Hackathon.'
);

const PARENT_MERGE_TAG = 'PARENT_23';
const PARTICIPANT_MERGE_TAG = 'PARTIC_23';

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

const Hackathon2023Register = (): ReactElement => {
  const classes = useStyles();
  
  // const updateMergeFieldMutation = useMutation({
  //   mutationFn: (data) => {
  //     return updateMergeField(data);
  //   },
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!userExists) {
  //     createSubMutation.mutate({ email: subscriberEmail, mergeField });
  //   } else {
  //     updateMergeFieldMutation.mutate({ subscriber_hash: subscriberHash, mergeField });
  //   }
  // };

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
              onChange={(event) => {
                setSubscriberEmail(event.target.value);
              }}
            />
          </label>
          <button type="submit" onClick={handleCheck}>Check</button>
          {userExists ?
            <>
              <label htmlFor="FNAME">
                First Name:
                <input
                  type="text"
                  id="FNAME"
                  value={mergeField.FNAME}
                  onChange={(event) => {
                    setMergeField({ ...mergeField, FNAME: event.target.value });
                  }}
                />
              </label>
              <button type="submit" disabled={updateMergeFieldMutation.status === "loading"}>
                {updateMergeFieldMutation.status === "loading" ? "Loading..." : "Update"}
              </button>
              {updateMergeFieldMutation.error && <p style={{ color: "red" }}>{updateMergeFieldMutation.error}</p>}
            </>
            :
            <button type="submit" disabled={createSubMutation.status === "loading"}>
              {createSubMutation.status === "loading" ? "Loading..." : "Create"}
            </button>
          }
        </form>
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

