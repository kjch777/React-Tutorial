/*
import {UserList as UserList} from './UserList';
import {TodoList as TodoList} from './TodoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    
return (
    <>
    <Router>
    <Routes>
    <Route path='/userlist' element={<UserList />} />
    <Route path='/todolist' element={<TodoList/>} />
    <Link to='/userlist' />
    </Routes>
    </Router>
    </>
)
}

export default App;
*/

import { useState } from "react";
import User from "./Users";
import './default.css';
import EditForm from "./EditForm";

function MemberList() {
    // const [userList, setUserList] = useState([]); ◀ 빈 배열
    
    // ▼ DB 에서 가져올 목록이 없거나, 초기에 예제 목록을 작성할 때 사용하는 형식 
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const [editUser, setEditUser] = useState(null);
  // useState(''); useState(""); useState(null); ◀ 셋 모두 똑같은 빈 값 처리이다.

  /*
    1번: 삼항 연산자를 이용하지 않고 수정하기 
    const updateUser = (회원정보수정하기) => {
        setUserList(userList.map(user => updateUser)); // setEditUserBtn 을 클릭하면 setEditUser 를 진행
    }

    2번: 삼항 연산자를 이용하지 않고 수정하기 
    const updateUser = (회원정보수정하기) => {
        setUserList(userList.map(user => (user === editUser ? updateUser : user))); // setEditUserBtn 을 클릭하면 setEditUser 를 진행
    }
  */

  {/* 
    const updateUser = (회원정보수정하기) => {
      setUserList(userList.map(user => (user === editUser ? 회원정보수정하기 : user))); // setEditUserBtn 을 클릭하면 setEditUser 를 진행
    }
  */}
  const updateUser = (formData) => {
    setUserList(userList.map(user => (user === editUser ? formData : user))); // setEditUserBtn 을 클릭하면 setEditUser 를 진행
    setEditUser(null);
  }

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>

      <hr></hr>

      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>삭제</th>
            <th>수정</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((item, index) => (
            <User
              key={"user" + index}
              user={item}
              userList={userList}
              setUserList={setUserList}
              setEditUserBtn={setEditUser}
            />
          ))}
        </tbody>
      </table>
      {/* 만약 수정 버튼이 클릭되면, 수정하는 js 파일 보여주기*/}
      {editUser && (
        <EditForm user={editUser} updateUser={updateUser} />
      )}
    </div>
  );
}

export default MemberList;
