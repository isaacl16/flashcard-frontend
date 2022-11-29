import { useState } from "react";
import ActionsContainer from "../../containers/ActionsContainer";
import CreateContainer from "../../containers/CreateContainer";
import DecksContainer from "../../containers/DecksContainer";
import { StyledDivider, StyledTitle, StyledWrapper } from "./styles";
const Main = () => {
  const [page, setPage] = useState("decks");

  const renderContainer = () => {
    switch (page) {
      case "decks":
        return <DecksContainer />;
      case "create":
        return <CreateContainer />;
    }
  };
  return (
    <StyledWrapper>
      <StyledTitle>Tokkii Cards :)</StyledTitle>
      <StyledDivider />
      <ActionsContainer page={page} setPage={setPage} />
      {renderContainer()}
    </StyledWrapper>
  );
};

export default Main;
