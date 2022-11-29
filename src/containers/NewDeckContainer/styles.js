import styled from "styled-components"
import fontSize from "../../theme/fontSize"

export const StyledHeader = styled.h1`
    font-size: ${fontSize.header};
    margin-top: 18%;
`

export const StyledWrapper = styled.div`
    position: relative;
    margin: 2rem auto;
    height: 300px;
    width: 500px;
    border: 5px solid black;
    color: black;
    background-color: white;
    border-radius: 4px;
    text-align: center;
`
export const StyledButtonWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
`