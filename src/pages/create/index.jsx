import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import NewCardContainer from "../../containers/CardNewContainer";
import CarouselContainer from "../../containers/CarouselContainer";
import NewDeckContainer from "../../containers/DeckNewContainer";
import { StyledWrapper } from "./styles";
const NewDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [cards, setCards] = useState([{ frontText: "", backText: "" }]);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

  const onClickCreate = () => {
    console.log("createDeck");
  };

  const onClickAdd = useCallback(() => {
    setCards((currentCards) => [
      ...currentCards,
      { frontText: "", backText: "" },
    ]);
    setSelectedItem(cards.length + 1);
  });

  const onClickRemove = useCallback(() => {
    const indexToRemove = selectedItem - 1;
    setSelectedItem(selectedItem - 1);
    setCards(cards.filter((card, index) => index !== indexToRemove));
  });

  const onChange = useCallback((selectedIndex) => {
    setSelectedItem(selectedIndex);
  });

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const renderCards = () => {
    return cards.map((card, index) => {
      return (
        <NewCardContainer
          selectedItem={selectedItem}
          key={index}
          cardIndex={index}
          cards={cards}
          setCards={setCards}
        />
      );
    });
  };

  return (
    <StyledWrapper>
      <ActionsContainer>
        <Button onClick={onClickBack}>Back</Button>
        {cards.length > 0 ? (
          <Button onClick={onClickCreate}>Create Deck</Button>
        ) : (
          <></>
        )}
      </ActionsContainer>
      <CarouselContainer
        length={cards.length}
        selectedItem={selectedItem}
        onChange={onChange}
      >
        <NewDeckContainer deckName={deckName} setDeckName={setDeckName} />
        {renderCards()}
      </CarouselContainer>
      {selectedItem > 0 ? (
        <Button onClick={onClickRemove}>Remove Card</Button>
      ) : (
        <></>
      )}
      <Button onClick={onClickAdd}>Add Card</Button>
    </StyledWrapper>
  );
};

export default NewDeck;
