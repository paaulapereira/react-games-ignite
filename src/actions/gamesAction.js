import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//action => objs that describes what you wwhant to do
//action creator=> funcion que devuelve una action
//con redux thunk para poder hacer fetch con axios tiene que hacer una funcion asyncrona CONS DISPATHC
//es una action que hará fetch de los popular games y despues hará un dispatch de la acción con el payload de la data
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  //el await permite que no haga falta poner el .then(), porque dice que espere hasta que la informacion esté cargada y ahi lo llama
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    //el payload es para la informacion que queremos en ese dispatch
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

//la funcion de popular games solo devuelve la url
