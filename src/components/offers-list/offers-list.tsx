import {Offers} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
};

function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
      }
    </div>
  );
}

export default OffersList;
