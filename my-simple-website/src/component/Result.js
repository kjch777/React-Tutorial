import React from "react";
import './TypingTest.css';

const result = ({typingText, checkRes} ) => {
    // isCorrect 는 텍스트로 타이핑한 값과 결과 확인이 서로 일치하는지 확인하는 것이다.
    const isCorrect = typingText === checkRes;

    return (
        <div className="result">
            <h2>결과</h2>
            {isCorrect ? (<p>정답입니다.</p>) : (<p>오답입니다.</p>)}
        </div>
    );
};

export default result;