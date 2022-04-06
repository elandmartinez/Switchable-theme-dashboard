import styled from "@emotion/styled";
import "../../styles/vars.css";

export const CheckInputCont = styled.div`
    width: 50px;
    height: 22px;
    position: relative;
    margin-left: 10px;

    &::after {
        width: 20px;
        height: 20px;
    }
`;

export const SwitchSlider = styled.div`
    border-radius: 20px;
    background-image: var(--toggle);
    position: absolute;
    transition: all .1s;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &::before {
        content: "";
        background-color: ${props => props.theme.cardBackground};
        width: 35%;
        height: 80%;
        border-radius: 50%;
        position: absolute;
        transition: .4s;
        top: 2px;
        left: 2px;
    }
`;

export const CheckInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: 1;

    &:checked + ${SwitchSlider} {
        background-image: var(--toggle-active);
    }

    &:checked + ${SwitchSlider}::before {
       transform: translateX(28px);
    }

`;