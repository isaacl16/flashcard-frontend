import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createDeck, getDeck, getDecks, updateDeck } from "../../api";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import CardContainer from "../../containers/CardContainer";
import CarouselContainer from "../../containers/CarouselContainer";
import DeckContainer from "../../containers/DeckContainer";
import { generateUniqueID } from "../../utils";
import { StyledWrapper } from "./styles";

const DeckEditPage = () => {
  const { _id } = useParams();
  const [deckName, setDeckName] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [cards, setCards] = useState([
    { _id: generateUniqueID(), frontText: "", backText: "" },
  ]);
  const [deleteCards, setDeleteCards] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/decks");
  };

  const onClickEdit = () => {
    if (selectedItem === 0) setIsSaved(true);
    else setIsCreating(true);
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
    let insertIndex = selectedItem;
    console.log(insertIndex);
    while (cards[insertIndex] && cards[insertIndex].action === "delete")
      insertIndex += 1;
    console.log(insertIndex);
    currentCards.splice(insertIndex, 0, newCard);
    setCards(currentCards);
    setSelectedItem(insertIndex + 1);
  });

  const onClickRemove = useCallback(() => {
    const indexToRemove = selectedItem - 1;
    const removeCard = cards[indexToRemove];
    if (removeCard.action !== "add") {
      removeCard.action = "delete";
      setDeleteCards([...deleteCards, removeCard]);
    }
    setCards(cards.filter((card, index) => index !== indexToRemove));
    setSelectedItem(selectedItem - 1);
  });

  const onChange = useCallback((selectedIndex) => {
    setSelectedItem(selectedIndex);
  });

  useEffect(() => {
    const sendData = async () => {
      if (isSaved) {
        const updatedCards = cards.concat(deleteCards);
        console.log(updatedCards);
        const updatedDeck = {
          _id: _id,
          deck: { name: deckName },
          updatedCards: updatedCards.filter((card) => card.action !== "none"),
        };
        console.log(updatedDeck);
        if (await updateDeck(updatedDeck)) {
          console.log("success");
          navigate("/decks");
        }
      }
    };

    sendData().catch(console.error);
    setIsSaved(false);
    setIsCreating(false);
  }, [isSaved]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeck(_id);
      if (!data) {
        navigate("/404");
      }
      const currentCards = data.cards.map((card) => {
        return {
          ...card,
          action: "none",
        };
      });
      setCards(currentCards);
      setDeckName(data.name);
      return;
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    console.log(deleteCards);
  }, [deleteCards]);

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
        {deckName ? <Button onClick={onClickEdit}>Edit Deck</Button> : <></>}
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

export default DeckEditPage;
