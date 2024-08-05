import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                {/* 
                HTML 에서는 
                <a href="/">Home</a> 
                형식으로 작성했다면

                React 에서는 
                <Link to="/">Home</Link> 
                형식으로 작성해준다.

                 a 가 Link 와 같고,
                href 가 to 와 같다.
                */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;