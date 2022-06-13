/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { main } from './main/main';
import { favorite } from './favorite/favorite';
import { room } from './room/room';

export const rootReducer = combineReducers({
  [NameSpace.main]: main.reducer,
  [NameSpace.favorite]: favorite.reducer,
  [NameSpace.room]: room.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
