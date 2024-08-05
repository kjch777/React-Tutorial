import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/game">숫자 맞추기 게임</Link></li>
                {/* 1단계를 통과해야 2단계 링크를 보여줄 것이기 때문에, 2단계 링크는 작성하지 않는다.*/}

                <li><Link to="/todolist">To Do List</Link></li>
                <li><Link to="/tictactoe">Tic Tac Toe</Link></li>
                <li><Link to="/typingtest">타자 경연대회</Link></li>
                <li><Link to="/movierating">평점 좋은 영화들</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;