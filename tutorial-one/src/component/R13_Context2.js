import React, {createContext, useContext, useState} from "react";

/* 1. Context 객체 생성*/
const TestContext = createContext();

/* 4. 후손 컴포넌트 생성*/
const 후손 = () => {
    const {number, setNumber} = useContext(TestContext);

    return (
        <>
            <h3>후손 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => { setNumber(e.target.value) } }/>
        </>
    )
}

/* 3. 자식 컴포넌트 생성*/
const 자식 = () => {
    // TestContext 에서 제공된 값을 여기서 사용하겠다는 것이다.
    const {number, setNumber} = useContext(TestContext); // [ ] 에서 { } 로 바꾸니까 실행됐다.

    return (
        <>
            <h3>자식 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => { setNumber(e.target.value) } }/>
        </>
    )
}

/* 2. 부모 컴포넌트 생성*/
const 부모 = () => {
    // 숫자 상태 변수 선언
    const [number, setNumber] = useState(0); // number 변수 초기값 == 0

    /* 
    Context 는, 기본적으로 1개의 값만 제공할 수 있다.
    만약, 2개 이상의 값을 제공하고 싶다면, { }, [ ] 로 묶어서 작성해주면 된다.

    <TestContext.Provider value={ {number, setNumber} }>
    number 와 setNumber 를 {number, setNumber} 형식으로 작성하면, 아래와 같이 변환되어 전달된다.
    {"number" : number, "setNumber : setNumber"}
    {"number" :    0,   "setNumber : 변환될 값"}
    */
    return (
        <TestContext.Provider value={ {number, setNumber} }>
            <h1>
                부모:
                {/* 부모 컴포넌트의 현재 값 출력하기*/}
                <span className="red">{number}</span>
            </h1>
            <자식/>
            <후손/>
        </TestContext.Provider>
    )
}

export default 부모;