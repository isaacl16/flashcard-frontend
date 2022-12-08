import { useCallback, useEffect, useMemo, useState } from "react";
import { getDeck } from "../../api";
import Button from "../../components/Button";
import CardDoubleSide from "../../components/CardDoubleSide";
import CarouselContainer from "../CarouselContainer";
import {
  StyledBackWrapper,
  StyledButtonFlipWrapper,
  StyledCardWrapper,
  StyledDeckContainer,
  StyledFrontWrapper,
  StyledTitle,
} from "./styles";

const DeckViewContainer = (props) => {
  const [deck, setDeck] = useState({ name: "", cards: [] });
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeck(props._id);
      if (data) {
        console.log(data);
        setDeck(data);
      }
    };
    fetchData().catch(console.error);
  }, []);
  const onChange = useCallback((selectedIndex) => {
    setSelectedItem(selectedIndex);
  });

  const renderCards = () => {
    const [side, setSide] = useState("front");
    const onClickFlip = () => {
      if (side === "front") {
        setSide("back");
      } else {
        setSide("front");
      }
    };
    return deck.cards.map((card) => (
      <StyledCardWrapper>
        <CardDoubleSide side={side}>
          <StyledFrontWrapper>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>
            <p>{card.frontText}</p>
          </StyledFrontWrapper>
          <StyledBackWrapper>
            <StyledButtonFlipWrapper>
              <Button onClick={onClickFlip}>Flip</Button>
            </StyledButtonFlipWrapper>
            <p>{card.backText}</p>
          </StyledBackWrapper>
        </CardDoubleSide>
      </StyledCardWrapper>
    ));
  };
  return (
    <CarouselContainer
      length={deck.cards.length}
      selectedItem={selectedItem}
      onChange={onChange}
    >
      <StyledDeckContainer>
        <StyledTitle>{deck.name}</StyledTitle>
      </StyledDeckContainer>
      {renderCards()}
    </CarouselContainer>
  );
};

export default DeckViewContainer;
