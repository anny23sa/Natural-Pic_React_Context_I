/*const Gallery = () => {
  return <div className="gallery grid-columns-5 p-3"></div>;
};
export default Gallery;*/

// Gallery.js
/*import React from "react";
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { ContextImg } from "./ContextImg";

const Gallery = () => {
  const { images, toggleLike } = useContext(ContextImg);
  const history = useHistory();

  const handleFavoriteClick = (imageId) => {
    // Lógica para marcar la imagen como favorita
    toggleLike(imageId);

    // Redirigir al usuario a la página de "Favoritas" después de marcar la imagen como favorita
    history.push('/favoritas');
  };

  return (
    <div>
      {images.map((image, id) => (
        <div key={id} className="image-container">
          <img src={image.src.tiny} alt={`Imagen ${id + 1}`} />
          <div className="heart-icon" onClick={() => handleFavoriteClick(id)}>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;*/
// Gallery.js
/*import React, { useContext } from "react";
import { ContextImg } from "./ContextImg";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { images, toggleLike } = useContext(ContextImg);

  const handleFavoriteClick = (imageId) => {
    const updatedImages = images.map((image, id) => {
      if (id === imageId) {
        return { ...image, liked: !image.liked };
      }
      return image;
    });

    toggleLike(updatedImages);
  };

  return (
    <div>
      {images.map((image, id) => (
        <div key={id} className="image-container">
          <img src={image.src.tiny} alt={`Imagen ${id + 1}`} />
          <div className="heart-icon" onClick={() => handleFavoriteClick(id)}>
            {image.liked ? <IconHeart filled={true} /> : <IconHeart filled={false} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;*/
// Gallery.js
import React, { useContext } from "react";
import { ContextImg } from "./ContextImg";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { images, toggleLike } = useContext(ContextImg);

  const handleImageClick = (imageId) => {
    const updatedImages = images.map((image, id) => {
      if (id === imageId) {
        return { ...image, liked: !image.liked };
      }
      return image;
    });

    toggleLike(updatedImages);
  };

  return (
    <div>
      {images.map((image, id) => (
        <div key={id} className="image-container" onClick={() => handleImageClick(id)}>
          <img src={image.src.tiny} alt={`Imagen ${id + 1}`} />
          <div className="heart-icon">
            {image.liked ? <IconHeart filled={true} /> : <IconHeart filled={false} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
