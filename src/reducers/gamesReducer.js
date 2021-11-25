const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

//funcion del reducer tiene dos parametros, el state y la acción
//dentro de la funcion, hay que tener un switch que cambie dependendo del tipo de la accion
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    //cuando se hace dispatch (fire) de fetch games, se devolverá el estado
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
