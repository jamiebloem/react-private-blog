import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';


function TopMenu() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <h1>Private Blog</h1>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    {isAuthenticated === true &&
                    <li>
                        <NavLink to="/Blog" activeClassName="active-link">Blog</NavLink>
                    </li>
                    }
                    {isAuthenticated ? (
                    <li>
                        <NavLink to="/Login" activeClassName="active-link">Login</NavLink>
                    </li>
                    ) :
                        <li>
                            <NavLink to="/Login" activeClassName="active-link">Uitloggen</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;