import React from "react";

// return ( ) 안에 html 코드를 작성하지 않으면, 화면에 돌려 보낼 html 코드가 없기 때문에 화면에서 보이지 않는다.

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Portfolio</h1>
            </header>
        </div>
    )
}

export default Header;