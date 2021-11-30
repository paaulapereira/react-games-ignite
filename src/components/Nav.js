import React, { useState } from "react";
//animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//redux and routes
import { fetchSeacrh } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  //state especifico para ese input, no hace flata ponerlo en redux
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  //funcion para almacenar texto del input
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  //submit
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSeacrh(textInput));
    setTextInput("");
  };
  //clear search
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite Games</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          name=""
          id=""
        />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: lighter;
  }
`;
export default Nav;
