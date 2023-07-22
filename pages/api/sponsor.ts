import type { NextApiRequest, NextApiResponse } from 'next';
import md5 from "md5";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const returnData: any = {};
  const mergeFields = { ...req.body };
  console.log(`mergeFields: ${JSON.stringify(mergeFields.FNAME)}`);

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

  if (checkSubscriberData.status ===  'subscribed') {
    console.log('sponsor is subscribed');
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

    returnData['childData'] = updateHackathonFieldData;
  } else {
    console.log('sponsor is not subscribed');
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
      // Look at inconsistencies for subscribe.ts.
      console.log(`checkSubscriberData error: ${JSON.stringify(createSubscriberData.errors)}`);
      throw Error("Failed to create child.");
    }

    console.log('Child Data');
    console.log(createSubscriberData);
    returnData['childData'] = createSubscriberData;
  }

  res.status(200).json(returnData);
}
