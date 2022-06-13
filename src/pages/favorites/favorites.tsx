import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavoriteOffersList from '../../components/favorite-offers-list/favorite-offers-list';
import { store } from '../../store/index';
import { selectIsFavoriteOffers } from '../../store/favorite/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

const emptyFavorites = (
  <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">
            Save properties to narrow down search or plan your future trips.
          </p>
        </div>
      </section>
    </div>
  </main>
);

const favorites = (
  <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteOffersList />
      </section>
    </div>
  </main>
);

function Favorites(): JSX.Element {
  const isFavoriteOffers = useSelector(selectIsFavoriteOffers);
  const data = isFavoriteOffers ? favorites : emptyFavorites;

  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());
  }, []);

  return (
    <>
      {data}
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </>
  );
}

export default Favorites;
