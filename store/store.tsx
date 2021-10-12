import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import root, { RootState } from './reducers/root';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  process.browser && process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const makeStore: MakeStore<any> =
  () => createStore(root, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<any>(makeStore, { debug: true });
