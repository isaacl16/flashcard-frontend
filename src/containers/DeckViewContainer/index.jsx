import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDeck } from "../../api";
import CardContainer from "../CardContainer";
import CarouselContainer from "../CarouselContainer";
import DeckContainer from "../DeckContainer";

const DeckViewContainer = (props) => {
  const [deck, setDeck] = useState({ name: "", cards: [] });
  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeck(props._id);
      console.log(data);
      if (data) {
        console.log(data);
        setDeck(data);
      } else navigate("/error");
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
    return deck.cards.map((card, index) => (
      <CardContainer
        key={index}
        frontText={card.frontText}
        backText={card.backText}
      />
    ));
  };
  return (
    <CarouselContainer
      length={deck.cards.length}
      selectedItem={selectedItem}
      onChange={onChange}
    >
      <DeckContainer deckName={deck.name} />
      {renderCards()}
    </CarouselContainer>
  );
};

export default DeckViewContainer;
