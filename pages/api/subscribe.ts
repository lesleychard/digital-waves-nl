import md5 from "md5";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any): Promise<any> {
  const { email, parentEmail } = req.body;
  console.log(`email: ${email}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const returnData: any = {};
  console.log(`process.env.MAILCHIMP_API_KEY: ${process.env.MAILCHIMP_API_KEY}`);

  const checkSubscriber = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(email)}`,
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
    const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(email)}`, {
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
          email_address: email,
          merge_fields: {
            "FNAME": "Freddie",
            "LNAME": "Pike",
            "PARTIC_23": "true",
          },
        }),
      }
    );

    const createSubscriberData = await createSubscriber.json();
    console.log('subscriber data');
    console.log(createSubscriberData);

    returnData['childEmail'] = createSubscriberData;
  }

  if (parentEmail !== "") {
    const checkParentSubscriber = await fetch(
      `https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(parentEmail)}`,
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
      const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(parentEmail)}`, {
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
            email_address: parentEmail,
            merge_fields: {
              "FNAME": "parent Freddie",
              "LNAME": "parent Pike",
              "PARTIC_23": "true",
            },
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
