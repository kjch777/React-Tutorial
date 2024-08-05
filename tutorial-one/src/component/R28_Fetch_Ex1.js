import React, { useEffect, useState } from 'react';

export const Fetch_Ex1 = () => {
    const [users, setUsers] = useState([]);
    // const [error, setError] = useState(null);
    
    // 데이터 가져오기
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => { // 1. 데이터를 정상적으로 가지고 왔는지 확인하기
            return res.json(); // 2. 데이터를 정상적으로 가지고 왔다면, JSON 정보를 전달하기
        })

        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            alert("오류가 발생했습니다." + error);
            // setError(error);
        })
    })

    return (
        <>
            <h1>사용자 목록 보기</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}