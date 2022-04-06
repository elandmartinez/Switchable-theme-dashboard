import "../../styles/vars.css";
import styled from "@emotion/styled"

export const LowerSectionCont = styled.div`
    width: 90%;
    max-width: 1150px;
    margin: auto;
    bottom: 20px;
    position: relative;
`;

export const LowerCardsCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
    margin-top: 20px;
`;

export const LowerCardsContTitle = styled.h2`
    font-size: 27px;
    text-align: start;
`;