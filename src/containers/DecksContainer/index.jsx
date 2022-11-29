import Card from "../../components/Card";
import { StyledWrapper } from "./styles";

const renderDecks = () => {
  const decks = [];
  const count = 50;
  for (let i = 0; i < count; i++) {
    decks.push({
      name: "hello",
    });
  }
  return decks ? (
    decks.map((deck) => {
      return <Card>Hello</Card>;
    })
  ) : (
    <></>
  );
};

const DecksContainer = () => {
  return <StyledWrapper>{renderDecks()}</StyledWrapper>;
};

export default DecksContainer;
