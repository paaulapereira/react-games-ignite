import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  //antes de llamar a axios, disparamos el loading detail, para mientras se cargue
  dispatch({
    type: "LOADING_DETAIL",
  });
  //hacemos get de la api
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));
  //y luego lo almacenamos en la acction
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
