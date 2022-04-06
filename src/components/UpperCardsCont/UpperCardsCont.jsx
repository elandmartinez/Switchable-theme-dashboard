import * as S from "./UpperCardsContStyles.js";
import UpperCard from "../UpperCard/index.js";

const UpperCardsCont = () => {
    return (
    <S.UpperCardsCont>
        <UpperCard
            followers="1987"
            mediaName="@nathanf"
            mediaStocks="12"
            stockIncrement={true}
            socialMedia="facebook"
        />
        <UpperCard
            followers="1044"
            mediaName="@nathanf"
            mediaStocks="99"
            stockIncrement={true}
            socialMedia="twitter"
        />
        <UpperCard
            followers="11K"
            mediaName="@realnathanf"
            mediaStocks="1099"
            stockIncrement={true}
            socialMedia="instagram"
        />
        <UpperCard
            subscribers="8239"
            mediaName="Nathan F."
            mediaStocks="144"
            stockIncrement={false}
            socialMedia="youTube"
        />
    </S.UpperCardsCont>
    )
}

export default UpperCardsCont;