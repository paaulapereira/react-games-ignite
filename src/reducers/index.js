import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

//creamos una funcion que juntara todos los reducers en uno
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
