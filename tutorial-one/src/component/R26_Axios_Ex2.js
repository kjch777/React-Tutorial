import React, {useState, useEffect} from 'react';
import axios from 'axios';
// npm i axios

export const Axios_Ex2 = () => {
    // const [data, setData] = useState(null);
    const [comments, setComments] = useState([]); // [] 를 써야 한다! null 은 안 된다!

    {/*
    const loadBtn = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch(() => {
            alert("ERROR");
        })
    }

    return (
        <>
            <h1>버튼을 클릭하면, JSON 안에 작성된 내용 불러오기</h1>
            <button onClick={loadBtn}>불러오기</button>
            <br/>
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data, null, 4)} readOnly />}
        </>
    )
    */}

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setComments(res.data);
        })
        .catch(() => {
            alert("ERROR");
        })
    }, []);

    return (
        <>
            <h1>JSON 안에 작성된 내용 불러오기</h1>
            <ul>
            {comments.map(comment => (
                <li key={comment.postId}>
                    <strong>ID: </strong>{comment.id}<br/>
                    <strong>Name: </strong>{comment.name}<br/>
                    <strong>Email: </strong>{comment.email}<br/>
                    <strong>Body: </strong>{comment.body}<br/>
                </li>
            ))}
            </ul>
        </>
    )
}