import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

//creamos una funcion que juntara todos los reducers en uno
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
