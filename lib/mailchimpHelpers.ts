import md5 from "md5";

const checkMailChimpContact = async (mergeFields: any): Promise<any> => {
  console.log(`checkMailChimpContact mergeFields: ${JSON.stringify(mergeFields)}`)
  const checkSubscriber = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.email
    )}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
    }
  );

  const checkSubscriberData = await checkSubscriber.json();
  if (checkSubscriberData.errors) {
    console.log(`checkSubscriberData error: ${checkSubscriberData.errors}`);
    throw Error("Failed to check if sponsor exists.");
  }
  return checkSubscriberData;
};

const createMailChimpContact = async (mergeFields: any): Promise<any> => {
  const createSubscriber = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
      body: JSON.stringify({
        status: "subscribed",
        email_address: mergeFields.email,
        merge_fields: mergeFields,
      }),
    }
  );

  const createSubscriberData = await createSubscriber.json();

  if (createSubscriberData.errors) {
    console.log(`checkSubscriberData error: ${JSON.stringify(createSubscriberData.errors)}`);
    throw Error("Failed to create child.");
  }

  return createSubscriberData;
};

const updateMailChimpContact = async (mergeFields: any): Promise<any> => {
  const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.email)}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        status: "subscribed",
        email_address: mergeFields.email,
        merge_fields: mergeFields,
      }),
    });

    const updateHackathonFieldData = await updateHackathonField.json();

    console.log(`status: ${updateHackathonField.status}`);
    if (updateHackathonFieldData.errors) {
      console.log(`checkSubscriberData error: ${updateHackathonFieldData.errors}`);
      throw Error("Failed to update child.");
    }

    return updateHackathonFieldData;
};

export {
  checkMailChimpContact,
  createMailChimpContact,
  updateMailChimpContact,
};