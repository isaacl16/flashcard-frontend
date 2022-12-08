import { StyledCard } from "./styles";

const Card = ({ children, onClick, hover = false, pointer = false }) => {
  return (
    <StyledCard hover={hover} pointer={pointer} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

export default Card;
