import { StyledCard } from "./styles";

const Card = ({ children, hover = false, pointer = false }) => {
  return (
    <StyledCard hover={hover} pointer={pointer}>
      {children}
    </StyledCard>
  );
};

export default Card;
