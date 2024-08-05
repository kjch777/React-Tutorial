import React, {useState} from 'react';
import { LoginContext as LoginContext } from './components/LoginContext';
import { Signup as Signup } from './components/SignUp';
import './App.css';
import { Login as Login} from './components/Login';
import { TodoList as TodoList } from './components/TodoList';

/* 현재 App.js 는 제일 상위에 있는 Component(=객체) 이다.*/
function App() {
  // 회원 가입 창 보여주기/숨기기
  const [signUpView, setSignUpView] = useState(false);

  // 로그인 한 회원 정보 저장
  const [loginMember, setLoginMember] = useState(null);

  return (
    <LoginContext.Provider value={ {loginMember, setLoginMember} }>
    {/*
      value={ } ◀ 하나의 값만 작성할 때
      value={ { } } ◀ 두개 이상의 값을 작성할 때
      loginMember ◀ 맨 처음 로그인하지 않은 상태의 초기 값을 가지고 있는 것
      setLoginMember ◀ 로그인 한 다음, 로그인 한 정보를 가지고 있는 것
    */}
      <button onClick={() => {setSignUpView(!signUpView)}}>
        {signUpView ? ('회원가입 닫기') : ('회원가입 열기')}
      </button>
      {/* 회원가입 화면*/}
      
      <div className='signup-wrapper'>
        {/* signUpView 가 true 일 경우에만 실행되는 공간 == true 여야 눈에 보인다.*/}    
        {/* 조건식 && true 일 경우 실행*/}
        {signUpView === true && (<Signup />)}
      </div>

      <h1>Todo List</h1>
      {/* 로그인을 해야 Todo List 확인 가능하게 만들기*/}
      <Login />

      <hr/>
      {/* 로그인 되었을 때, 로그인 한 회원의 TodoList 출력하기*/}
      {loginMember && ( 
        <TodoList/>
      )}

    </LoginContext.Provider>
  );
}

export default App;
