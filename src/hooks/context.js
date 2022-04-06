import {useState} from "react";

const GetAppContext = () => {
    const [darkModeOn, setDarkModeOn] = useState(false);

    return {
        darkModeOn,
        setDarkModeOn,
    }
}

export default GetAppContext;