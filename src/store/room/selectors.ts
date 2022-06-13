import { NameSpace } from '../../constants';
import { Comments } from '../../types/comment';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const selectNearbyOffers = (state: State): Offers =>
  state[NameSpace.room].nearbyOffers;

export const selectComments = (state: State): Comments =>
  state[NameSpace.room].comments;
