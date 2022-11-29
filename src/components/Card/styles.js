import styled, { keyframes } from "styled-components";
import colors from "../../theme/colors";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const enlarge = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`

const reduce = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`

export const StyledCard = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 30%;
    margin: 2rem 0;
    height: 200px;
    border: 5px solid black;
    color: black;
    background-color: ${colors.white};
    border-radius: 4px;
    transition: 0.2s;
    cursor:pointer;
    :hover {
        transform: scale(1.1);
    }
`

