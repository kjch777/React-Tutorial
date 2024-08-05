import React, {useRef, useEffect} from 'react';

// 만약, export default 를 컴포넌트 시작 부분에
// 한 번에 작성하고 싶다면
/* 
const 로 컴포넌트가 시작하는 경우
export const 컴포넌트명 = () => {
    }

function 으로 컴포넌트가 시작하는 경우
export default function 컴포넌트명 () {
}
*/
export const RefEx = () => { // ◀ named export 방식
    const pwRef = useRef(null);

    useEffect(() => {
        if(pwRef.current) {
            pwRef.current.focus();
        }
    })

    return (
        <>
            <h2>회원 가입</h2>
            <form method='post'>
                <label>ID</label>
                <input type='text' placeholder='아이디를 입력하세요.' required />
                <label>PW</label>
                <input type='password' ref={pwRef} placeholder='비밀번호를 입력하세요.' required />
            </form>
        </>
    )
}

// export default RefEx;