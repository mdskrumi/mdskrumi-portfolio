import { useEffect, useState } from "react";
import Map, {
  Layer,
  ScaleControl,
  NavigationControl,
  Marker,
} from "react-map-gl";

// Images
import MY_PIN from "../../assets/images/my_pin.png";

interface LocateMePropsInterface {
  location: GeolocationPosition | undefined;
}

const LocateMe = (props: LocateMePropsInterface) => {
  // console.log("__LOCATE_ME_PROPS__: ", props);

  const { location } = props;

  const [viewState, setViewState] = useState({
    longitude: 90.3654,
    latitude: 23.8223,
    zoom: 15,
  });

  useEffect(() => {
    if (location) {
      setViewState({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        zoom: 15,
      });
    }
  }, [location]);

  return (
    <Map
      style={{ margin: "auto", width: "70vw", height: 400 }}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibWRza3J1bWkiLCJhIjoiY2t6cHJpODZrNWs4eTJ1cHE2d2gyamo3bCJ9._wPMQlwgpNT5DdxvacyRLQ"
    >
      <Layer
        id="landuse_park"
        type="fill"
        source={"mapbox"}
        filter={["==", "class", "park"]}
        paint={{ "fill-color": "#4E3FC8" }}
      />
      <ScaleControl />
      <NavigationControl />
      <Marker
        longitude={viewState.longitude}
        latitude={viewState.latitude}
        anchor="bottom"
      >
        <img src={MY_PIN} alt="Map Pin" />
      </Marker>
    </Map>
  );
};

export default LocateMe;
