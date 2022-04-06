import styled from "@emotion/styled";

export const HeaderSection  = styled.div`
    width: 100%;
    border-radius: 0 0 20px 20px;
    background-color: ${props => props.theme.headerBackground};
`;

export const Header = styled.header`
    width: 90%;
    max-width: 1150px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 35px 0;
    margin: auto;

    @media(min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 75px;
        height: 175px;
    }
`;


export const HeaderText = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid var(--dark-grayish-blue);
    margin-bottom: 20px;

    @media(min-width: 600px) {
        width: 60%;
        margin: 0 0 0 0;
        border: 0;
    }
`;


export const HeaderTextTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const HeaderTextFollowers = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 14px;
    font-weight: 600;
`;

export const switchCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: center;

    @media(min-width: 600px) {
        width: 150px;
    }
`;

export const checkInputLabel = styled.p`
    height: 20px;
    color: ${props => props.theme.textColor};
`;
