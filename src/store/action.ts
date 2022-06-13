import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/actions';
import { Offer, Offers } from '../types/offer';
import {
  SortOptions,
  AuthorizationStatus,
  Cities,
  AppRoute
} from '../constants';
import { Comments } from '../types/comment';

export const redirectToRoute = createAction<AppRoute>(
  ActionType.RedirectToRoute
);

export const setActiveCity = createAction(
  ActionType.SetActiveCity,
  (city: Cities) => ({
    payload: city
  })
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offers) => ({
    payload: offers
  })
);

export const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (nearbyOffers: Offers) => ({
    payload: nearbyOffers
  })
);

export const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Comments) => ({
    payload: comments
  })
);

export const loadFavoriteOffers = createAction(
  ActionType.LoadFavoriteOffers,
  (favoriteOffers: Offers) => ({
    payload: favoriteOffers
  })
);

export const setActiveSort = createAction(
  ActionType.SetActiveSort,
  (sortValue: SortOptions) => ({
    payload: sortValue
  })
);

export const setActiveOffer = createAction(
  ActionType.SetActiveOffer,
  (offerId: number | null) => ({
    payload: offerId
  })
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus
  })
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: Offer) => ({
    payload: offer
  })
);
