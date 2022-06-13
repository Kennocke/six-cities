import { RefObject, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { selectActiveOffer } from '../../store/main/selectors';
import { Offers } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';

import DEFAULT_CITY from '../../utils/mocks';

type MapProps = {
  offers: Offers;
};

function Map({ offers }: MapProps) {
  const activeOfferId = useSelector(selectActiveOffer);

  const city = offers.length > 0 ? offers[0].city : DEFAULT_CITY;
  const mapRef: RefObject<HTMLDivElement> = useRef(null);
  const map = useMap(mapRef, city);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  if (map && offers) {
    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude
          },
          {
            icon:
              activeOfferId === offer.id ? currentCustomIcon : defaultCustomIcon
          }
        )
        .addTo(map);
    });
  }

  useEffect(() => {
    if (city && map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        city.location.zoom
      );
    }
  }, [map, city]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;
