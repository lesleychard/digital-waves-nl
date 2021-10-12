import { Action } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';

import { RootState } from '../reducers/root';

export const  SUBSCRIBE_TO_LIST_STARTED = ' SUBSCRIBE_TO_LIST_STARTED';
export const  SUBSCRIBE_TO_LIST_SUCCESS = ' SUBSCRIBE_TO_LIST_SUCCESS';
export const  SUBSCRIBE_TO_LIST_FAILURE = ' SUBSCRIBE_TO_LIST_FAILURE';

interface SubscribeToListStartedAction {
  type: typeof SUBSCRIBE_TO_LIST_STARTED;
}

interface SubscribeToListSuccessAction {
  type: typeof SUBSCRIBE_TO_LIST_SUCCESS;
  payload: {
    submission: MailchimpListSubmission,
  };
}

interface SubscribeToListFailureAction {
  type: typeof SUBSCRIBE_TO_LIST_FAILURE;
  payload: {
    error: Error,
  };
}

export type MailchimpActionTypes =
  SubscribeToListStartedAction
  | SubscribeToListSuccessAction
  | SubscribeToListFailureAction;

export type MailchimpThunkResult = ThunkAction<void, RootState, undefined, MailchimpActionTypes>;

export type MailchimpThunkDispatch = ThunkDispatch<RootState, void, Action>;

export interface MailchimpState {
  error?: Error | null;
  loading: boolean;
  submissions?: MailchimpListSubmission[] | null;
}

export type MailchimpListType = 'general' | 'sponsor' | 'participant' | 'parent';

export interface MailchimpListSubmission {
  type: MailchimpListType,
  msg: string;
  code: 'success' | 'error',
}


