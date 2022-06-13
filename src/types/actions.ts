import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Offers, Offer } from './offer';
import { Comments, CommentPost } from './comment';
import { SortOptions, Cities, AuthorizationStatus } from '../constants';
import { State } from './state';

export enum ActionTypes {
  ChangeCity = 'CHANGE_CITY',
  LoadOffers = 'LOAD_OFFERS',
  LoadNearbyOffers = 'LOAD_NEARBY_OFFERS',
  LoadComments = 'LOAD_COMMENTS',
  LoadFavoriteOffers = 'LOAD_FAVORITE_OFFERS',
  ChangeSort = 'CHANGE_SORT',
  SetActiveOffer = 'SET_ACTIVE_OFFER',
  RequireAuthorization = 'REQUIRE_AUTHORIZATION',
  RequireLogout = 'REQUIRE_LOGOUT',
  AddComment = 'ADD_COMMENT',
  UpdateOffer = 'UPDATE_OFFER'
}

export type LoadOffersAction = {
  type: ActionTypes.LoadOffers;
  offers: Offers;
};

export type LoadNearbyOffersAction = {
  type: ActionTypes.LoadNearbyOffers;
  nearbyOffers: Offers;
};

export type LoadCommentsAction = {
  type: ActionTypes.LoadComments;
  comments: Comments;
};

export type LoadFavoriteOffersAction = {
  type: ActionTypes.LoadFavoriteOffers;
  favoriteOffers: Offers;
};

export type ChangeCityAction = {
  type: ActionTypes.ChangeCity;
  city: Cities;
};

export type ChangeSortAction = {
  type: ActionTypes.ChangeSort;
  sortValue: SortOptions;
};

export type SetActiveOfferAction = {
  type: ActionTypes.SetActiveOffer;
  offerId: number | null;
};

export type RequireAuthorizationAction = {
  type: ActionTypes.RequireAuthorization;
  authStatus: AuthorizationStatus;
};

export type RequireLogoutAction = {
  type: ActionTypes.RequireLogout;
};

export type AddCommentAction = {
  type: ActionTypes.AddComment;
  comment: CommentPost;
};

export type UpdateOfferAction = {
  type: ActionTypes.UpdateOffer;
  offer: Offer;
};

export type Actions =
  | LoadOffersAction
  | LoadNearbyOffersAction
  | LoadCommentsAction
  | LoadFavoriteOffersAction
  | ChangeCityAction
  | ChangeSortAction
  | SetActiveOfferAction
  | RequireAuthorizationAction
  | RequireLogoutAction
  | AddCommentAction
  | UpdateOfferAction;

export enum ActionType {
  LoadOffers = 'main/loadOffers',
  SetActiveCity = 'main/setActiveCity',
  SetActiveSort = 'main/setActieSort',
  SetActiveOffer = 'main/setActieOffer',
  UpdateOffer = 'main/updateOffer',
  RequireAuthorization = 'main/requireAuthorization',
  RequireLogout = 'main/requireLogout',
  LoadFavoriteOffers = 'favorite/loadFavoriteOffers',
  LoadNearbyOffers = 'room/loadNearbyOffers',
  LoadComments = 'room/loadComments',
  RedirectToRoute = 'app/redirectToRoute'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
