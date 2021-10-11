import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from 'redux';

import {
  MailchimpState,
} from '../types';
import mailchimp from './mailchimp';

const combinedReducer = combineReducers({
  mailchimp,
});

export type RootState = {
  mailchimp: MailchimpState,
};

// State has explicit type any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const root = (state: any, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  else {
    return combinedReducer(state, action);
  }
};

export default root;
