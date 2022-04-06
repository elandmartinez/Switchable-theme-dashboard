import * as S from "./ToggleSwitchStyles.js";
import { useAppProvider } from "../../Context/AppProvider.js"; 

const ToggleSwitch = () => {
    const { setDarkModeOn } = useAppProvider();

    const handleCheckboxClick = (event) => {
        const checkbox = event.target;
        if(checkbox.checked) {
            return setDarkModeOn(true)
        } else {
            setDarkModeOn(false)
        }
    }

    return (
        <S.CheckInputCont>
            <S.CheckInput type="checkbox" onClick={handleCheckboxClick}/>
            <S.SwitchSlider></S.SwitchSlider>
        </S.CheckInputCont>
    )
}

export default ToggleSwitch;