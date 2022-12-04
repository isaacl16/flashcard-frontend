import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import NewCardContainer from "../../containers/NewCardsContainer";
import NewDeckContainer from "../../containers/NewDeckContainer";
const NewDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [section, setSection] = useState("deck");
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };
  return (
    <>
      <ActionsContainer>
        <Button onClick={onClickBack}>Back</Button>
      </ActionsContainer>
      {section === "deck" ? (
        <NewDeckContainer
          deckName={deckName}
          setDeckName={setDeckName}
          setSection={setSection}
        />
      ) : (
        <NewCardContainer cards={cards} setCards={setCards} />
      )}
    </>
  );
};

export default NewDeck;
