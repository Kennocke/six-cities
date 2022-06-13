export default function stas1() {
  console.log('wdwd');
}
/* eslint-disable @typescript-eslint/default-param-last */
// import { State } from '../types/state';
// import { Actions } from '../types/actions';
// import { Cities, SortOptions, AuthorizationStatus } from '../constants';

// const InitialState: State = {
//   activeCity: Cities.Amsterdam,
//   activeSort: SortOptions.Popular,
//   activeOfferId: null,
//   offers: [],
//   nearbyOffers: [],
//   favoriteOffers: [],
//   comments: [],
//   authorizationStatus: AuthorizationStatus.Unknown
// };

// function reducer(state: State = InitialState, action: Actions): State {
//   switch (action.type) {
//     case 'CHANGE_CITY':
//       return { ...state, activeCity: action.city };
//     case 'LOAD_OFFERS':
//       return { ...state, offers: action.offers };
//     case 'LOAD_NEARBY_OFFERS':
//       return { ...state, nearbyOffers: action.nearbyOffers };
//     case 'LOAD_COMMENTS':
//       return { ...state, comments: action.comments };
//     case 'LOAD_FAVORITE_OFFERS':
//       return { ...state, favoriteOffers: action.favoriteOffers };
//     case 'CHANGE_SORT':
//       return { ...state, activeSort: action.sortValue };
//     case 'SET_ACTIVE_OFFER':
//       return { ...state, activeOfferId: action.offerId };
//     case 'REQUIRE_AUTHORIZATION':
//       return { ...state, authorizationStatus: action.authStatus };
//     case 'REQUIRE_LOGOUT':
//       return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
//     case 'UPDATE_OFFER': {
//       const offerIndex = state.offers.findIndex(
//         (offer: any) => offer.id === action.offer.id
//       );
//       return {
//         ...state,
//         offers: [
//           ...state.offers.slice(0, offerIndex),
//           action.offer,
//           ...state.offers.slice(offerIndex + 1, state.offers.length)
//         ]
//       };
//     }

//     default:
//       return state;
//   }
// }

// export default reducer;
