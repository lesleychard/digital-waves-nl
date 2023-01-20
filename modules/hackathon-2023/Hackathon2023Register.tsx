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

  const [mergeField, setMergeField] = useState({ FNAME: "" });
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberHash, setSubscriberHash] = useState("");
  const [userExists, setUserExists] = useState(false);

  const checkSubscriber = async (email: any) => {
    const response = await fetch(`https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/${md5(email)}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status === 200) {
      setUserExists(true);
      setSubscriberHash(md5(email));
    }
  };

  const createSubscriber = async (data: any) => {
    const response = await fetch(`https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email_address: data.email,
        merge_fields: data.mergeField,
        status: "subscribed"
      }),
    });
    return response.json();
  };

  const updateMergeField = async (data) => {
    const response = await fetch(`https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/${data.subscriber_hash}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        "merge_fields": data.mergeField
      }),
    });
    return response.json();
  };

  const createSubMutation = useMutation({
    mutationFn: (data) => {
      return createSubscriber(data);
    },
  });
  const updateMergeFieldMutation = useMutation({
    mutationFn: (data) => {
      return updateMergeField(data);
    },
  });

  const handleCheck = (event) => {
    event.preventDefault();
    checkSubscriber(subscriberEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userExists) {
      createSubMutation.mutate({ email: subscriberEmail, mergeField });
    } else {
      updateMergeFieldMutation.mutate({ subscriber_hash: subscriberHash, mergeField });
    }
  };

  return (
    // <div className={classes.root}>
    //   <div className={classes.container}>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="email">
    //         Email:
    //         <input
    //           type="email"
    //           id="email"
    //           value={subscriberEmail}
    //           onChange={(event) => {
    //             setSubscriberEmail(event.target.value);
    //           }}
    //         />
    //       </label>
    //       <button type="submit" onClick={handleCheck}>Check</button>
    //       {userExists ?
    //         <>
    //           <label htmlFor="FNAME">
    //             First Name:
    //             <input
    //               type="text"
    //               id="FNAME"
    //               value={mergeField.FNAME}
    //               onChange={(event) => {
    //                 setMergeField({ ...mergeField, FNAME: event.target.value });
    //               }}
    //             />
    //           </label>
    //           <button type="submit" disabled={updateMergeFieldMutation.status === "loading"}>
    //             {updateMergeFieldMutation.status === "loading" ? "Loading..." : "Update"}
    //           </button>
    //           {updateMergeFieldMutation.error && <p style={{ color: "red" }}>{updateMergeFieldMutation.error}</p>}
    //         </>
    //         :
    //         <button type="submit" disabled={createSubMutation.status === "loading"}>
    //           {createSubMutation.status === "loading" ? "Loading..." : "Create"}
    //         </button>
    //       }
    //     </form>
    //   </div>
    // </div>


    <RegistrationForm
      title={"ABC"}
      consentLabel={CONSENT_LABEL}
      parentMergeTag={PARENT_MERGE_TAG}
      participantMergeTag={PARTICIPANT_MERGE_TAG}
    />
  );
};

export default Hackathon2023Register;

