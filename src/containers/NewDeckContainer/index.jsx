import { useCallback } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { StyledButtonWrapper, StyledHeader, StyledWrapper } from "./styles";

const NewDeckContainer = (props) => {
  const onClickNext = () => {
    props.setSection("cards");
  };

  const onChange = (e) => {
    props.setDeckName(e.target.value);
  };

  const checkEnter = useCallback((e) => {
    if (e.key === "Enter" && props.deckName) {
      props.setSection("cards");
    }
  });

  return (
    <StyledWrapper>
      <StyledHeader>Deck Name</StyledHeader>
      <Input
        value={props.deckName}
        onChange={onChange}
        onKeyPress={checkEnter}
        setText={props.setDeckName}
      />
      {props.deckName ? (
        <StyledButtonWrapper>
          <Button onClick={onClickNext}>Next</Button>
        </StyledButtonWrapper>
      ) : (
        <></>
      )}
    </StyledWrapper>
  );
};

export default NewDeckContainer;
