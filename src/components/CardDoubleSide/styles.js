import styled, { keyframes } from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    perspective: 1000px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border: 5px solid black;
    border-radius: 4px;
    transform: ${props => props.side === "front" ? "rotateY(0deg)" : "rotateY(180deg)"};
`

