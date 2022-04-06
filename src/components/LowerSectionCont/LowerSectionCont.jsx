import LowerCard from "../LowerCard/index.js";
import * as S from "./LowerSectionContStyles.js";

const LowerSectionCont = () => {
    return (
        <S.LowerSectionCont>
            <S.LowerCardsContTitle>Overview - Today </S.LowerCardsContTitle>
            <S.LowerCardsCont>
              <LowerCard
                socialMedia="facebook"
                stats="87"
                percentageStats="3"
                statsIncrement={true}
                statsMeasurement="Page Views"
              />
              <LowerCard
                socialMedia="facebook"
                stats="52"
                percentageStats="2"
                statsIncrement={false}
                statsMeasurement="Likes"
              />
              <LowerCard
                socialMedia="instagram"
                stats="5462"
                percentageStats="2257"
                statsIncrement={true}
                statsMeasurement="Likes"
              />
              <LowerCard
                socialMedia="instagram"
                stats="52k"
                percentageStats="1375"
                statsIncrement={true}
                statsMeasurement="Profile Views"
              />
              <LowerCard
                socialMedia="twitter"
                stats="117"
                percentageStats="303"
                statsIncrement={true}
                statsMeasurement="Retweets"
              />
              <LowerCard
                socialMedia="twitter"
                stats="507"
                percentageStats="553"
                statsIncrement={true}
                statsMeasurement="Likes"
              />
              <LowerCard
                socialMedia="youTube"
                stats="107"
                percentageStats="19"
                statsIncrement={false}
                statsMeasurement="Likes"
              />
              <LowerCard
                socialMedia="youTube"
                stats="1407"
                percentageStats="12"
                statsIncrement={false}
                statsMeasurement="Total Views"
              />
            </S.LowerCardsCont>
          </S.LowerSectionCont>
    )
}

export default LowerSectionCont;
