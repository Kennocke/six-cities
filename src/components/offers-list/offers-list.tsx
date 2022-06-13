import { v4 as uuid } from 'uuid';
import Offer from '../offer/offer';
import { Offer as OfferType, Offers } from '../../types/offer';
import MainOffer from '../main-offer/main-offer';
import NearbyOffer from '../nearby-offer/nearby-offer';

type OffersListProps = {
  offers: Offers;
  type: string;
  classNames: string;
};

function OffersList({ offers, type, classNames }: OffersListProps) {
  const getComponentByType = (typeComponent: string, offer: OfferType) => {
    switch (typeComponent) {
      case 'Nearby':
        return <NearbyOffer key={uuid()} offer={offer} />;
      case 'Main':
        return <MainOffer key={uuid()} offer={offer} />;
      default:
        return <Offer key={uuid()} offer={offer} />;
    }
  };

  return (
    <div className={`places__list ${classNames}`}>
      {offers.map((offer) => getComponentByType(type, offer))}
    </div>
  );
}

export default OffersList;
