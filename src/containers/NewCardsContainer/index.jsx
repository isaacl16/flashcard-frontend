import { useCallback, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import {
  StyledButtonWrapper,
  StyledCardCounter,
  StyledHeader,
  StyledWrapper,
} from "./styles";

const NewCardContainer = (props) => {
  const [side, setSide] = useState("front");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(1);

  const newCard = () => {
    setSide("front");
    setFrontText("");
    setBackText("");
    setCurrentCardIndex((prevState) => prevState + 1);
  };

  const addCard = () => {
    console.log(props);
    props.setCards([...props.cards, { front: frontText, back: backText }]);
  };

  const onChange = (e) => {
    if (side === "front") {
      setFrontText(e.target.value);
    } else if (side === "back") {
      setBackText(e.target.value);
    }
  };

  const checkEnter = useCallback((e) => {
    if (e.key === "Enter") {
      if (side === "front" && frontText) {
        setSide("back");
      } else if (side === "back" && backText) {
        addCard();
        newCard();
      }
    }
  });

  const onClickAdd = () => {
    props.setCards((prevState) => [
      ...prevState,
      { front: frontText, back: backText },
    ]);
    addCard();
    newCard();
  };

  const onClickFlip = () => {
    if (side === "front") {
      setSide("back");
    } else if (side === "back") {
      setSide("front");
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledCardCounter>
          {currentCardIndex + "/" + (props.cards.length + 1)}
        </StyledCardCounter>
        <StyledButtonWrapper>
          <Button onClick={onClickFlip}>Flip</Button>
        </StyledButtonWrapper>
        {side === "front" ? (
          <>
            <StyledHeader side={side}>Front</StyledHeader>
            <Input
              value={frontText}
              onChange={onChange}
              onKeyPress={checkEnter}
            />
          </>
        ) : (
          <>
            <StyledHeader side={side}>Back</StyledHeader>
            <TextArea
              value={backText}
              onChange={onChange}
              onKeyPress={checkEnter}
            />
          </>
        )}
      </StyledWrapper>
      {frontText && backText ? (
        <Button onClick={onClickAdd}>Add Card</Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewCardContainer;
