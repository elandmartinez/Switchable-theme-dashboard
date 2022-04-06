import "../styles/vars.css";
import styled from "@emotion/styled";

export const App = styled.div`
    width: 100vw;
    min-width: 320px;
    min-height: 100vh;
    position: relative;
    background-color: ${props => props.theme.mainBackground};
    color: ${props => props.theme.defaultTextColor};
    font-family: 'Inter', sans-serif;

    & * {
        box-sizing: border-box;
    }
`;

