import React, {useState} from "react";

/* 1번 자식: ID 값을 가진 객체*/
const IDValue = (props) => {
    
    // 핸들러: 어떠한 값을 조정한다, 처리한다는 의미이다.
    const {handler} = props;

    return (
        <div className="wrapper">

            {/* htmlFor == for 속성과 같다*/}
            <label htmlFor="inputId">ID</label> &nbsp;
            {/* onChange == 값이 바뀌었을 때, 부모로부터 전달받은 함수 핸들러 수행*/}
            <input type="text" id="inputId" onChange={handler}/>
        </div>
    )
}

const PWValue = ({handler}) => {
    /* 
    위에서
    
    const IDValue = (props) => {
        const {handler} = props;
    
    형식으로 작성한 것과,

    여기서
    
    const PWValue = ({handler}) => {
    
    형식으로 작성한 것은,
    
    작성 방식이 다를 뿐, 똑같은 표현법이다.
    */
    return (
        <div className="wrapper">
            <label htmlFor="inputPw">PW</label> &nbsp;
            <input type="password" id="inputPw" onChange={handler}/>
        </div>
    )
}

const 부모예제 = () => {

    // 상태 변수 선언 (State, useState)
    const [id, setId] = useState(''); // 맨 처음, 빈 값을 넣어줄 때는 ' ' 를 사용한다.
    const [pw, setPw] = useState('');
    
    // 이벤트: 동작, 행위
    // 이벤트 리스너: 동작 감지
    // 이벤트 핸들러: 동작이 감지되었을 때, 수행할 기능이다.

    // idValueControl 이라는 이벤트 핸들러 기능 설정
    const idValueControl = (e) => { // e == event 의 줄임말 == 어떤 동작이나 행동을 포착하는 기능
        setId(e.target.value) // <IDValue handler={idValueControl}/> 에서, 값이 변경되는 타겟(target) 의 값(value) 을 가져오겠다는 의미의 코드이다.
    }

    const pwValueControl = (e) => {
        setPw(e.target.value)
    }

    return (
        
        // props 를 이용하여, 이벤트 핸들러용 함수를 자식 객체(컴포넌트) 로 전달하기
        <>
            {/* idValueControl 이라는 이벤트 리스너 생성*/}
            <IDValue handler={idValueControl}/>
            
            <PWValue handler={pwValueControl}/>

            {/* ID, PW 가 입력되지 않았다면 버튼 비활성화 하기
            <button disabled={id.length === 0 || pw.length === 0}>Login</button>
            
            disabled: 버튼을 클릭하지 못하게 비활성화 하는 속성으로,
                      input, textarea 태그에서도 사용 가능하다.
            */}
            <button disabled={id.length === 0 || pw.length === 0}>Login</button>
        </>
    )
}

export default 부모예제;