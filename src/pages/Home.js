import React, { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  //el useEffect se ejecutará cuando el app cargue (renders)
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
