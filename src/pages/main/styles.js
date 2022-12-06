import styled from "styled-components/macro";
import fontSize from "../../theme/fontSize";

export const StyledWrapper = styled.div`
    text-align:center;
    margin: 10vh auto 0 auto;
    width: 100%;
    max-width: 1200px;
`

export const StyledTitle = styled.h1`
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
    width: 100%;
    font-size: ${fontSize.title};
`
export const StyledDivider = styled.div`
    width: calc(100% - 6px);
    height: 2px;
    background-color: white;
    border: 3px solid black;
    margin-bottom: 1rem;
`