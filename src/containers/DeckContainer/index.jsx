import { useCallback } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledButtonWrapper, StyledHeader, StyledWrapper } from "./styles";

const DeckContainer = (props) => {
  const onChange = (e) => {
    props.setDeckName(e.target.value);
  };

  return (
    <StyledWrapper editable={props.editable}>
      {props.editable ? (
        <>
          <StyledHeader>Deck Name</StyledHeader>
          <Input
            value={props.deckName}
            onChange={onChange}
            setText={props.setDeckName}
          />
        </>
      ) : (
        <StyledHeader>{props.deckName}</StyledHeader>
      )}
    </StyledWrapper>
  );
};

export default DeckContainer;
