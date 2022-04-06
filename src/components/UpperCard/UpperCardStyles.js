import "../../styles/vars.css";
import styled from "@emotion/styled";

const UpperCardStyled = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.textColor};
    border-radius: 3px;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 3px;
        background: ${props => props.background};
        position: absolute;
        top: 0px;
        border-radius: 3px 3px 0 0;
    }
`;

const UpperCardFollowers = styled.div`
    text-align: center;
`;

const UpperCardFollowersNumber = styled.p`
    font-size: 45px;
    font-weight: 600;
    color: ${props => props.theme.defaultTextColor};
`;

const UpperCardFollowersText = styled.p`
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 5px;
`;

const UpperCardMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
`;

const UpperCardMediaName = styled.p`
    margin-left: 5px;
`;

const UpperCardStockStatusUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--lime-green);
    font-size: 12px;
    font-weight: 600;
`;

const UpperCardStockStatusDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--bright-red);
    font-size: 12px;
    font-weight: 600;
`;

const UpperCardStocks = styled.p`
    margin-left: 5px;
`;

export {
    UpperCardStyled,
    UpperCardMedia,
    UpperCardFollowersNumber,
    UpperCardFollowersText,
    UpperCardFollowers,
    UpperCardStockStatusUp,
    UpperCardStockStatusDown,
    UpperCardMediaName,
    UpperCardStocks
};