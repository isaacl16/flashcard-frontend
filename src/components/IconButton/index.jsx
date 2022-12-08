import Icons from "../../assets/icons";
import { StyledIcon } from "./styles";

const IconButton = (props) => {
  return (
    <StyledIcon onClick={props.onClick} src={Icons[props.icon]} alt="svg" />
  );
};

export default IconButton;
