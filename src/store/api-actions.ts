import { APIRoute, AppRoute, AuthorizationStatus } from '../constants';
import { ThunkActionResult } from '../types/actions';
import { Offers, Offer } from '../types/offer';
import { CommentPost, Comments } from '../types/comment';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken, Token } from '../services/token';
import APIAdapter from '../utils/api-adapter';
import {
  loadOffers,
  requireAuthorization,
  requireLogout,
  updateOffer
} from './main/main';
import { loadNearbyOffers, loadComments } from './room/room';
import { loadFavoriteOffers } from './favorite/favorite';
import { redirectToRoute } from './action';

export const fetchOffersAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offers>(APIRoute.Hotels);
    dispatch(loadOffers(APIAdapter.fromAPI(data)));
  };

export const fetchNearbyOffersAction =
  (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offers>(
      `${APIRoute.Hotels}/${offerId}/nearby`
    );
    dispatch(loadNearbyOffers(APIAdapter.fromAPI(data)));
  };

export const fetchCommentsAction =
  (offerdId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Comments>(
      `${APIRoute.Comments}/${offerdId}`
    );
    dispatch(loadComments(APIAdapter.fromAPI(data)));
  };

export const fetchFavoriteOffersAction =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(APIAdapter.fromAPI(data)));
  };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    try {
      await api
        .get(APIRoute.Login)
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  };

export const loginAction =
  ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {
      data: { token }
    } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const addComment =
  (offerId: number, { comment, rating }: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.post<Comment>(
      `${APIRoute.Comments}/${offerId}`,
      {
        comment,
        rating
      }
    );
    dispatch(loadComments(APIAdapter.fromAPI(data)));
  };

export const setFavotireOfferAction =
  (offerId: number, status: 0 | 1): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.post<Offer>(
        `${APIRoute.Favorite}/${offerId}/${status}`
      );
      dispatch(updateOffer(APIAdapter.fromAPI(data)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };
