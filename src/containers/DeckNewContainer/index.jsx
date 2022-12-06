import { useCallback } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledButtonWrapper, StyledHeader, StyledWrapper } from "./styles";

const NewDeckContainer = (props) => {
  const onChange = (e) => {
    props.setDeckName(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledHeader>Deck Name</StyledHeader>
      <Input
        value={props.deckName}
        onChange={onChange}
        setText={props.setDeckName}
      />
    </StyledWrapper>
  );
};

export default NewDeckContainer;
