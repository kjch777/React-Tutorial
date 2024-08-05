import React, {useState} from "react";
import { Link } from "react-router-dom";

const GameTwo = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() *30) +1);
    const [attempts, setAttempts] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = parseInt(guess, 10);

        setAttempts(attempts +1);

        if(userGuess === number) {
            setMessage('축하합니다! 숫자를 맞췄습니다!');
            setIsCorrect(true);
        } else if (userGuess > number) {
            setMessage('입력한 숫자가 너무 큽니다!');
        } else {
            setMessage('입력한 숫자가 너무 작습니다!');
        }

        setGuess('');
    }
    const handleRestart = (e) => {
        // 재시작하기 버튼을 클릭하면, 랜덤 숫자를 다시 생성하고
        const newNumber = Math.floor(Math.random() *30) +1;

        // 모든 값 초기화 해주기
        setNumber(newNumber); // 맞춰야 할 숫자 새로 집어넣기
        setAttempts(0); // 맞추기 위해 시도한 횟수 0으로 초기화
        setMessage(''); // 출력 메시지 없애주기
        setGuess(''); // input 안에 작성했던 숫자도 모두 지워주기
        setIsCorrect(false); // 사용자가 정답을 맞추기 전 상태로 되돌리기
    }
    return (
        <div>
            <h1>삼십고개</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" value={guess} onChange={handleChange} placeholder="1에서 30사이의 숫자 입력하기"/>
                &nbsp; <button type="submit">추측하기</button>
            </form>
                <p>{message}</p>
                {isCorrect ? (<Link to="/game"><button>처음으로</button></Link>) : (<button onClick={handleRestart}>재시작하기</button>)}
        </div>
    )
}
export default GameTwo;