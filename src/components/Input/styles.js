import styled from "styled-components"

export const StyledInput = styled.input`
    width: 80%;
    height: 35px;
    border: 4px solid black;
    text-align: center;
    border-radius: 4px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`