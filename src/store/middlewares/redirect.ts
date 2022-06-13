import { Middleware } from 'redux';
import browserHistory from '../../browser-history';
import { State } from '../../types/state';
import { ActionType } from '../../types/actions';

// eslint-disable-next-line import/prefer-default-export
export const redirect: Middleware<unknown, State> =
  () => (next) => (action) => {
    if (action.type === ActionType.RedirectToRoute) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
