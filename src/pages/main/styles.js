import styled from "styled-components";
import fontSize from "../../theme/fontSize";

export const StyledWrapper = styled.div`
    text-align:center;
    margin: 10vh auto 0 auto;
    width: 60%;
`

export const StyledTitle = styled.h1`
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
    font-size: ${fontSize.title};
`
export const StyledDivider = styled.div`
    height: 2px;
    background-color: white;
    border: 3px solid black;
    margin-bottom: 1rem;
`