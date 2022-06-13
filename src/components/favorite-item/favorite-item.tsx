import { v4 as uuid } from 'uuid';
import { Offers } from '../../types/offer';
import FavoriteOffer from '../favorite-offer/favorite-offer';

type FavoriteItemProps = {
  city: string;
  offers: Offers;
};

function FavoriteItem({ city, offers }: FavoriteItemProps) {
  const elements = offers.map((offer) => (
    <FavoriteOffer key={uuid()} offer={offer} />
  ));

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">{elements}</div>
    </li>
  );
}

export default FavoriteItem;
