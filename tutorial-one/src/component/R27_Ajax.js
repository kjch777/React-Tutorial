import React from 'react';
// React 에서는 거의 Axios 를 사용한다.

export const Ajax_Fetch = () => {
    return (
        <>
            <h1>Ajax 와 Fetch</h1>
            <pre>
                Ajax 는, 서버와 통신해서 웹 페이지를 새로고침 하지 않고,
                데이터를 가져오거나 보낼 수 있게 해주는 기술이다.
                jQuery 로 이용되는 JavaScript 에서 많이 사용한다.

                React 에서는 Ajax 대신 Fetch API 또는 Axios 와 같은 라이브러리를 사용한다.
                Fetch API: React 에 내장되어 있는 API 를 가져와서 사용한다.
                        API(Application Programming Interface): 기술 연결 주소
                        어떠한 기술을 주소 값으로 가져와 사용하거나, 데이터를 보여줄 때 사용한다.
                            ex) myPage API: myPage 주소
                            ex) logIn 백엔드 API: logIn 데이터를 가져올 수 있는 백엔드 주소
                            ex) 게시판에서 게시물이 안 보인다. API 가 잘못된 것인지 : 백엔드에서 데이터를 가져오는 주소가 잘못됐거나, 그 안에 있는 코드가 잘못됐다.

                Axios 라이브러리: npm install axios 를 사용하여, 외부에서 만들어진 기능을 가져와서 사용하는 것이다.
                    기능을 가져오는 곳: npmjs 홈페이지에 기입되어 있다.
                    <a href='https://www.npmjs.com/'>npmjs 로 이동하기</a>
            </pre>
            <h3>사용 예제 코드</h3>
            <p>* 따로 설치하지 않는다.</p>
            <pre>
                fetch('api 주소 작성') // java 에서의 try 와 같다.(불러올 주소가 적혀있을 뿐이다.)
                
                {/* 
                1. 데이터를 정상적으로 가져왔다면, 
                .then(res => {
                    return res.json(); // 2. json 으로 파일 전달
                })

                만약, 데이터가 정상적으로 들어왔다면
                .then(데이터 => { // try 안에 적힌 if 문으로, 만약, 어떠한 데이터를 가져오는데 성공했다면
                    실행할 코드 작성; // 조건에 맞는 데이터가 들어왔을 때, 실행할 코드를 작성한 것이다.
                })

                만약, 데이터를 가져오는 데 실패했다면

                // 에러를 출력할 변수로 e 를 사용한 것이다.
                .catch(e => { // java 에서의 catch 문 또는 else 와 같다. 에러가 발생했을 때 보여줄 에러에 대한 출력문을 보여줄 코드를 작성하는 것과 같다.
                    실행할 코드 작성;
                })
                */}
            </pre>
        </>
    )
}