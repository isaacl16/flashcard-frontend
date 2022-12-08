import styled, { keyframes } from "styled-components/macro";
import colors from "../../theme/colors";


export const StyledCard = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    margin: 2rem 0;
    perspective: 1000px;
    height: 100%;
    border: 5px solid black;
    color: black;
    background-color: ${colors.white};
    border-radius: 4px;
    transition: 0.2s;
    cursor: ${props => props.pointer ? "pointer" : "auto"};
`

