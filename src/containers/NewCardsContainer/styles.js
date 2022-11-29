import styled from "styled-components"
import fontSize from "../../theme/fontSize"

export const StyledHeader = styled.h1`
    font-size: ${fontSize.header};
    margin-top: ${props => props.side === "front" ? "17%" : "5%"};
`

export const StyledWrapper = styled.div`
    position: relative;
    margin: 2rem auto 1rem auto;
    height: 300px;
    width: 500px;
    border: 5px solid black;
    color: black;
    background-color: white;
    border-radius: 4px;
    text-align: center;
`
export const StyledCardCounter = styled.div`
    font-size: 16px;
    position: absolute;
    right: 0rem;
    top: -2rem;
`

export const StyledButtonWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`