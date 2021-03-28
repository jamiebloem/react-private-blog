import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import TopMenu from './componenten/TopMenu';
import Blog from './componenten/Blog';
import Blogpost from './componenten/Blogpost';
import Login from './componenten/Login';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);

    return (
        <>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <p>Welcome to this Blog</p>
                </Route>
                <Route path="/Blog">
                    <Blog/>
                </Route>
                <Route path="/Blogpost/:id">
                    <Blogpost/>
                </Route>
            <Route path="/Login">
                {isAuthenticated === true &&
                <Login/>
                }

            </Route>
            </Switch>
        </>
    );
}

export default App;
