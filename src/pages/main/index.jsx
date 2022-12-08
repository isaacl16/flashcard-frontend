import { Navigate, Route, Routes } from "react-router-dom";
import NewDeckPage from "../create";
import DeckPage from "../deck";
import DecksPage from "../decks";
import NotFoundPage from "../notFound";
import { StyledDivider, StyledTitle, StyledWrapper } from "./styles";
const Main = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Tokkii Cards :)</StyledTitle>
      <StyledDivider />
      <Routes>
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/decks/create" element={<NewDeckPage />} />
        <Route path="/decks/:_id" element={<DeckPage />} />
        <Route path="/" element={<Navigate to="/decks" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </StyledWrapper>
  );
};

export default Main;
