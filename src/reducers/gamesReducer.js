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
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
