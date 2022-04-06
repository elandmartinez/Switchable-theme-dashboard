import "../../styles/vars.css";
import styled from "@emotion/styled";

export const LowerCard = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.cardBackground};
    padding: 20px;
    border-radius: 5px;
`;

export const PageStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: ${props => props.theme.textColor};
`;

export const PageStatsNumber = styled.h1`
    color: ${props => props.theme.defaultTextColor};
`;

export const MediaInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
`;

export const MediaInfoPercentageStatsIncrement = styled.div`
    display: flex;
    align-items: center;
    color: var(--lime-green);
`;

export const MediaInfoPercentageStatsDecrement = styled.div`
    display: flex;
    align-items: center;
    color: var(--bright-red);
`;

export const UpArrow = styled.svg`
    margin-right: 3px;
`

export const DownArrow = styled.svg`
    margin-right: 3px;
`