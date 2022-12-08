import styled from "styled-components/macro";

export const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const StyledContainer = styled.div`
    position: relative;
    width: 48%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    transition: 0.2s;
    cursor: pointer;
    :hover {
        transform: scale(1.1)};
        :hover #icon {
            opacity: 1;
        }
    }
`

export const StyledIconsContainer = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
    opacity: 0;
`