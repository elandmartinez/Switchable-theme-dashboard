import * as S from "./LowerCardStyles.js";
import Icon from "../Icons/Icon.jsx";
import { PropTypes } from "prop-types";

const LowerCard = ({ socialMedia, stats, percentageStats, statsIncrement, statsMeasurement }) => {
    let MediaInfoPercentageStats;

    if(statsIncrement) {
        MediaInfoPercentageStats = S.MediaInfoPercentageStatsIncrement
    } else {
        MediaInfoPercentageStats = S.MediaInfoPercentageStatsDecrement
    }

    return (
        <S.LowerCard>
            <S.PageStats>
                <p>{statsMeasurement}</p>
                <S.PageStatsNumber>{stats}</S.PageStatsNumber>
            </S.PageStats>
            <S.MediaInfo>
                <Icon iconName={socialMedia + "Icon"} iconClassName={socialMedia + "-icon"} />
                <MediaInfoPercentageStats>
                    <Icon
                        iconName={statsIncrement? "upArrow" : "downArrow"}
                        iconClassName={statsIncrement? "up-arrow" : "down-arrow"}
                    />
                    <p>
                        {percentageStats}
                        %
                    </p>
                </MediaInfoPercentageStats>
            </S.MediaInfo>
        </S.LowerCard>
    )
}

LowerCard.propTypes = {
    socialMedia: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    percentageStats: PropTypes.string.isRequired,
    statsIncrement: PropTypes.bool.isRequired,
    statsMeasurement: PropTypes.string.isRequired
}

export default LowerCard;