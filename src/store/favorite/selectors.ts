import { Offers } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../../constants';

// eslint-disable-next-line import/prefer-default-export
export const selectFavoriteOffers = (state: State): Offers =>
  state[NameSpace.favorite].favoriteOffers;

export const selectIsFavoriteOffers = (state: State): boolean =>
  state[NameSpace.favorite].favoriteOffers.length > 0;
