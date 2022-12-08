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

const CardContainer = (props) => {
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
  const validateCardChange = () => {
    const currentCards = [...props.cards];
    const card = currentCards[props.cardIndex];
    let action = card.action;
    if (card.frontText !== frontText || card.backText !== backText) {
      if (action !== "add" && action !== "remove") action = "update";
    }
    currentCards[props.cardIndex] = {
      _id: card._id,
      frontText: frontText,
      backText: backText,
      action: action,
    };
    props.setCards(currentCards);
    console.log(currentCards);
  };
  useEffect(() => {
    if (props.selectedItem - 1 === props.cardIndex) {
      setIsEditing(true);
    } else {
      if (isEditing) {
        validateCardChange();
        setIsEditing(false);
      }
    }
  }, [props.selectedItem]);

  useEffect(() => {
    if (props.selectedItem - 1 === props.cardIndex && props.isCreating) {
      validateCardChange();
      props.setIsSaved(true);
    }
  }, [props.isCreating]);

  return (
    <>
      <StyledWrapper>
        <CardDoubleSide side={side}>
          <StyledFrontWrapper editable={props.editable}>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>

            {props.editable ? (
              <>
                <StyledFrontHeader side={side}>Front</StyledFrontHeader>
                <Input value={frontText} onChange={onChange} />
              </>
            ) : (
              <p>{frontText}</p>
            )}
          </StyledFrontWrapper>
          <StyledBackWrapper>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>
            {props.editable ? (
              <>
                <StyledBackHeader side={side}>Back</StyledBackHeader>
                <TextArea value={backText} onChange={onChange} />
              </>
            ) : (
              <p>{backText}</p>
            )}
          </StyledBackWrapper>
        </CardDoubleSide>
      </StyledWrapper>
    </>
  );
};

export default CardContainer;
