import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//ROUTER -> para poder hacer el cmabio de la informacion de cada juego
import { BrowserRouter } from "react-router-dom";
//REDUX SETUP
//applyMiddleware -> everytime something is dispatched, is going to add in between what's on the applyMiddleware
//compose -> permite junter multiplos argumentos de una funcion
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//hay que envolver el app en un provider y el unico parametro que se pasa es la store para que los states esten disponibles en todo

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create store solo acepta dos parámetros
const store = createStore(
  rootReducer,
  //junta el parametro de las devtools con thunk en una
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
