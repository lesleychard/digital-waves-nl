import { getMailchimpSubmissions } from '../helpers/mailchimp';
import {
  SUBSCRIBE_TO_LIST_SUCCESS,
  SUBSCRIBE_TO_LIST_STARTED,
  SUBSCRIBE_TO_LIST_FAILURE,
  MailchimpActionTypes,
  MailchimpState,
} from '../types/mailchimp';

const initialState: MailchimpState = {
  error: null,
  loading: false,
  submissions: [],
};

const mailchimpReducer = (
  state = initialState,
  action: MailchimpActionTypes
): MailchimpState => {
  const prevSubmissions = state.submissions ? state.submissions : [];
  switch (action.type) {
    case SUBSCRIBE_TO_LIST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIBE_TO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        submissions: getMailchimpSubmissions(prevSubmissions, action.payload.submission),
      };
    case SUBSCRIBE_TO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default mailchimpReducer;
