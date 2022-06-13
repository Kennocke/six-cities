import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import FavoriteItem from '../favorite-item/favorite-item';
import { selectFavoriteOffers } from '../../store/favorite/selectors';

function FavoriteOffersList() {
  const favoriteOffers = useSelector(selectFavoriteOffers);

  const cities = Array.from(
    new Set(favoriteOffers.map((elem) => elem.city.name))
  );

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <FavoriteItem
          key={uuid()}
          city={city}
          offers={favoriteOffers.filter((offer) => offer.city.name === city)}
        />
      ))}
    </ul>
  );
}

export default FavoriteOffersList;
