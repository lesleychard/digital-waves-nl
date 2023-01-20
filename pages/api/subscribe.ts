import md5 from "md5";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function handler(_req, res): void {
  const checkSubscriber = await fetch(
    `https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/${md5("freddiepike709@gmail.com")}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
      },
    }
  );

  const checkSubscriberData = await checkSubscriber.json();

  if (checkSubscriberData.status ===  'subscribed') {
    console.log(checkSubscriberData)
    console.log(`email: ${checkSubscriberData.email}`)
    const updateHackathonField = await fetch(`https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/${md5(checkSubscriberData.email_address)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
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
    const createSubscriber = await fetch(
      `https://us5.api.mailchimp.com/3.0/lists/936ef2fe33/members/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "auth 481a9c6dba5d0a13d1385e4ad95f5f43-us5",
        },
        body: JSON.stringify({
          status: "subscribed",
          email_address: "freddiepike709@gmail.com",
          merge_fields: {
            "PARTIC_23": "true",
          },
        }),
      }
    );

    const createSubscriberData = await createSubscriber.json();

    res.status(200).json(createSubscriberData);
  }
}
