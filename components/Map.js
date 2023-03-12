import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBE-tgBICt919T6lwteqv8CF9L1Q8tnA6Q",
  });

  const mapLocation = { lat: 51.796242, lng: 19.430085 };
  const infoWindowLocation = { lat: 51.796736, lng: 19.430095 };

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = () => {
    setShowingInfoWindow(true);
  };

  const divStyle = {
    background: `white`,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Grid>
      <Grid container item xl={6} lg={6} md={6} sm={12}>
        <GoogleMap zoom={15.5} center={mapLocation} mapContainerClassName="map-container">
          <MarkerF onClick={onMarkerClick} position={mapLocation} />
          {!showingInfoWindow ? null : (
            <InfoWindowF
              position={infoWindowLocation}
              visible={showingInfoWindow}
              onCloseClick={() => setShowingInfoWindow(false)}
            >
              <Paper>
                <Typography variant="headline" component="h2">
                  Auto-Lak
                </Typography>
                <Typography component="div">ul. Grunwaldzka 33a</Typography>
                <Typography component="div">793-308-669</Typography>
              </Paper>
            </InfoWindowF>
          )}
        </GoogleMap>
      </Grid>
    </Grid>
  );
};

export default Map;
