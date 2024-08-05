import './App.css';
import Game from './component/Game.js';
import GameTwo from './component/GameTwo.js';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home.js';

import NavBar from './component/Layout/NavBar.js';
import Header from './component/Layout/Header.js';
/* Module not found: Error: Can't resolve ◀ 오류가 발생한 위치와 이유를 알 수 있는 오류 출력문이다.*/

import TodoList from './component/TodoList.js';
import TicTacToe from './component/TicTacToe/TicTacToe.js';
import TicTacToeTwo from './component/TicTacToe/TicTacToeTwo.js';
import TypingTest from './component/TypingTest.js';
import {MovieRating as MovieRating} from './component/Movie/MovieRating.js';
import { Footer as Footer } from './component/Layout/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>

      <Routes> {/* 링크 모음 v6 부터 Switch ▶ Routes 라는 명칭으로 바뀌었다.*/}
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game2" element={<GameTwo />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tictactoe" element={<TicTacToe/>}/>
        <Route path="/ttt-two" element={<TicTacToeTwo/>}/>
        <Route path="/typingtest" element={<TypingTest/>}/>
        <Route path="/movierating" element={<MovieRating/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
