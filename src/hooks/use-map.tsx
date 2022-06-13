import leaflet from 'leaflet';
import { useEffect, useState } from 'react';
import { City } from '../types/offer';

function useMap(mapRef: React.RefObject<HTMLDivElement>, city: City | null) {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && city !== null) {
      const container = leaflet.DomUtil.get('map');
      if (container !== null) {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        container._leaflet_id = null;
      }

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
