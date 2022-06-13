/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { FavoriteState } from '../../types/state';

const initialState: FavoriteState = {
  favoriteOffers: []
};

export const favorite = createSlice({
  name: NameSpace.favorite,
  initialState,
  reducers: {
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    deleteFavoriteOffer: (state, action) => {
      const offerIndex = state.favoriteOffers.findIndex(
        (offer: any) => offer.id === action.payload
      );
      state.favoriteOffers.splice(offerIndex, 1);
    }
  }
});

export const { loadFavoriteOffers, deleteFavoriteOffer } = favorite.actions;
