import React, {useState} from 'react';
import './TodoList.css';

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    // addTodo 라는 기능이 들어간 버튼을 클릭하면,
    const addTodo = () => {

     // setTodo([[...todo], 이렇게 작성하면 이중 배열 처리가 되어 출력이 제대로 되지 않는다.
        setTodo([...todo, {text: input, complete: false}]); // 이미 입력된 할 일 복제 후 추가하기
        // todo 기본 값 == 비어있는 배열
        // setTodo 로, 비어있는 배열에 새로운 목록을 하나씩 추가하는 것을 진행한다.
        // [..todo, == 기존에 이미 존재하던 리스트를 복사하여
        // input 으로 들어온 value 값을, text 라는 key 에 저장하는 것이다.
        // complete: false ◀ 새로 추가된 일은 다시 말해 아직 끝나지 않은 일이기 때문에 기본 값으로 false 를 주었다.
        setInput('');
    }

    // 할 일을 완료하면, 완료 처리를 해주는 버튼이다.
    // 실수로 클릭했을 경우, 한번 더 클릭하여 되돌릴 수 있다.
    const toggleTodo = (index) => {

        // 어떤 행동을 하기 전에, [...todo] 로 복사본을 만들어서 진행하는 것이다.(혹시 모를 오류 방지)
        const newTodo = [...todo]; // 새로운 할 일 추가하기
        
        newTodo[index].complete = !newTodo[index].complete;
        // 새로운 목록[] 에서, 항목마다 자동으로 주어지는 숫자에 있는 완료된(complete) 값을 가져와서,
        // 사용자가 선택한 index 위치의 complete(완료/미완료) 값을,
        // 완료 상태면 미완료 상태로 변경하고, 미완료 상태면 완료 상태로 변경
        
        // newTodo[index].complete = !newTodo[index].complete;
        // 새로운 목록[사용자가선택한항목번호].완료/미완료 = 완료▶미완료 / 미완료▶완료로 상태 변경
        // ! 를 사용하여, boolean(true/false) 값을 (false/true) 값으로 변경할 수 있다.

        setTodo(newTodo); // 상태가 변경된 목록을 다시 저장하기
    }

    return (
        <div className='TodoList'>
            <h1>Todo List</h1>
            <div>
                <input className='TodoInput' value={input} onChange={(e) => setInput(e.target.value)} placeholder='새로운 할 일을 추가하세요.'/>
                <button className='TodoButton' onClick={addTodo}>할 일 추가하기</button>
            </div>

            {/* 
            할 일이 추가되면, 추가된 목록을 System.out.println 과 같은 map 을 사용하여, 
            사용자에게 새로운 항목이 추가된 새로운 목록을 보여주기
            
            각 목록은,
            
            <li key={목록번호순}>{해당하는 목록 번호의 value = input 에 작성된 text 를 보여준다.}></li>
            
            li 태그를 클릭할 때마다 할 일을 완료했는지 아닌지, 눈으로 직접 확인할 수 있게 표시해주는데,
            표시를 할 때 style 태그를 이용하여 표시한다.
            
            textDecoration(밑줄)
            
            만약, 할 일이 true 이면, line-through(가운데 줄)
                 할 일이 false 이면, none(줄 삭제)
            
            overline(글자 위에 선을 그음)
            underline(글자 아래에 선을 그음/a 태그에 기본 값으로 들어 있음)
            */}
            <ul className='TodoUl'>
                {todo.map((todo, index) => (<li className='TodoLi' key={index} style={{textDecoration: todo.complete ? 'line-through' : 'none', cursor: 'pointer'}} onClick={() => toggleTodo(index)}>{todo.text}</li>))}
            </ul>
        </div>
    )
}

export default TodoList;

/* 
추후 useEffect 를 사용하여, 웹 사이트를 새로고침(F5) 하더라도 목록이 남아있을 수 있도록 업데이트 할 예정
*/