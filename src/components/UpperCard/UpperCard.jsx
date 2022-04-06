import * as S from "./UpperCardStyles";
import Icon from "../Icons/Icon";
import { PropTypes } from "prop-types";

const UpperCard = ({ followers, subscribers, mediaName, mediaStocks, stockIncrement, socialMedia }) => {
    let UpperCardStockStatus;

    if(stockIncrement){
        UpperCardStockStatus = S.UpperCardStockStatusUp;
    } else {
        UpperCardStockStatus = S.UpperCardStockStatusDown;
    }

    return (
        <S.UpperCardStyled background={"var(--" + socialMedia + ")"} >
            <S.UpperCardMedia>
                <Icon
                    iconName={socialMedia + "Icon"}
                    iconClassName={socialMedia + "-icon"}
                />
                <S.UpperCardMediaName>{mediaName}</S.UpperCardMediaName>
            </S.UpperCardMedia>
            <S.UpperCardFollowers>
                <S.UpperCardFollowersNumber>
                    {followers? followers : subscribers}
                </S.UpperCardFollowersNumber>
                <S.UpperCardFollowersText>
                    {followers? "FOLLOWERS" : "SUBSCRIBERS"}
                </S.UpperCardFollowersText>
            </S.UpperCardFollowers>
            <UpperCardStockStatus>
                {
                stockIncrement ?
                <Icon
                    iconName="upArrow"
                    iconClassName="up-arrow"
                />
                :
                <Icon
                    iconName="downArrow"
                    iconClassName="down-arrow"
                />}
                <S.UpperCardStocks>
                    {mediaStocks + " "}
                    Today
                </S.UpperCardStocks>
            </UpperCardStockStatus>
        </S.UpperCardStyled>
    )
}

UpperCard.propTypes = {
    followers: PropTypes.string,
    subscribers: PropTypes.string,
    mediaName: PropTypes.string.isRequired,
    mediaStocks: PropTypes.string.isRequired,
    stockIncrement: PropTypes.bool.isRequired,
    socialMedia: PropTypes.string.isRequired,
}

export default UpperCard;