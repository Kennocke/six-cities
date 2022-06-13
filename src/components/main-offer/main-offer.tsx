import Offer from '../offer/offer';
import { Offer as OfferType } from '../../types/offer';

type MainOfferProps = {
  offer: OfferType;
};

function MainOffer({ offer }: MainOfferProps) {
  return (
    <Offer
      classNames={{
        articleClass: 'cities__place-card',
        imgWrapClass: 'cities__image-wrapper'
      }}
      offer={offer}
    />
  );
}

export default MainOffer;
