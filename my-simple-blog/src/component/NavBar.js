import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/todoList">Todo List</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;