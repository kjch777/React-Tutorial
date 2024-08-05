import React, { useState } from 'react';
import './App.css';

export function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [task, setTask] = useState(null);

  const addBtn = () => {
    setTodos([...todos, task]);
    setTask('');
  }

  const delBtn = (index) => {           
    const afterBtn = todos.filter((randomParameterName, i) => i !== index);
    setTodos(afterBtn);
  }

  return (
    <div className="App">
      <h1>할일 목록</h1>
      <h3>할일 추가하기</h3>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addBtn}>추가하기</button>
      <h3>할일 목록 보기</h3>
      {todos.map((todo, index) => (
        <li key={index}>
            {todo}
            <button onClick={() => delBtn(index)}>삭제하기</button>
        </li>
      ))}
    </div>
  );
}