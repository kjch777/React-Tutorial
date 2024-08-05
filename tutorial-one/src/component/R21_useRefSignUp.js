import React, {useRef, useEffect} from 'react';

function SignUpForm() {

 /* 1. const [emailRef, setEmailRef] = 초기값;
    1.       [초기값변수, 변경해서초기값에넣어줄변수] = 초기값;
    
    2. const emailRef = useRef(null); 
    2. 초기값만설정하는변수 = 새로고침 하더라도, 나중에 값이 변경 되더라도 값을 고정하겠다.(어떤 초기값을 넣어줄 것인지)*/

    const emailRef = useRef(null);
    /* 
    const emailRef = useRef(null);
    emailRef {
        current: null
    }
    emailRef 는 useRef(null) 값을 설정 하자마자
    emailRef 안에는
    emailRef {
        current: null
    } 이 자동으로 생성된다.

    current 가 자동으로 생성된다.

    const pwRef = useRef(1);
    pwRef {
        current: 1
    }
    */
    // 맨 처음에는 null 값을 갖지만, 나중에는 특정 값으로 변경될 것
    // React 가 새로고침 되어도, 변경된 특정 값을 유지할 수 있도록 useRef 로 설정해준 것이다.

    // useEffect 를 사용, [ ] 안의 값을 비워주어, 최초 1회만 실행하는 기능 설정
    useEffect(() => {
        // 만약, SignUpForm 이 실행되면, 그 즉시 수행 할 기능 설정
        if(emailRef.current) {
            emailRef.current.focus(); // 맨 처음, 입력 창이 null 인 값에 자동으로 초점 이동하게
        }
    }, []); // 비어있는 배열 [] 로 넘겨주어, 최초 1회만 실행하게 만들기

    // useRef 로 설정한 태그 값에서, current 는 기본으로 null 값을 갖고 있다. current: 현재

    return (
        <div>
            <>
                <h2>회원 가입</h2>
                <form>
                    <label>이메일</label>
                    <input type="email" ref={emailRef} placeholder='이메일을 입력하세요.' />
                    <label>비밀번호</label>
                    <input type='password' placeholder='비밀번호를 입력하세요.' />
                </form>
            </>
        </div>
    )
}

export default SignUpForm;