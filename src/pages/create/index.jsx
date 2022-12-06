import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDeck } from "../../api";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import NewCardContainer from "../../containers/CardNewContainer";
import CarouselContainer from "../../containers/CarouselContainer";
import NewDeckContainer from "../../containers/DeckNewContainer";
import { generateUniqueID } from "../../utils";
import { StyledWrapper } from "./styles";

const NewDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [cards, setCards] = useState([
    { id: generateUniqueID(), frontText: "", backText: "" },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

  const onClickCreate = () => {
    setIsCreating(true);
    console.log("clicked");
  };

  const onClickAdd = useCallback(() => {
    setCards((currentCards) => [
      ...currentCards,
      { id: generateUniqueID(), frontText: "", backText: "" },
    ]);
    setSelectedItem(cards.length + 1);
  });

  const onClickRemove = useCallback(() => {
    const indexToRemove = selectedItem - 1;
    if (selectedItem === cards.length) setSelectedItem(selectedItem - 1);
    setCards(cards.filter((card, index) => index !== indexToRemove));
  });

  const onChange = useCallback((selectedIndex) => {
    setSelectedItem(selectedIndex);
  });

  useEffect(() => {
    const sendData = async () => {
      if (isSaved) {
        const newDeck = {
          deck: { name: deckName },
          cards: cards.map((card) => {
            return {
              frontText: card.frontText,
              backText: card.backText,
            };
          }),
        };
        console.log(newDeck);
        if (await createDeck(newDeck)) {
          console.log("success");
          navigate("/");
        }
      }
    };

    sendData().catch(console.error);
    setIsSaved(false);
    setIsCreating(false);
  }, [isSaved]);

  const renderCards = () => {
    return cards.map((card, index) => {
      return (
        <NewCardContainer
          key={card.id}
          cardIndex={index}
          cards={cards}
          setCards={setCards}
          selectedItem={selectedItem}
          frontText={card.frontText}
          backText={card.backText}
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setIsSaved={setIsSaved}
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
