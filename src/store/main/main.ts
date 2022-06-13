import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { MainState } from '../../types/state';
import {
  Cities,
  SortOptions,
  AuthorizationStatus,
  NameSpace
} from '../../constants';

const initialState: MainState = {
  offers: [],
  isDataLoaded: false,
  activeCity: Cities.Amsterdam,
  activeSort: SortOptions.Popular,
  activeOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthStatusLoaded: false
};

export const main = createSlice({
  name: NameSpace.main,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },
    setActiveOfferId: (state, action) => {
      state.activeOfferId = action.payload;
    },
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
      state.isAuthStatusLoaded = true;
    },
    requireLogout: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
    updateOffer: (state, action) => {
      const offerIndex = state.offers.findIndex(
        (offer: any) => offer.id === action.payload.id
      );
      return {
        ...state,
        offers: [
          ...state.offers.slice(0, offerIndex),
          action.payload,
          ...state.offers.slice(offerIndex + 1, state.offers.length)
        ]
      };
    }
  }
});

export const {
  loadOffers,
  setActiveCity,
  setActiveSort,
  setActiveOfferId,
  requireAuthorization,
  requireLogout,
  updateOffer
} = main.actions;
