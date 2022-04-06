import * as S from "./AppStyles.js";
import Header from "../components/Header/index.js";
import UpperCardsCont from "../components/UpperCardsCont/index.js";
import LowerSectionCont from "../components/LowerSectionCont/index.js";
import { ThemeProvider } from "@emotion/react";
import { useAppProvider } from "../Context/AppProvider";
import { themes } from "../utils/utils.js";

const App = () => {
  const { darkModeOn } = useAppProvider();

  return (
      <ThemeProvider theme={darkModeOn ? themes.dark : themes.light}>
        <S.App>
          <Header followers="23,004"/>
          <UpperCardsCont />
          <LowerSectionCont />
        </S.App>
      </ThemeProvider>
  );
}

export default App;
