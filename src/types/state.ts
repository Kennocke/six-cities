// eslint-disable-next-line import/no-cycle
import { RootState } from '../store/root-reducer';
import { Offers } from './offer';
import { Comments } from './comment';
import { SortOptions, Cities, AuthorizationStatus } from '../constants';

export type MainState = {
  offers: Offers;
  isDataLoaded: boolean;
  activeCity: Cities;
  activeSort: SortOptions;
  activeOfferId: number | null;
  authorizationStatus: AuthorizationStatus;
  isAuthStatusLoaded: boolean;
};

export type FavoriteState = {
  favoriteOffers: Offers;
};

export type RoomState = {
  comments: Comments;
  nearbyOffers: Offers;
};

export type State = RootState;
