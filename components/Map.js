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
          <InfoWindow position={mapLocation}>
            <div style={divStyle}>
              <h2>Auto-Lak</h2>
              <p>Grunwaldzka 33a</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </Grid>
    </Box>
  );
};

export default Map;
