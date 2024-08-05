import React, {useState} from "react";
import './TodoList.css';

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        setTodo([...todo, {text: input, complete: false}]);
        setInput('');
    }

    const toggleTodo = (index) => {
        const newTodo = [...todo];
        newTodo[index].complete = !newTodo[index].complete;
        setTodo(newTodo);
    }

    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <div>
                <input className="TodoInput" value={input} onChange={(e) => setInput(e.target.value)} placeholder="새로운 할 일을 추가하세요."/>
                <button className="TodoButton" onClick={addTodo}>할 일 추가하기</button>
            </div>
            <ul className="TodoUl">
                {todo.map((todo, index) => (<li className="TodoLi" key={index} style={{textDecoration: todo.complete ? 'line-through' : 'none', cursor: 'pointer'}} onClick={() => toggleTodo(index)}>{todo.text}</li>))}
            </ul>
        </div>
    )
}

export default TodoList;