import { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import CardDoubleSide from "../../components/CardDoubleSide";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

import {
  StyledBackHeader,
  StyledBackWrapper,
  StyledButtonFlipWrapper,
  StyledFrontHeader,
  StyledFrontWrapper,
  StyledWrapper,
} from "./styles";

const NewCardContainer = (props) => {
  const [side, setSide] = useState("front");
  const [frontText, setFrontText] = useState(props.frontText);
  const [backText, setBackText] = useState(props.backText);
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (e) => {
    if (side === "front") {
      setFrontText(e.target.value);
    } else if (side === "back") {
      setBackText(e.target.value);
    }
  };

  const onClickFlip = () => {
    if (side === "front") {
      setSide("back");
    } else if (side === "back") {
      setSide("front");
    }
  };

  useEffect(() => {
    if (props.selectedItem - 1 === props.cardIndex) {
      setIsEditing(true);
    } else {
      if (isEditing) {
        let newCards = [...props.cards];
        newCards[props.cardIndex] = {
          id: newCards[props.cardIndex].id,
          frontText: frontText,
          backText: backText,
        };
        props.setCards(newCards);
        setIsEditing(false);
      }
    }
  }, [props.selectedItem]);

  useEffect(() => {
    if (props.selectedItem - 1 === props.cardIndex && props.isCreating) {
      let newCards = [...props.cards];
      newCards[props.cardIndex] = {
        id: newCards[props.cardIndex].id,
        frontText: frontText,
        backText: backText,
      };
      props.setCards(newCards);
      props.setIsSaved(true);
    }
  }, [props.isCreating]);

  const onClickTest = () => {
    console.log(frontText);
    console.log(props.frontText);
  };

  return (
    <>
      <StyledWrapper>
        <CardDoubleSide side={side}>
          <StyledFrontWrapper>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>
            <StyledFrontHeader side={side}>Front</StyledFrontHeader>
            <Input value={frontText} onChange={onChange} />
          </StyledFrontWrapper>
          <StyledBackWrapper>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>
            <StyledBackHeader side={side}>Back</StyledBackHeader>
            <TextArea value={backText} onChange={onChange} />
          </StyledBackWrapper>
        </CardDoubleSide>
      </StyledWrapper>
    </>
  );
};

export default NewCardContainer;
