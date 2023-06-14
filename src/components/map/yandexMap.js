import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const yandexMap = () => {
  const mapContainerStyles = {
    borderRadius: "20px",
    overflow: "hidden",
    marginTop: "5rem",
  };

  const mapStyles = {
    width: "100%",
    height: "450px",
    border: "3px solid #eee",
  };

  const placemarkGeometry = [47.143942, 39.767438];
  return (
    <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_MAPS_API_KEY }}>
      <div style={mapContainerStyles}>
        <div style={mapStyles}>
          <Map
            defaultState={{ center: [47.143942, 39.767438], zoom: 15 }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={placemarkGeometry} />
          </Map>
        </div>
      </div>
    </YMaps>
  );
};

export default yandexMap;
