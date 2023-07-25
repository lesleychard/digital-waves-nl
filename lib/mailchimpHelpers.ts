import md5 from "md5";

const checkMailChimpContact = async (mergeFields: any): Promise<any> => {
  const checkContact = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.EMAIL
    )}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
    }
  );

  const checkContactData = await checkContact.json();
  if (checkContactData.errors) {
    console.log(`check mailchimp contact error error: ${checkContactData.errors}`);
    throw Error("Failed to check if contact exists.");
  }
  return checkContactData;
};

const createMailChimpContact = async (mergeFields: any): Promise<any> => {
  const createContact = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`,
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
      }),
    }
  );

  const createContactData = await createContact.json();

  if (createContactData.errors) {
    console.log(`checkSubscriberData error: ${JSON.stringify(createContactData.errors)}`);
    throw Error("Failed to create child.");
  }

  return createContactData;
};

const updateMailChimpContact = async (mergeFields: any): Promise<any> => {
  const updateContact = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.EMAIL)}/`, {
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
      }),
    });

    const updateContactData = await updateContact.json();

    console.log(`status: ${updateContactData.status}`);
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