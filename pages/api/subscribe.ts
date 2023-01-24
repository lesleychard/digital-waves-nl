import md5 from "md5";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any): Promise<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const returnData: any = {};
  const mergeFields = { ...req.body, "CONSENT": String(req.body.CONSENT) };

  console.log(`process.env.MAILCHIMP_API_KEY: ${process.env.MAILCHIMP_API_KEY}`);
  console.log(`~~~mergeFields: ${JSON.stringify(mergeFields)}`);

  const checkSubscriber = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.EMAIL)}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
      },
    }
  );

  const checkSubscriberData = await checkSubscriber.json();

  if (checkSubscriberData.status ===  'subscribed') {
    console.log('you are subscribed');
    const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.EMAIL)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        merge_fields: {
          "PARTIC_23": "false",
        },
      }),
    });

    const updateHackathonFieldData = await updateHackathonField.json();

    res.status(200).json(updateHackathonFieldData);

  } else {
    console.log('you are not subscribed');
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
          email_address: mergeFields.EMAIL,
          merge_fields: mergeFields,
        }),
      }
    );

    const createSubscriberData = await createSubscriber.json();
    console.log('subscriber data');
    console.log(createSubscriberData);

    returnData['childEmail'] = createSubscriberData;
  }

  if (mergeFields.P_EMAIL !== "") {
    const checkParentSubscriber = await fetch(
      `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.P_EMAIL)}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
        },
      }
    );

    const checkParentSubscriberData = await checkParentSubscriber.json();

    if (checkParentSubscriberData.status ===  'subscribed') {
      console.log('you are subscribed');
      const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(mergeFields.P_EMAIL)}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `auth ${process.env.MAILCHIMP_API_KEY}-us5`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          merge_fields: {
            "PARTIC_23": "false",
          },
        }),
      });
  
      const updateHackathonFieldData = await updateHackathonField.json();
  
      res.status(200).json(updateHackathonFieldData);
  
    } else {
      console.log('you are not subscribed');
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
            email_address: mergeFields.P_EMAIL,
            merge_fields: { ...mergeFields, ...{ EMAIL: mergeFields.P_EMAIL, "P_FNAME": undefined, "P_LNAME": undefined } },
          }),
        }
      );
  
      const createSubscriberData = await createSubscriber.json();
      console.log('subscriber data');
      console.log(createSubscriberData);
      returnData['parentEmail'] = createSubscriberData;
    }
  }

  res.status(200).json(returnData);
}
