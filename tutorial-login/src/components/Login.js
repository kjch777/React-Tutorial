import React, {useContext, useState} from "react";
import { LoginContext as LoginContext } from "./LoginContext";

export const Login = () => {

    // App.js 에 작성한 Context 에서 loginMember 와, 
    // 오른쪽에 작성한 LoginContext 에, 
    // key 가 서로 일치하는 값을 가져와 대입하는 것이다.
    // 만약, 로그인 한 값이 없다면 로그인 화면으로 이동
    const {loginMember, setLoginMember} = useContext(LoginContext);

    /* id, pw 상태 변수 만들기*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    // 로그인 버튼 함수 만들기
    const LoginBtn = () => {
        fetch('/login', {
          method: "POST",
          headers: {"Content-Type": "application/json", // 사용자 ▶ 서버에 로그인 한 정보가 서로 일치하는 것이 있는지 확인
                    "Accept": "application/json"}, // 서버 ▶ 사용자에게, 사용자가 작성한 정보가 존재하는지에 대한 존재여부 전달
          body: JSON.stringify({id: id, pw: pw}) // 본문으로 id pw 에 작성된 내용을 전달
        })
        .then(response => response.json())
        .then(map => {
            console.log(map);

            // 로그인 실패 시
            if(map.loginMember === null) {
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');
                return;
            } 

            // 로그인 성공 시
            setLoginMember(map.loginMember);

            // App.js 에 로그인 성공 정보가 올라간다.
            // App.js 로그인 정보를 다른 js 에 전달

            // id, pw 값 모두 지우기
            setId('');
            setPw('');
            alert('로그인 성공');
        })
    }

    /* 로그아웃 이벤트 핸들러*/
    const LogoutBtn = () => {
        setLoginMember(null);
        alert('로그아웃 성공');
    }

    return (
        <div className="login-container">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td><input type="text" onChange={e => setId(e.target.value)} value={id} /></td>
                    </tr>
                    <tr>
                        <th>PW</th>
                        <td>< input type="password" onChange={e => setPw(e.target.value)} value={pw} /></td>
                        {!loginMember && (
                        <td><button onClick={LoginBtn}>로그인</button></td>
                        )}
                        {/* loginMember 가 null 이 아닌 경우, 로그아웃 버튼 보이게 만들기*/}
                        {loginMember && (
                            <td><button onClick={LogoutBtn}>로그아웃</button></td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}