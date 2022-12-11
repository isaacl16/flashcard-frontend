import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteDeck, getDecks } from "../../api";
import Card from "../../components/Card";
import IconButton from "../../components/IconButton";
import {
  StyledContainer,
  StyledDeleteContainer,
  StyledEditContainer,
  StyledWrapper,
} from "./styles";

const DecksListContainer = () => {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();
  const onClickDeck = (_id) => {
    navigate("/decks/view/" + _id);
  };

  const onClickEdit = (_id) => {
    navigate("/decks/edit/" + _id);
  };

  const onClickDelete = async (_id) => {
    console.log("click");
    await deleteDeck(_id);
    // navigate(0);
  };
  const renderDecks = useMemo(() => {
    return decks ? (
      decks.map((deck, index) => {
        return (
          <StyledContainer key={index}>
            <Card onClick={() => onClickDeck(deck._id)} key={index}>
              {deck.name}
            </Card>
            <StyledEditContainer id="icon">
              <IconButton onClick={() => onClickEdit(deck._id)} icon={"edit"} />
            </StyledEditContainer>
            <StyledDeleteContainer id="icon">
              <IconButton
                onClick={() => onClickDelete(deck._id)}
                icon={"delete"}
              />
            </StyledDeleteContainer>
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
