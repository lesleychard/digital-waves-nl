import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMailChimpContact, createMailChimpContact, updateMailChimpContact } from "../../lib/mailchimpHelpers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  let returnData: any = {};
  const mergeFields = { ...req.body };
  console.log(`merging fields ${JSON.stringify(mergeFields)}`)

  const sponserEmailStatus: any = await checkMailChimpContact(mergeFields);

  if (sponserEmailStatus.status ===  'subscribed') {
    console.log('contact is subscribed');
    const updateSponserEmailData: any = await updateMailChimpContact(mergeFields);
    returnData = updateSponserEmailData;
  } else {
    console.log('contact is not subscribed');
    const newSponserEmailData: any = await createMailChimpContact(mergeFields);
    returnData = newSponserEmailData;
  }

  res.status(200).json(returnData);
}
