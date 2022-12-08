import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDeck } from "../../api";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import CarouselContainer from "../../containers/CarouselContainer";
import DeckViewContainer from "../../containers/DeckViewContainer";
import { StyledWrapper } from "./styles";

const DeckPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/decks");
  };

  return (
    <StyledWrapper>
      <ActionsContainer>
        <Button onClick={onClickBack}>Back</Button>
      </ActionsContainer>
      <DeckViewContainer _id={_id} />
    </StyledWrapper>
  );
};

export default DeckPage;
