import fetchJsonp from 'fetch-jsonp';
import {
  SUBSCRIBE_TO_LIST_SUCCESS,
  SUBSCRIBE_TO_LIST_STARTED,
  SUBSCRIBE_TO_LIST_FAILURE,
  MailchimpThunkResult,
  MailchimpThunkDispatch,
  MailchimpListSubmission,
  MailchimpListType,
} from '../types/mailchimp';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const subscribeToList = (data: any, type: MailchimpListType): MailchimpThunkResult => {
  return async (dispatch: MailchimpThunkDispatch) => {
    dispatch(subscribeToListStarted());

    const formData = new URLSearchParams(data as unknown as URLSearchParams).toString();
    const submitUrl = `${process.env.MAILCHIMP_SUBSCRIBE_URL}&amp;c=?&${formData}`;

    fetchJsonp(submitUrl, { jsonpCallback: 'c', jsonpCallbackFunction: '' })
      .then((response) => {
        return response.json();
      })
      .then((jsonRes) => {
        dispatch(subscribeToListSuccess({
          type,
          msg: jsonRes.msg,
          code: jsonRes.result,
        }));
      })
      .catch((e) => {
        dispatch(subscribeToListFailure(e));
      });
  };
};

const subscribeToListStarted = () => ({
  type: SUBSCRIBE_TO_LIST_STARTED,
});

const subscribeToListSuccess = (submission: MailchimpListSubmission) => {
  return {
    type: SUBSCRIBE_TO_LIST_SUCCESS,
    payload: {
      submission,
    },
  };
};

const subscribeToListFailure = (error: Error) => ({
  type: SUBSCRIBE_TO_LIST_FAILURE,
  payload: {
    error,
  },
});


