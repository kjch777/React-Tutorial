import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './TicTacToe.css';

/*
./ ▶ 현재 폴더에서 가져오는 파일, 동일한 폴더 위치에서 다른 파일을 가져오는 것
../ ▶ 현재 폴더를 감싸고 있는 상위 폴더에서 다른 파일을 가져오는 것
*/

/*
import React, {useState, useEffect} from 'react';
useEffect(() => {
    // TicTacToe.js 가 실행되면, 특정 기능 시작하기
}, [])
*/

const shuffleArray = (array) => {
    // sort: 랜덤으로 나온 값을 정렬한다.
    // Math.random() -0.5: 배열을 랜덤하게 섞을 때 자주 사용한다. ◀ -0.5 ~ 0.5 사이 생성
    // 만약, -0.5 를 붙이지 않는다면, Math.random() 은 0.0 ~ 0.999999999... 사이 값
    // 0.5 범위 지정용
    return array.sort(() => Math.random() -0.5);
}

const TicTacToe = () => {
    // numbers: 1 ~ 9 까지의 숫자가 섞인 배열
    // ...Array(9) 숫자가 담길 그릇을 9개 만듦
    // .keys() 숫자를 가지고 옴
    // 가지고 올 숫자: 0 => 0 +1 ◀ 1 ~ 9 까지 생성
    // 1 ~ 9 까지 생성된 숫자를 배열 랜덤 섞기를 이용, 숫자가 담긴 그릇을 섞는 것이다.
    const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n +1)));

    // 사용자가 클릭해야 하는 다음 숫자를 나타냄
    const [nextNumber, setNextNumber] = useState(1); // 사용자가 맨 처음 클릭해야 하는 숫자는 1이기 때문이다.
    
    // 게임의 상황에 따라, 사용자에게 보여줄 메시지 표현
    const [message, setMessage] = useState(''); // 맨 처음에는 보여줄 메시지가 없기 때문에 빈 공간이다.

    // 사용자가 정답을 맞추면, 다음 단계로 이동하는 버튼이 보이게 코드 작성하기
    const [isCorrect, setIsCorrect] = useState(false); // 정답을 맞추기 전이기 때문에 false 이다.

    const [timer, setTimer] = useState(5);
    const [timeOutMsg, setTimeOutMsg] = useState('');

    useEffect(() => {
        let countDown;
        if(timer > 0) {
            countDown = setTimeout(() => {
                setTimer(timer -1);
            }, 500);
        } else if(timer === 0) {
            // alert("시간 초과, 게임 종료.");
            setTimeOutMsg("시간 초과, 게임 종료.");
            setIsCorrect(true);
        }
    }, [timer]);

    const handleNumberClick = (number) => {

        // 만약, 사용자가 현재 클릭해야 하는 숫자와, 실제 클릭한 숫자가 서로 일치한다면
        if(number === nextNumber) {
            if(number === 9) {
                setMessage('승리!');
                // setIsCorrect(true);
                
                // 9 까지 왔으면 다음 숫자를 10 으로 만들어주기
                setNextNumber(nextNumber +1);
            } else {
                setNextNumber(nextNumber +1);
            }
        } else {
            setMessage('패배!');
        }
    }

    const handleRestart = () => {
        setNumbers(shuffleArray([...Array(9).keys()].map(n => n +1))); // 초기 숫자 다시 설정
        setNextNumber(1); // 사용자가 클릭해야 하는 숫자 다시 설정
        setMessage(''); // 초기 메시지 다시 설정
        setIsCorrect(false); // 사용자가 정답을 맞추기 전 상태로 되돌리기
        setTimer(5);
    }

    return (
        <div className='tictactoe-container'>
            <h1>Tic Tac Toe</h1>
            {isCorrect ?
            (<p>{timeOutMsg}</p>) :
            (<div className='timer'>남은 시간: {timer}초</div>)}
            <div className='tictactoe-grid'>
                {numbers.map((number) => (<button className='tictactoe-button' key={number} onClick={() => handleNumberClick(number)}>{number}</button>))}
            </div>
            <p className='message'>{message}</p>
            
            {/* 1단계를 통과했을 때만 2단계로 이동하는 버튼 보여주기
                nextNumber 숫자 값이 10 일 때, 2단계로 이동하는 버튼이 보이게 설정
                */}
            
            {nextNumber > 9 && (<Link to="/ttt-two"><button className='ttt-button'>2단계로</button></Link>)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='ttt-button' onClick={handleRestart}>게임 다시하기</button>
        </div>
    )
}

export default TicTacToe;