import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ActionsContainer from "../../containers/ActionsContainer";
import CreateContainer from "../../containers/CreateContainer";
import DecksContainer from "../../containers/DecksContainer";
import DecksPage from "../decks";
import NewDeckPage from "../newDeck";
import { StyledDivider, StyledTitle, StyledWrapper } from "./styles";
const Main = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Tokkii Cards :)</StyledTitle>
      <StyledDivider />
      <Routes>
        <Route path="/" element={<DecksPage />} />
        <Route path="/new" element={<NewDeckPage />} />
      </Routes>
    </StyledWrapper>
  );
};

export default Main;
