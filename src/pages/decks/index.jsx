import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import ViewDecksContainer from "../../containers/DecksViewContainer";
const Decks = () => {
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <>
      <ActionsContainer>
        <Button onClick={onClickNew}>New Deck</Button>
      </ActionsContainer>
      <ViewDecksContainer />
    </>
  );
};

export default Decks;
