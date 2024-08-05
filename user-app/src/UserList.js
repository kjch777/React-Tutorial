import {useState} from 'react';
import './App.css';

export function UserList() {
  
  // 초기 회원 목록과 추가될 회원이 담긴 목록을 담을 변수명 설정
  const [users, setUsers] = useState([]); // 초기 변수인 users 가 회원 목록을 하나도 담고 있지 않기 때문에, users = []; ◀ 비어있는 배열로 설정해주는 것이다.
  const [name, setName] = useState(''); // useState(''); useState(""), useState(null); 모두 초기 값으로 아무 것도 없는 상태이다.
  // useState([]); 빈 배열인 상태 == 목록이 비어있다.
  
  /* 
  const addBtn = () => { 
    return 값;
  } // return 이 있을 수 있다.(필수는 아니고, 작성할 수는 있다.)
  
  public String addBtn {
    return String "자료 값";
  }
  
  =========================

  const addBtn = () => ( ) // return 이 없다.
  
  public void addBtn {
    System.out.println("출력문");
  }

  =========================

  const 인사기능 = () => {
    const 인사메시지 = "안녕하세요";
    return 인사메시지;
  }
  
  <p>{인사기능}</p>

  =========================

  const 인사기능 = () => (
    alert("안녕하세요");  
  )
  */

  /* 
  e: 특정 변화, 값이 변하는 것을 감지하고자 할 때 사용한다.

  <button onClick={() => delBtn(index)}>삭제하기</button>
    button 의 경우 button 을 click 하기만 하고, 특정 값이 random 하게 설정되는 부분이 없기 때문에,
    button 에서는 e 와 같은 변수명을 생략한다.
  
  <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    input 의 경우 client 가 어떤 값을 작성할지 모르기 때문에,
    client 가 어떠한 값을 입력한다는 것을 event 로 받아들이고, event 가 감지되면 value 값을 가져온다.
  */
  const addBtn = () => {
    setUsers([...users, name]); // ◀ 기존회원목록에 + 새로운회원의이름을추가하겠다.
    setName('');
  }

  const delBtn = (index) => { // users 라는 회원 목록이 있고, 그 안에 user: users 에 있는 회원명, i: users 에 있는 회원이 저장된 번호
    const afterDel = users.filter((user, i) => i !== index);
    /* 
    const afterDel = users.filter((user, i) => i !== index);
    ▲ 이 삭제 후 회원 목록 기능은, 삭제하려고 선택한 번호를 가진 회원만 삭제

    const afterDel = users.filter((user, i) => i === index);
    ▲ 이 삭제 후 회원 목록 기능은, 삭제하기 버튼을 누른 번호를 가진 회원 이외의 모든 번호를 가진 회원을 전부 삭제
    */

    /* 
      users.filter((user, i) => i !== index);
      회원목록에.필터를건다((회원명, 각 회원에게 지정된 번호) => 삭제하려고 버튼을 누른 회원의 배열에 저장된 번호와, 회원 번호가 서로 같지 않은 회원만(= 삭제 버튼을 누르지 않은 번호의 회원만))
      사용자의 눈에 보여질 회원 목록에 새로 다시 넣어주겠다.
    */
    setUsers(afterDel); // 삭제 후, 삭제 한 회원 목록으로 수정
  }

  return (
    <div className="App">
      <h1>회원 목록</h1>
      <h3>회원 추가하기</h3>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addBtn}>추가하기</button>
      <h3>회원 목록 보기</h3>
      <pre><li> index - User Name</li></pre>
      {users.map((user, index) => ( // React 에서의 map 은 for 문과 같다.
        <li key={index}>
          {index} - {user}
          <button onClick={() => delBtn(index)}>삭제하기</button> {/* 이건 버튼이기 때문에 value 를 가져올 e 를 설정해 줄 필요가 없다.*/}  
        </li> // index: 0, 1, 2, ... // user: index 번호(숫자) 에 해당하는 회원
      ))}
    </div>
  );
}
