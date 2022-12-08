import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getDecks } from "../../api";
import Card from "../../components/Card";
import { StyledContainer, StyledWrapper } from "./styles";

const DecksListContainer = () => {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();
  const onClickDeck = (_id) => {
    navigate("/decks/" + _id);
  };
  const renderDecks = useMemo(() => {
    return decks ? (
      decks.map((deck, index) => {
        return (
          <StyledContainer key={index}>
            <Card
              onClick={() => onClickDeck(deck._id)}
              key={index}
              hover={true}
              pointer={true}
            >
              {deck.name}
            </Card>
          </StyledContainer>
        );
      })
    ) : (
      <></>
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDecks();
      console.log(data);
      if (data) {
        setDecks(data);
      }
    };
    fetchData().catch(console.error);
  }, []);
  return <StyledWrapper>{renderDecks}</StyledWrapper>;
};

export default DecksListContainer;
