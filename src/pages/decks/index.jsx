import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import DecksContainer from "../../containers/DecksContainer";
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
      <DecksContainer />
    </>
  );
};

export default Decks;
