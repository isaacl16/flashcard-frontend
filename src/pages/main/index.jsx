import { Route, Routes } from "react-router-dom";
import NewDeckPage from "../create";
import DecksPage from "../decks";
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
