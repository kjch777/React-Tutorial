import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './TicTacToe.css';

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

/* TicTacToeTwo 컴포넌트 시작 위치*/
const TicTacToeTwo = () => {
    const [numbers, setNumbers] = useState(shuffleArray([...Array(16).keys()].map(n => n + 1)));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [timer, setTimer] = useState(10); // 맨 처음 초기 시간 설정
    
    /*
    useEffect(function 기능명() => {어떤 기능이 작동해야 하는지}, [어떤 값이 변경될 때마다 function 기능이 작동해야 하는지]);
    useEffect(              () => { },                         [ ]);
    useEffect(() => {}, [numbers]); // numbers 숫자 값이 변경될 때마다, function 기능 작동
    */

    /*
    useEffect(() => {/* 사용자가 입력한 검색어가 들어올 때마다, 
                        실시간으로 입력된 검색어와 일치하는 결과들 출력하기
                        끝말잇기 라는 단어로 시작하는 결과 출력}, [끝말잇기]);
    */

    useEffect(() => {
        let countDown;
        if(timer > 0) { // 남은 시간이 0 보다 크다면, 숫자(시간) 를 점차적으로 줄이겠다.
            // 시간이 점점 줄어드는 효과를 만들고, 적용
            countDown = setTimeout(() => {
                setTimer(timer -1);
            }, 1000);

        } else if (timer === 0) { // 남은 시간이 없다면
            // alert("시간 초과, 게임 종료.");
        }
        console.log("useEffect Hook 은, 효과가 사용자에게는 보이지 않기 때문에, F12 개발자 모드 console 창에서 확인해야 한다.");
        console.log("useEffect 는 TicTacToeTwo.js 가 실행되면 자동으로 시작된다. F12 버튼을 눌러, useEffect 시작 및 위의 콘솔 로그들이 전부 보이는지 확인하기");
    });

    const handleNumberClick = (number) => {
        if(number === nextNumber) {
            if(number === 16) {
                setMessage('승리!');
                // setIsCorrect(true);
                setNextNumber(nextNumber + 1);
            } else {
            setNextNumber(nextNumber + 1);
            }
        } else {
            setMessage('패배!');
        }
    }

    const handleRestart = () => {
        setNumbers(shuffleArray([...Array(16).keys()].map(n => n + 1)));
        setNextNumber(1);
        setMessage('');
        setIsCorrect(false);
        setTimer(10); // 다시 시작 버튼에도 timer 를 10초로 설정해주어야 한다.
    }

    return (
        <div className="tictactoe-container">
            <h1>Tic Tac Toe Two</h1>
            <div className="timer">남은 시간: {timer}초</div>
            <div className="ttt-grid">
                {numbers.map((number) => (<button className="tictactoe-button" key={number} onClick={() => handleNumberClick(number)}>{number}</button>))}
            </div>
            <p className="message">{message}</p>

            
            {nextNumber > 16 && (<Link to="/tictactoe"><button className="ttt-button">처음으로</button></Link>)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="ttt-button" onClick={handleRestart}>다시하기</button>
        </div>
    )

}

export default TicTacToeTwo;