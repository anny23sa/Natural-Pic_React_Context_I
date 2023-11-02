
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
