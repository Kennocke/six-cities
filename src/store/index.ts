import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../services/api';
import { rootReducer } from './root-reducer';
import { requireAuthorization } from './action';
import { AuthorizationStatus } from '../constants';
import { redirect } from './middlewares/redirect';

export const api = createAPI(() =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});
