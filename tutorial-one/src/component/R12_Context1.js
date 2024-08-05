import React, {createContext, useContext} from "react";
/* 
Context 란,
Context 를 사용하면, 단계마다 일일이 props 를 넘겨주지 않아도 
컴포넌트(객체) 에 데이터를 제공할 수 있다.

createContext
    - 기본 값을 가질 수 있고, 이 기본 값은 해당 Context 를 사용하는 컴포넌트가, 
      상위 컴포넌트에서 제공하는 값을 찾을 수 없을 때 사용한다.

useContext
    - Context 의 현재 값을 가져올 때 사용한다.
      Context 에서 어떠한 값을 받아 현재 값으로 보여준다.

Provider
    - Context 를 사용하는 컴포넌트들에게 모두 동일한 값을 제공하는 컴포넌트이다.
      value 라는 prop 을 받아, 하위 컴포넌트들이 접근할 수 있도록 한다.
*/

/* 1. Context 객체 생성*/
// Context 를 저장하는 변수명은 반드시 대문자로 시작해야 한다.
const TestContext = createContext(); 
//   <TestContext.Provider value='부모가 전달한 값'>
// TestContext 로 value 안에 작성한 '부모가 전달한 값' 을,
// createContext 안에 저장한 것이다.
// createContext 안에 저장된 '부모가 전달한 값' 이,
// Provider 를 통해 밑에 있는 const, function, class 등 모든 컴포넌트에 전달되는 것이다.
// Provider: 공급자, 서비스를 제공하는 측

/* 4. 자식의 후손 컴포넌트*/
const 후손 = () => {
    const parentValue = useContext(TestContext);
    return(
        <>
            <h3>후손 공간</h3>
            <p>{parentValue}</p>
        </>
    );
}

/* 3. 자식 컴포넌트*/
const 자식 = () => {

    const parentValue = useContext(TestContext);

    return (
        <>
            <h2>자식 공간</h2>
            <p>{parentValue}</p>
            <p>-------------</p>
            <후손/>
        </>
    )
}

/* 2. 부모 컴포넌트*/
const parent = () => {
    return (
        /* Context 객체를 이용하여, 하위 컴포넌트에 value 값 전달하기*/
        // TestContext 에 value='부모가 전달한 값' 을 저장하고, Provider(제공할 것)
        <TestContext.Provider value='부모가 전달한 값'>
            <자식/>
        </TestContext.Provider>
    );
}

export default parent;