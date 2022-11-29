import Button from "../../components/Button";
import { StyledWrapper } from "./styles";

const ActionsContainer = (props) => {
  const onClickNew = () => {
    props.setPage("create");
  };

  const onClickBack = () => {
    props.setPage("decks");
  };
  return (
    <StyledWrapper>
      {props.page === "decks" ? (
        <Button onClick={onClickNew}>New Deck</Button>
      ) : (
        <Button onClick={onClickBack}>Go Back</Button>
      )}
    </StyledWrapper>
  );
};

export default ActionsContainer;
