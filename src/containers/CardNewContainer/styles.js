import styled from "styled-components/macro";
import fontSize from "../../theme/fontSize";

export const StyledWrapper = styled.div`
    margin: 2rem auto 1rem auto;
    height: 500px;
    width: 800px;
    background-color: transparent;
    color: black;
`
export const StyledContainer = styled.div`
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


export const StyledFrontHeader = styled.h1`
    font-size: ${fontSize.header};
    margin-top: 24%;
`

export const StyledBackHeader = styled.h1`
    font-size: ${fontSize.header};
    margin-top: 7%;
`

export const StyledButtonFlipWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`

export const StyledFrontWrapper = styled.div`
    position: absolute;
    background-color: white;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

export const StyledButtonAddWrapper = styled.div`
    margin-top: 1rem;
`

export const StyledBackWrapper = styled.div`
    position: absolute;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 100%;
    height: 100%;
    background-color: white;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
