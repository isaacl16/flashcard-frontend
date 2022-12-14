import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ActionsContainer from "../../containers/ActionsContainer";
import DecksListContainer from "../../containers/DecksListContainer";
const DecksListPage = () => {
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/decks/create");
  };
  return (
    <>
      <ActionsContainer>
        <Button onClick={onClickNew}>New Deck</Button>
      </ActionsContainer>
      <DecksListContainer />
    </>
  );
};

export default DecksListPage;
