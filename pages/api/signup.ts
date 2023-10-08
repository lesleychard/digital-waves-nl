import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMailChimpContact, createMailChimpContact, updateMailChimpContact, mergeFields } from "../../lib/mailchimpHelpers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  let returnData: mergeFields;
  const mergeFields = { ...req.body };

  const sponserEmailStatus: mergeFields = await checkMailChimpContact(mergeFields);

  if (sponserEmailStatus.status ===  'subscribed') {
    console.log('contact is subscribed');
    const updateSponserEmailData: mergeFields = await updateMailChimpContact(mergeFields);
    returnData = updateSponserEmailData;
  } else {
    console.log('contact is not subscribed');
    const newSponserEmailData: mergeFields = await createMailChimpContact(mergeFields);
    returnData = newSponserEmailData;
  }

  res.status(200).json(returnData);
}
