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
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");

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
