import {
  AuthorizationStatus,
  Cities,
  NameSpace,
  SortOptions
} from '../../constants';
import { State } from '../../types/state';
import { Offers, Offer } from '../../types/offer';

export const selectFilteredOffers = (state: State): Offers =>
  state[NameSpace.main].offers
    .filter(
      (offer: Offer) => offer.city.name === state[NameSpace.main].activeCity
    )
    .sort((a: Offer, b: Offer): number => {
      switch (state[NameSpace.main].activeSort) {
        case SortOptions.Popular:
          return 0;
        case SortOptions.LowToHigh:
          return a.price > b.price ? 1 : -1;
        case SortOptions.HighToLow:
          return a.price < b.price ? 1 : -1;
        case SortOptions.TopReated:
          return a.rating < b.rating ? 1 : -1;
        default:
          return 0;
      }
    });

export const selectLoadedDataStatus = (state: State): boolean =>
  state[NameSpace.main].isDataLoaded;

export const selectActiveSort = (state: State): SortOptions =>
  state[NameSpace.main].activeSort;

export const selectActiveCity = (state: State): Cities =>
  state[NameSpace.main].activeCity;

export const selectActiveOffer = (state: State): number | null =>
  state[NameSpace.main].activeOfferId;

export const selectAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.main].authorizationStatus;

export const selectAuthStatusLoaded = (state: State): boolean =>
  state[NameSpace.main].isAuthStatusLoaded;
