import React, {useState} from 'react';
import TopMenu from "./TopMenu";
import {useHistory} from "react-router-dom";

function Login() {
    const [logIn, setLogIn] = useState(true);


    const history = useHistory();

    function handleClickLogOut() {
        history.push("blog");
        setLogIn(false);
        ;
    }
    <TopMenu/>

    return (
        <button type="button" className="login-button"
                onClick={handleClickLogOut}>{logIn ? 'Uitloggen' : 'Inloggen'}</button>
    )
};
export default Login;