import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Grid from "@mui/material/Grid";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";

const Gallery = (props) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "skup-aut-381011.firebaseapp.com",
    projectId: "skup-aut-381011",
    storageBucket: "skup-aut-381011.appspot.com",
    messagingSenderId: "220694459192",
    appId: "1:220694459192:web:23b51a732382287f6047cd",
    measurementId: "G-V9CBRYS0WB",
  };

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const imagesRef = ref(storage, props.folder);
    const thumbnailRef = ref(storage, props.thumbNailFolder);

    listAll(imagesRef)
      .then((res) => {
        const promises = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => url)
        );

        Promise.all(promises).then((urls) => {
          setImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error(error);
      });

    listAll(thumbnailRef)
      .then((res) => {
        const promises = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => url)
        );

        Promise.all(promises).then((urls) => {
          setThumbnailImages(urls);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const images = imageUrls.map((image) => ({
    original: image,
  }));

  const images2 = thumbnailImages.map((image) => ({
    thumbnail: image,
  }));

  const test = images.map((obj, i) => ({
    original: obj.original,
    thumbnail: images2[i] ? images2[i].thumbnail : null,
    loading: "lazy",
    originalAlt: "car from gallery",
    thumbnailAlt: "thumbnail car from gallery",
    thumbnailHeight: "100%",
    thumbnailWidth: "100%",
    thumbnailLoading: "lazy",
    originalHeight: "100%",
    originalWidth: "100%",
  }));

  return (
    <Grid
      item
      container
      p={4}
      mb={5}
      xl={6}
      lg={6}
      md={12}
      sm={12}
      sx={{ flexDirection: "column", justifyContent: "center" }}
    >
      <ImageGallery
        items={test}
        // renderItem={_test}
        thumbnailPosition="left"
        slideInterval="1500"
      />
    </Grid>
  );
};

export default Gallery;
