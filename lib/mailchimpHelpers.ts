import md5 from "md5";

export type mailchimpList = 'general' | 'participant';

const getListId = (list: mailchimpList | undefined) => {
  return list === 'participant'
    ? process.env.MAILCHIMP_PARTICIPANT_LIST_ID
    : process.env.MAILCHIMP_LIST_ID;
};

export type mergeFields = {
  EMAIL: string,
  FNAME: string,
  LNAME: string, 
  JOB?: string
  COMPANY?: string,
  ISNL?: string,
  SPONSOR?: string,
  ISPARTIC?: string,
  CITY?: string,
  SCHOOL?: string,
  GRADE?: string,
  TECHACCESS?: string,
  P_FNAME?: string,
  P_LNAME?: string,
  CONSENT?: string,
  P_EMAIL?: string,
  REF_OTHER?: string,
  PARENT?: string,
  DOB?: string,
  PARTIC_23?: string,
  PARENT_23?: string,
  REFERRER?: string,
  TIER?: string,
  VOLUNTEER?: string,
  SUBSCRIBER?: string,
  PRONOUNS?: string,
  INDIGENOUS?: string,
  IMMIGRANT?: string,
  RACIALIZED?: string,
  DISABILITY?: string,
  SUPPORTS?: string,
  RULES?: string,
  P_PHONE?: string,
  PHONE?: string,
  status?: string,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkMailChimpContact = async (mergeFields: mergeFields, list?: mailchimpList | undefined): Promise<any> => {
  const listId = getListId(list);

  const checkContact = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${listId}/members/${md5(mergeFields.EMAIL)}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
    }
  );

  const checkContactData = await checkContact.json();
  if (checkContactData.errors) {
    console.log(`Error when checking if mailchimp contact exists: ${checkContactData.errors}`);
    throw Error("Failed to check if contact exists.");
  }
  return checkContactData;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createMailChimpContact = async (mergeFields: mergeFields, tags?: string[], list?: mailchimpList | undefined): Promise<any> => {
  const listId = getListId(list);

  const createContact = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${listId}/members/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
      body: JSON.stringify({
        status: "subscribed",
        email_address: mergeFields.EMAIL,
        merge_fields: mergeFields,
        tags: tags,
      }),
    }
  );

  const createContactData = await createContact.json();
  if (createContactData.errors) {
    console.log(`Error when creating new mailchimp contact: ${JSON.stringify(createContactData.errors)}`);
    throw Error("Failed to create child.");
  }

  return createContactData;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateMailChimpContact = async (mergeFields: mergeFields, tags?: string[], list?: mailchimpList | undefined): Promise<any> => {
  const listId = getListId(list);

  const updateContact = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${listId}/members/${md5(mergeFields.EMAIL)}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      status: "subscribed",
      email_address: mergeFields.EMAIL,
      merge_fields: mergeFields,
      tags: tags,
    }),
  });

  const updateContactData = await updateContact.json();
  if (updateContactData.errors) {
    console.log(`checkSubscriberData error: ${updateContactData.errors}`);
    throw Error("Failed to update child.");
  }

  return updateContactData;
};

export {
  checkMailChimpContact,
  createMailChimpContact,
  updateMailChimpContact,
};
