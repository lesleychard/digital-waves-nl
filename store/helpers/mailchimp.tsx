import { MailchimpListSubmission } from '../types/mailchimp';

export const getMailchimpSubmissions = (
  prevSubmissions: MailchimpListSubmission[],
  newSubmission: MailchimpListSubmission,
): MailchimpListSubmission[] => {
  const newSubmissionList = prevSubmissions;
  const existingSubmissionIndex = prevSubmissions.findIndex(
    (sub => sub.type === newSubmission.type)
  );

  if (existingSubmissionIndex >= 0) {
    newSubmissionList[existingSubmissionIndex] = newSubmission;
  }
  else {
    newSubmissionList.push(newSubmission);
  }

  return newSubmissionList;
};
