import styled from "styled-components/macro";
import fontSize from "../../theme/fontSize";

export const StyledTitle = styled.h1`
    font-size: ${fontSize.header};
    margin-top: 27%;
`

export const StyledDeckContainer = styled.div`
    position: relative;
    margin: 2rem auto;
    height: 500px;
    width: 800px;
    border: 5px solid black;
    color: black;
    background-color: white;
    border-radius: 4px;
    text-align: center;
`

export const StyledCardWrapper = styled.div`
    margin: 2rem auto 1rem auto;
    height: 500px;
    width: 800px;
    background-color: transparent;
    color: black;
`
export const StyledButtonWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
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
    p{
        margin-top: 30%;
    }

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
    p {
        text-align: start;
        margin: 4rem 2rem;
    }
`
