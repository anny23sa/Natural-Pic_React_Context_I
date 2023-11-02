
import React, { useContext } from "react";
import { ContextImg } from "../components/ContextImg";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { images } = useContext(ContextImg);

  // Filtrar las imágenes favoritas
  const favoritas = images.filter((image) => image.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritas.map((image, id) => (
          <div key={id} className="image-container">
            <img src={image.src.tiny} alt={`Imagen ${id + 1}`} />
            <div className="heart-icon">
              <IconHeart filled={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
