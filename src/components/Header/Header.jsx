import * as S from "./HeaderStyles.js";
import ToggleSwitch from "../ToggleSwitch/index.js";
import { useAppProvider } from "../../Context/AppProvider";
import { PropTypes } from "prop-types";

const Header = ({ followers }) => {

    const { lightModeOn } = useAppProvider();
    console.log(lightModeOn, "hello");

    return (
        <S.HeaderSection>
            <S.Header>
                <S.HeaderText>
                    <S.HeaderTextTitle>
                        Social Media Dashboard
                    </S.HeaderTextTitle>
                    <S.HeaderTextFollowers>
                        Total followers: {followers}
                    </S.HeaderTextFollowers>
                </S.HeaderText>
                <S.switchCont>
                    <S.checkInputLabel> Dark mode </S.checkInputLabel>
                    <ToggleSwitch />
                </S.switchCont>
            </S.Header>
        </S.HeaderSection>
    )
}

Header.propTypes = {
    followers: PropTypes.string.isRequired
}

export default Header;