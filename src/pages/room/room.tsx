import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { store, api } from '../../store/index';
import { selectAuthStatus } from '../../store/main/selectors';
import { selectNearbyOffers } from '../../store/room/selectors';
import CommentsForm from '../../components/comments-form/comments-form';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import NotFound from '../not-found/not-found';
import { APIRoute, AuthorizationStatus } from '../../constants';
import { fetchNearbyOffersAction } from '../../store/api-actions';
import { Offer, Offers } from '../../types/offer';
import CommentsList from '../../components/comments-list/comments-list';

function Room(): JSX.Element {
  const nearbyOffers: Offers = useSelector(selectNearbyOffers);
  const authStatus = useSelector(selectAuthStatus);
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer>();

  useEffect(() => {
    if (id) {
      api
        .get<Offer>(`${APIRoute.Hotels}/${id}`)
        .then((response: AxiosResponse<Offer>) => setOffer(response.data));
      store.dispatch(fetchNearbyOffersAction(Number(id)));
    }
  }, [id]);

  if (!offer) {
    return <NotFound />;
  }

  const dataForMap = [offer, ...nearbyOffers];

  const featureElements = offer.goods.map((feature) => {
    return (
      <li key={uuid()} className="property__feature property__feature--entire">
        {feature}
      </li>
    );
  });

  const imgElements = offer.images.map((path) => {
    return (
      <div key={uuid()} className="property__image-wrapper">
        <img className="property__image" src={path} alt="Studio" />
      </div>
    );
  });

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">{imgElements}</div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium ? (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            ) : null}
            <div className="property__name-wrapper">
              <h1 className="property__name">{offer.title}</h1>
              <button
                className="property__bookmark-button button"
                type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${offer.rating * 20}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {offer.rating}
              </span>
            </div>
            <ul className="property__features">{featureElements}</ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">Wi-Fi</li>
                <li className="property__inside-item">Washing machine</li>
                <li className="property__inside-item">Towels</li>
                <li className="property__inside-item">Heating</li>
                <li className="property__inside-item">Coffee machine</li>
                <li className="property__inside-item">Baby seat</li>
                <li className="property__inside-item">Kitchen</li>
                <li className="property__inside-item">Dishwasher</li>
                <li className="property__inside-item">Cabel TV</li>
                <li className="property__inside-item">Fridge</li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src="img/avatar-angelina.jpg"
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">Angelina</span>
                <span className="property__user-status">Pro</span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            {authStatus === AuthorizationStatus.Auth && (
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">100</span>
                </h2>
                <CommentsList offerId={Number(id)} />
                <CommentsForm />
              </section>
            )}
          </div>
        </div>
        <section className="property__map map">
          <Map offers={dataForMap} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <OffersList
              offers={nearbyOffers}
              type="Main"
              classNames="cities__places-list tabs__content"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Room;
