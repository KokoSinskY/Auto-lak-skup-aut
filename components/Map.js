import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  const mapLocation = { lat: 51.795831, lng: 19.429909 };
  const infoWindowLocation = { lat: 51.795984, lng: 19.429904 };

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = () => {
    setShowingInfoWindow(true);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Grid container item xl={props.width} lg={props.width} md={props.width} sm={12}>
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
  );
};

export default Map;
