import { useState } from "react";
import NewCardsContainer from "../NewCardsContainer";
import NewDeckContainer from "../NewDeckContainer";
import { StyledHeader, StyledWrapper } from "./styles";
const CreateContainer = () => {
  const [section, setSection] = useState("deck");
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <StyledWrapper>
      {section === "deck" ? (
        <NewDeckContainer
          deckName={deckName}
          setDeckName={setDeckName}
          setSection={setSection}
        />
      ) : (
        <NewCardsContainer cards={cards} setCards={setCards} />
      )}
    </StyledWrapper>
  );
};

export default CreateContainer;
