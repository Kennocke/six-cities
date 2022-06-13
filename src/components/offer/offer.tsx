import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveOfferId } from '../../store/main/main';
import { store } from '../../store/index';
import { setFavotireOfferAction } from '../../store/api-actions';
import { Offer as OfferType } from '../../types/offer';

type OfferProps = {
  offer: OfferType;
  classNames?: {
    articleClass: string;
    imgWrapClass: string;
  };
};

const defaultProps = {
  classNames: {}
};

function Offer({ offer, classNames }: OfferProps): JSX.Element {
  const dispatch = useDispatch();
  const rating = `${String(Number(offer.rating) * 20)}%`;

  const handleMouse = (offerId: number | null) => {
    dispatch(setActiveOfferId(offerId));
  };

  const handleBookmark = () => {
    store.dispatch(
      setFavotireOfferAction(Number(offer.id), !offer.isFavorite ? 1 : 0)
    );
  };

  return (
    <article
      className={`place-card ${classNames && classNames.articleClass}`}
      onMouseEnter={() => handleMouse(offer.id)}
      onMouseLeave={() => handleMouse(null)}
    >
      <div
        className={`place-card__image-wrapper ${
          classNames && classNames.imgWrapClass
        }`}
      >
        <Link to={`../offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place Pic"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {offer.price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              offer.isFavorite && 'place-card__bookmark-button--active button'
            }`}
            type="button"
            onClick={handleBookmark}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`../offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

Offer.defaultProps = defaultProps;

export default Offer;
