import React, {useState, useEffect} from 'react';
import { PagiNation as PagiNation } from './PagiNation.js';
import axios from 'axios';

export const Board = () => {
    // 데이터 정보를 가져오는 변수명 작성
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5); // 한 페이지 당 게시글은 10개씩만 보여줄 것

    // axios 를 사용하여 항목 가져오기
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data);
        })
        .catch((e) => {
            alert(e + " 발생");
        })
    }, [])

    // 현재 보고 있는 페이지에서, 맨 처음 항목과 마지막 항목, 게시글 목록을 체크해주는 변수
    const lastItem = currentPage * itemPerPage; // 마지막 항목 length
    const firstItem = lastItem - itemPerPage; // 맨 처음 항목 index
    const postList = data.slice(firstItem, lastItem);

    // 이동 할 페이지를 클릭할 때 사용할 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <h1>리액트 페이지네이션 예제</h1>
            {/* ul 태그 안에는, 각 항목들의 제목이 보여질 것이다.*/}
            <ul className='list-group mb-5'>
                {postList.map(post => (
                    <li key={post.id} className='list-group-item'>
                        {post.title}
                    </li>
                ))}
            </ul>
            {/* 페이지네이션은 아래 페이지네이션 태그에서 동작할 것이다.*/}
            <PagiNation itemPerPage={itemPerPage} totalItems={data.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}