import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMailChimpContact, createMailChimpContact, updateMailChimpContact, mergeFields } from "../../lib/mailchimpHelpers";

const PROGRAM_TAG = 'Program 2023';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const returnData: any = { student: {}, parent: {} };
  const mergeFields = { ...req.body };

  const participantEmailStatus: mergeFields = await checkMailChimpContact(mergeFields, 'participant');

  if (participantEmailStatus.status ===  'subscribed') {
    console.log('contact is subscribed');
    const updateParticipantEmailData: mergeFields = await updateMailChimpContact(
      { ...mergeFields, ISPARTIC: 'true' },
      [PROGRAM_TAG],
      'participant'
    );
    returnData.student = updateParticipantEmailData;
  } else {
    console.log('contact is not subscribed');
    const newParticipantEmailData: mergeFields = await createMailChimpContact(
      { ...mergeFields, ISPARTIC: 'true' },
      [PROGRAM_TAG],
      'participant'
    );
    returnData.student = newParticipantEmailData;
  }

  const parentMergeFields = {
    FNAME: mergeFields.P_FNAME,
    LNAME: mergeFields.P_LNAME,
    EMAIL: mergeFields.P_EMAIL,
    PHONE: mergeFields.P_PHONE,
    PARENT: 'true',
  };

  const parentEmailStatus: mergeFields = await checkMailChimpContact(parentMergeFields, 'participant');

  if (parentEmailStatus.status ===  'subscribed') {
    console.log('contact is subscribed');
    const updateParentEmailData: mergeFields = await updateMailChimpContact(
      parentMergeFields,
      [PROGRAM_TAG],
      'participant'
    );
    returnData.parent = updateParentEmailData;
  } else {
    console.log('contact is not subscribed');
    const newParentEmailData: mergeFields = await createMailChimpContact(
      parentMergeFields,
      [PROGRAM_TAG],
      'participant'
    );
    returnData.parent = newParentEmailData;
  }

  console.log(returnData);

  res.status(200).json(returnData);
}
