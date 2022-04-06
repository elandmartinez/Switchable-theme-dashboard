import "../../styles/vars.css";
import styled from "@emotion/styled";

export const UpperCardsCont = styled.div`
    width: 90%;
    max-width: 1150px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    gap: 25px;
    margin: auto;
    position: relative;
    bottom: 50px;

    @media(min-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;
