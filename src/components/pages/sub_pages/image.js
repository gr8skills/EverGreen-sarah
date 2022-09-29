import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photos from "./photos";
import slides from "./slides";

const  Pic= () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        onClick={(event, photo, index) => setIndex(index)}
      />

      <Lightbox slides={slides} open={index >= 0} close={() => setIndex(-1)} />
    </>
  );
};

export default Pic;
