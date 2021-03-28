import React, {useState} from 'react';
import TopMenu from "./TopMenu";

function Login() {
    const [logIn, setLogIn] = useState(true);
    const [logOut, setLogOut] = useState(false);


    <TopMenu/>
    return (

    <button color="light">
        {logIn ? 'LOG OUT' : 'LOG IN'}
    </button>
    )
}

export default Login;