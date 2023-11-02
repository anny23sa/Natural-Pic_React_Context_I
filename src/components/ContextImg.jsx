/*import React, { createContext, useEffect, useState } from "react"
export const ContextImg = createContext() //proporciona imagenes a otros comp

const PHOTO_URL = '../../photos.json';//datos de las imagenes

export const ProviderImg = ({ children }) => {// se utiliza para cargar las imagenes
    const [images, setImages] = useState([])

    const getData = async () => {
        try {
            const response = await fetch(PHOTO_URL);
            const data = await response.json()
            setImages(data.photos)
        } catch (error) {
            console.error("Error al cargar los datos:", error);
        }
    }

    useEffect(() => {
        getData()
    }, [] )

    return (
        <ContextImg.Provider value={{ images }}>
            {children}
        </ContextImg.Provider>
    )
}*/

import React, { createContext, useEffect, useState } from "react";

export const ContextImg = createContext();

const PHOTO_URL = '../../photos.json';

export const ProviderImg = ({ children }) => {
  const [images, setImages] = useState([]);

  const toggleLike = (updatedImages) => {
    setImages(updatedImages);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }

    getData();
  }, []);

  return (
    <ContextImg.Provider value={{ images, toggleLike }}>
      {children}
    </ContextImg.Provider>
  );
};


   