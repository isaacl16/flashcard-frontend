import { StyledCard } from "./styles";

const CardDoubleSide = ({ children, side }) => {
  return <StyledCard side={side}>{children}</StyledCard>;
};

export default CardDoubleSide;
