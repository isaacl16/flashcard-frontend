import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { useNavigate } from "react-router-dom";
import { createDeck } from "../../api";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import CardContainer from "../../containers/CardContainer";
import CarouselContainer from "../../containers/CarouselContainer";
import DeckContainer from "../../containers/DeckContainer";
import { generateUniqueID } from "../../utils";
import { StyledWrapper } from "./styles";

const NewDeckPage = () => {
  const [deckName, setDeckName] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [cards, setCards] = useState([
    { _id: generateUniqueID(), frontText: "", backText: "", action: "add" },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/decks");
  };

  const onClickCreate = () => {
    setIsCreating(true);
    console.log("clicked");
  };

  const onClickAdd = useCallback(() => {
    const newCard = {
      _id: generateUniqueID(),
      frontText: "",
      backText: "",
      action: "add",
    };
    const currentCards = cards;
    currentCards.splice(selectedItem, 0, newCard);
    setCards(currentCards);
    setSelectedItem(selectedItem + 1);
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
          navigate("/decks");
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
        <CardContainer
          editable={true}
          key={card._id}
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
        {deckName ? (
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
        <DeckContainer
          deckName={deckName}
          setDeckName={setDeckName}
          editable={true}
        />
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

export default NewDeckPage;
