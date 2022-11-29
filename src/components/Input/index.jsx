import { StyledInput } from "./styles";

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <StyledInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
  );
};

export default Input;
