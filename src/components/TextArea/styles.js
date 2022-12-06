import styled from "styled-components/macro";

export const StyledTextArea = styled.textarea`
    width: 80%;
    height: 70%;
    border: 4px solid black;
    padding: 1rem;
    text-align: start;
    border-radius: 4px;
    resize: none;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`