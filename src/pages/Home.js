import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//location
import { useLocation } from "react-router-dom";

const Home = () => {
  //get location
  const location = useLocation();
  //separamos el path en los elemnetos y cogemos el segundo valor que es el id
  const pathID = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  //el useEffect se ejecutará cuando el dispatch happends
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get that data back - > creamos una constante para cada uno de los tipos de juegos
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

//grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)) significa que las columnas del grid se van a repetir el maximo de veces posible hasta que entren, y que hagan autofit con la pagina, y que el minimo tamaño es 500px, pero si no llega a ese tamaÑo se expande el maximo dque pueda

//el animatePresence es para animar un componente, y para eso hay que envolverlo con los tags. Además, el componente animado tiene que tener un toggle, y de ahi hay que envolver los dos componentes (el que cambia y el otro con animateSharedLayout)
//los dos elementos que queremos transicionar tienen que tener un id (el mismo id)
