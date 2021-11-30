//media resize
//devuelve la url de la imagen por una otra que cambia el tamaÑo
export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  return image;
};
