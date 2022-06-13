/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { RoomState } from '../../types/state';

const initialState: RoomState = {
  nearbyOffers: [],
  comments: []
};

export const room = createSlice({
  name: NameSpace.room,
  initialState,
  reducers: {
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    }
  }
});

export const { loadNearbyOffers, loadComments } = room.actions;
