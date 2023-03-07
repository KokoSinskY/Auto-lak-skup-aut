import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from "@react-google-maps/api";

const Map = () => {
  const mapLocation = { lat: 51.796242, lng: 19.430085 };
  const infoWindowLocation = { lat: 51.796736, lng: 19.430095 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBE-tgBICt919T6lwteqv8CF9L1Q8tnA6Q",
  });

  const divStyle = {
    background: `white`,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Box>
      <Grid>
        <GoogleMap zoom={15.5} center={mapLocation} mapContainerClassName="map-container">
          <MarkerF position={mapLocation} />
        </GoogleMap>
      </Grid>
    </Box>
  );
};

export default Map;
