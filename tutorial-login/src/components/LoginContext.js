import React, {createContext} from "react";

// 로그인을 한 다음, 로그인 한 정보를 모든 창에 띄워주기
// App.js 에서, <div> 태그 대신 <LoginContext> 태그로
// return 문을 시작하자마자 감싸주면, <LoginContext> 태그 안에 있는
// 모든 태그에서는 로그인/로그아웃 한 정보가 공유된다.
export const LoginContext = createContext();