import { Navigate, Route, Routes } from "react-router-dom";
import DeckPage from "../deck";
import DeckCreatePage from "../deckCreate";
import DeckEditPage from "../deckEdit";
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
        <Route path="/decks/create" element={<DeckCreatePage />} />
        <Route path="/decks/view/:_id" element={<DeckPage />} />
        <Route path="/decks/edit/:_id" element={<DeckEditPage />} />
        <Route path="/" element={<Navigate to="/decks" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </StyledWrapper>
  );
};

export default Main;
