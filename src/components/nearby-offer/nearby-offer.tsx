import Offer from '../offer/offer';
import { Offer as OfferType } from '../../types/offer';

type NearbyOfferProps = {
  offer: OfferType;
};

function NearbyOffer({ offer }: NearbyOfferProps) {
  return (
    <Offer
      classNames={{
        articleClass: 'near-places__card',
        imgWrapClass: 'near-places__image-wrapper'
      }}
      offer={offer}
    />
  );
}

export default NearbyOffer;
