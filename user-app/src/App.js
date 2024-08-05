import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberList from './MemberList.js';
import { UserList } from './UserList.js';
import { TodoList } from './TodoList.js';
// BrowserRouter as Router: BrowserRouter 라는 명칭이 너무 길기 때문에 Router 라는 별칭을 붙여 사용하겠다.
// as == alias: 별칭

console.log("Hello"); // 다른 기능을 가진 코드가 있어도 상관없다.
function App() { // function 코드 위에

  return (
    <Router>
      <Routes>
        <Route path='/memberList' element={<MemberList />} />
        <Route path='/' element={<UserList />} />
        <Route path='/todoList' element={<TodoList />} />
      </Routes>
    </Router>
  )
}

export default App; // 코드가 작성된 위치(순서) 보다, 일단 작동시키는 것을 최우선으로 하는 코드이다.
// 따라서, 위에 써도 상관은 없다.

/* 
  function App() { }
    index 다음 특정 js 가 최상위에서 시작할 때는 주로 function 을 사용한다.
    js 코드를 작성한 페이지에서 최상위가 아니어도 된다.
    function 위에 다른 코드가 있어도 문제없다.

  const App = () => { }
    이외에는 모두 const 를 주로 사용한다.
    js 코드를 작성한 페이지에서 최상위
    const 코드 이전에 console.log("Hello"); 와 같은 다른 코드를 작성하지 않는 것이 좋다.
    const 로 가장 중점이 되는 코드를 먼저 선언해 준 다음,
    console.log("Hello"); 등의 다른 기능을 가진 코드를 작성해 주는 것이 좋다.
*/