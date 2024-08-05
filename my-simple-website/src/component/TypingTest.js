import React, {useState, useEffect} from "react";
import './TypingTest.css';
import Result from './Result.js';
import { Link } from "react-router-dom";

// 문제는 TypingContest 컴포넌트 바깥으로 옮겨, 개별 사용할 것
const typingQue = ['사과는 맛있다.', // 1단계 문제 0번
                   '사실 사과는 맛없다.', // 2단계 문제 1번
                   '오재진 인성 스레기',
                   '조원기 인성 더 스레기',
                   '제발 파이널 원기랑 같은 조'
];

// 클라이언트(사용자) 가 입력한 값이 일치하는지 여부를 확인 후, Result.js 에 결과를 보여주는 게임 만들기
const TypingContest = () => {
    const [typingText, setTypingText] = useState(''); // 맨 처음, 입력 창은 빈 공간이다.
    const [checkRes, setCheckRes] = useState(false); // 맨 처음, 맞춘 것이 없으니 false
    
    const [isCorrect, setIsCorrect] = useState(false);
    const [timer, setTimer] = useState(10);
    const [timeOutMsg, setTimeOutMsg] = useState('');
    const [timeRes, setTimeRes] = useState(false);

    // 맨 처음 시작하는 문제의 번호는 0번
    const [startQue, nextQue] = useState(0);


    const nowText = typingQue[startQue]; // 0번 문제부터 시작
    // typingQue ▶ nowText 로 변경하여, 각각의 typingQue 를 비교할 것

    const changValue = (e) => {
        setTypingText(e.target.value);

        if(e.target.value === nowText) { // nowText
            setCheckRes(true);
        }
    }

    const nextStep = () => {
        setTypingText('') // 다음 문제로 이동할 때, 기존에 입력했던 정답 지워주기
        setCheckRes(false);

        // 만약, 2문제 중 1문제라면, 다음 문제로 넘어가기
        if(startQue < typingQue.length -1) { // index 가 0 부터 시작하기 때문에, length 에 -1 을 해준 것이다.
            nextQue(startQue +1);
        } else { // 만약, 2문제 모두 맞췄다면, 작동할 코드 작성하기
            alert('모두 맞췄습니다!');
            reStart();
        }
    }

    useEffect(() => {
        let countDown;
        if(timer > 0) {
            countDown = setTimeout(() => {
                setTimer(timer -1);
            }, 1000);
        } else if(timer === 0) {
            setTimeOutMsg("시간 초과, 게임 종료.");
            setIsCorrect(true);
            setTimeRes(true);
        }
    }, [timer]);

    const reStart = () => {
        setTypingText('');
        setCheckRes(false);
        setIsCorrect(false);
        setTimer(10);
        setTimeOutMsg('');
        setTimeRes(false);
    }

    return (
        <div className="typing-test">
            <h1>타자 경연대회</h1>
            <p>오늘의 문제: {nowText}</p> {/* nowText*/}
            {isCorrect ?
            (<p>{timeOutMsg}</p>) :
            (<div className="timer">남은 시간: {timer}초</div>)
            }
            <div className="typing-container">
                {/* value={초기에 빈 공간} onChange={작성한 값으로 변경} disabled={정답일 때, 입력한 값을 수정하지 못하게 막아버리기}*/}
                <img src="/hancom.jpg" className="character-img"/>
                <textarea value={typingText} onChange={changValue} disabled={checkRes} />
                {/* 변경되지 않을 사진 ▶ public 에 위치
                    사진의 특정 값을 주기적으로 변경할 때 ▶ src*/}
            </div>
            {/* Result.js 파일에, inputText = typingText 와, correctText = typingQue 결과 전달*/}
            {checkRes && <Result inputText={typingText} correctText={nowText} />} {/* nowText*/}
            {checkRes && <button onClick={reStart}>다시 하기</button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {checkRes && <button onClick={nextStep}>다음 문제</button>}
        </div>
    )
}

export default TypingContest;