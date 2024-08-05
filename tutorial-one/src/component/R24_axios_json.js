import React from 'react';

export const Axios_JSON = () => {

    return (
        <>
            <h1>Axios & JSON</h1>
            <h3>JSON</h3>
            <pre>
                JSON: JavaScript Object Notation
                      JavaScript 자바 스크립트
                      Object 객체
                      Notation 표기법
                주로 서버(java 등의 백엔드) 와 클라이언트(html, js, css 등의 백엔드) 간의 데이터 교환에 쓰인다.
                {/*{
                    "표기명" : "표기 내용",
                    "표기명" : "표기 내용",
                    "표기명" : ["1번 표기 내용", "2번 표기 내용", "3번 표기 내용"],
                    "표기 주소" : {
                                        "도시명" : "도시 소개",
                                        "도시 번호" : "도시 번호 작성"
                    },
                    ...
                }*/}
                개발자들이, 서버에서 가져온 값을 화면에 보여주기 위해 임시 데이터 JSON 을 사용해서 표현할 때는,
                주로 https://jsonplaceholder.typicode.com/ 을 많이 사용한다.
                <a href='https://jsonplaceholder.typicode.com/'>jsonplaceholder 로 이동하기</a>
                jsonplaceholder: 임시 데이터로 사진, 포스터 내용과 같은 파일을 만들고, 개발자들에게 무료로 제공하는 사이트이다.
                대표적으로 posts, comments, albums, photos, todos, users 등이 존재한다.
                https://jsonplaceholder.typicode.com/posts
                https://jsonplaceholder.typicode.com/comments
                https://jsonplaceholder.typicode.com/albums
                https://jsonplaceholder.typicode.com/photos
                https://jsonplaceholder.typicode.com/todos
                https://jsonplaceholder.typicode.com/users
            </pre>
            <h3>비동기처리</h3>
            Ajax: javascript 를 이용하여, 서버와 비동기적으로 데이터를 교환한다.(FetchAPI 를 사용한다.)
            Axios: javascript 의 HTTP 클라이언트 라이브러리이다. HTTP 요청을 보내고, 응답을 처리하기 위해 사용한다.
            Fetch: 성공 유무를 나타낸다.
            Promise: 성공 유무를 나타낸다.
            
            <h5>Axios 를 사용한 API 가져오기</h5>
            프로젝트를 진행하기 위해 Axios 설치하기
            npm 과 yarn 은 개발한 회사가 다를 뿐, 차이가 없다.
            npm install axios 또는 npm i axios
            yarn add axios
            <a href='https://axios-http.com/kr/docs/intro'>Axios 사용하러 이동하기</a>
        </>
    ) 
}