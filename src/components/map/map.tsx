import {useRef} from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
};

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
