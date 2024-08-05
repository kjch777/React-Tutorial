import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Game = () => {

    // 맞출 숫자를 입력하는 guess
    const [guess, setGuess] = useState('');
    
    // 맞췄는지 틀렸는지 전달하는 message
    const [message, setMessage] = useState('');

    // 1 ~ 10 중 하나의 숫자를 랜덤으로 출력하기(= 사용자가 맞춰야 하는 수)
    // Math.random(): 0.0 ~ 1.0 사이의 정수 또는 실수를 랜덤하게 출력
    // 0 ~ 9 까지 출력하기 때문에, +1 을 해서 1 ~ 10 까지로 변경
    // Math.floor 로 실수를 정수화
    const [number, setNumber] = useState(Math.floor(Math.random() *10) +1);

    // 숫자를 맞추려고 시도한 횟수(맨 처음에는 시도하지 않은 상태이기 때문에 0 이다.)
    const [attempts, setAttempts] = useState(0);

    // 사용자가 정답을 맞추면, 다음 단계로 이동하는 버튼이 보이게 코드 작성하기
    const [isCorrect, setIsCorrect] = useState(false); // 정답을 맞추기 전이기 때문에 false 이다.

    // 사용자가 숫자를 맞추려고 시도할 때마다, 숫자를 새로 세팅해서 저장해놓기
    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    // <input type='number' value={guess} onChange={handleChange} placeholder='1에서 10사이의 숫자 입력하기'/>
    // <input type='number' value={guess} onChange={(e) => {setGuess(e.target.value);}} placeholder='1에서 10사이의 숫자 입력하기'/>

    const handleSubmit = (e) => {
        e.preventDefault(); // 인터넷이 가지고 있는 기본 동작을 일단 방지하는 역할을 한다.
        // submit: 페이지(데이터) 를 서버로 전송하거나, 페이지가 다시 실행되는 것을 막아주는 역할을 한다.

        const userGuess = parseInt(guess, 10); // 숫자가 아닌 문자로 된 문자열일 가능성이 있기 때문에, 문자열을 정수로 변환해주는 것이다.
     // const userGuess = parseInt(숫자로 바꿀 값, 진수);
     // 따라서, userGuess == 사용자가 입력한 값을 숫자로 사용할 수 있게 되는 것이다.

     setAttempts(attempts + 1); // 맞추려고 입력한 숫자를 제출할 때마다, 제출(시도) 횟수 1씩 증가시키기

     // 만약, 숫자를 맞췄다면
     if(userGuess === number) {
        setMessage('축하합니다! 숫자를 맞췄습니다!');
        setIsCorrect(true);
     } else if (userGuess > number) {
        setMessage('입력한 숫자가 너무 큽니다!');
     } else {
        setMessage('입력한 숫자가 너무 작습니다!');
     }

     // input 에 작성된 값 지우기
     setGuess('');
    }

    const handleRestart = () => {
        // 재시작하기 버튼을 클릭하면, 랜덤 숫자를 다시 생성하고
        const newNumber = Math.floor(Math.random() *10) +1;

        // 모든 값 초기화 해주기
        setNumber(newNumber); // 맞춰야 할 숫자 새로 집어넣기
        setAttempts(0); // 맞추기 위해 시도한 횟수 0으로 초기화
        setMessage(''); // 출력 메시지 없애주기
        setGuess(''); // input 안에 작성했던 숫자도 모두 지워주기
        setIsCorrect(false); // 사용자가 정답을 맞추기 전 상태로 되돌리기
    }

    return (
        <div>
            <h1>스무고개</h1>
            <form onSubmit={handleSubmit}>
                <input type='number' value={guess} onChange={handleChange} placeholder='1에서 10사이의 숫자 입력하기'/>
                &nbsp; <button type='submit'>추측하기</button>
            </form>
                {/* message: 숫자를 맞췄는지 틀렸는지 확인하는 메시지*/}
                <p>{message}</p>

                {/* 
                    JavaScript 에서 제일 많이 사용하는 if 문은 삼항연산자이다.
                    상황 ? true 일 때 실행할 내용 : false 일 때 실행할 내용
                    true 혹은 false 에서 실행할 내용이 많다면, ( ) 로 묶어서 표현한다.
                */}
                {isCorrect ? 
                (<Link to="/game2"><button>2단계로</button></Link>) : 
                (<button onClick={handleRestart}>재시작하기</button>)}
        </div>
    )

}

export default Game;