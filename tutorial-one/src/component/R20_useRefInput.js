import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);
    
    // useEffect 에서, [] 값이 비어 있으면, R20_useRefInput.js 를 시작하자마자 특정 기능이나 효과가 발생한다.
    // R20_useRefInput.js 를 들어오자마자 input 창을 가리키게 설정하기
    useEffect(() => {
        if(inputRef.current) { // current 는 inputRef 가 설정된 태그의 값을 확인하는 것이다.
            inputRef.current.focus(); // focus: 초점
        }
    }, []);

    const clickButton = () => {
        if(inputRef.current.value === '') { // current 는 inputRef 가 설정된 태그의 값을 확인하는 것이다.
            inputRef.current.focus(); // focus: 초점
            // inputRef 라는 ref 값을 가진
            // current ◀ input 태그를 가리키고,
            // input 이 null 이라면, input 창 안을 중점으로 확인한다.
        }
    }

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={clickButton}>input 안에 값이 비어있으면, input 으로 위치 이동하기</button>
        </div>
    )
}

export default RefInputFocus;