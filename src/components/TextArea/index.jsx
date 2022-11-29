import { StyledTextArea } from "./styles";

const TextArea = ({ value, onChange, onKeyPress }) => {
  return (
    <StyledTextArea value={value} onChange={onChange} onKeyPress={onKeyPress} />
  );
};

export default TextArea;
