import { useMemo } from "react";
import Card from "../../components/Card";
import { StyledContainer, StyledWrapper } from "./styles";

const DecksContainer = () => {
  const renderDecks = useMemo(() => {
    const decks = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      decks.push({
        name: "hello",
      });
    }
    return decks ? (
      decks.map((deck, index) => {
        return (
          <StyledContainer>
            <Card key={index} hover={true} pointer={true}>
              Hello
            </Card>
          </StyledContainer>
        );
      })
    ) : (
      <></>
    );
  });
  return <StyledWrapper>{renderDecks}</StyledWrapper>;
};

export default DecksContainer;
