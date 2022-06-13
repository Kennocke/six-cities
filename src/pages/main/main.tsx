import { useSelector } from 'react-redux';
import OffersList from '../../components/offers-list/offers-list';
import SortOptions from '../../components/sort-options/sort-options';
import CitiesList from '../../components/cities-list/CitiesList';
import Map from '../../components/map/map';
import {
  selectFilteredOffers,
  selectActiveCity
} from '../../store/main/selectors';
import { Offers } from '../../types/offer';
import { Cities } from '../../constants';

function Main(): JSX.Element {
  const filteredOffers: Offers = useSelector(selectFilteredOffers);
  const activeCity: Cities = useSelector(selectActiveCity);

  const emptyOffers = (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in{' '}
            {activeCity}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );

  const renderOffers = (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {filteredOffers.length} places to stay in {activeCity}
        </b>
        <SortOptions />
        <OffersList
          offers={filteredOffers}
          type="Main"
          classNames="cities__places-list tabs__content"
        />
      </section>

      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={filteredOffers} />
        </section>
      </div>
    </div>
  );

  const data = filteredOffers.length > 0 ? renderOffers : emptyOffers;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">{data}</div>
    </main>
  );
}

export default Main;
