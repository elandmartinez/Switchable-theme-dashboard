import {createContext, useContext} from "react";
import GetAppContext from  "../hooks/context.js";

const AppContext = createContext();

export function AppProvider (props) {
    const initialValue = GetAppContext();

    return (
        <AppContext.Provider value={initialValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppProvider () {
    let ctx = useContext(AppContext);

    if(!ctx) throw new Error("useAppProvider should be used inside AppProvider")

    return ctx;
}

export default AppContext;