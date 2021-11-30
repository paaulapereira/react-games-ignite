import { React } from "react";
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
//<Route path={["/game/:id", "/"]}> -> cuando la ruta sea default estara el componente home y cuando este en un juego también saldra el componente home

export default App;
