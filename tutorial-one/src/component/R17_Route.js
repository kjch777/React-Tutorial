/* 
React Router: 링크를 연결해서 이동하기 위해 사용되는 라이브러리이다.

기존에 html 주소 값을 이동할 때 사용한 방법
    <a href="html파일이름.html">이동하기</a>

a 태그로 href 를 이용할 경우 html 파일 이름을 작성해주는 것이기 때문에,
React 에서는 단순히 a 태그와 href 만 사용할 수 없다.

React 는 html 파일이 index.html 한 개의 파일밖에 없기 때문에 단순하게 사용할 수 없다.

React 는 JavaScript 를 이동해서 html 파일을 보여주기 때문에
react-router-dom 을 사용한다.

* Router: 연결을 해주는데, 연결 경로를 자동으로 전환해주는 기능
          연결 경로를 자동으로 전환하는 기준은,
          고객(클라이언트/사용자) 이 어떠한 특정 화면이나 기능을 보고자
          웹 사이트에 요청할 경우, 고객이 요청한 흐름대로 자연스럽게 보여주는 기능이다.

1. 설치 방법(둘 중 택1)
    npm install react-router-dom
    npm i       react-router-dom

2. Router 를 사용하기 위한 설정 4가지
   BrowserRouter: HTML 에서, URL 전체 관리자 역할을 한다.{History(기록) API 사용}
   Routes: 링크 모음을 나타내는 표현 태그
   Route: 어떤 링크가 어떤 JavaScript 를 표현하는지 표기해주는 태그
   Link: 사용자가 클릭하여 이동할 수 있는 링크 생성 <a href> 와 똑같은 역할을 한다.

3. 사용 방법
    <BrowserRouter> <!-- html 에서, 이런 링크가 있다 라고 기록을 남김 -->
        <Routes>    <!-- 링크 표현 모음집 -->
            <Route path="이동할링크" element={ <JavaScript 파일명 /> } />
            <!-- / 경로가 Home.js 를 가리키길 원한다면, ▼ 와 같이 작성한다.-->
            <Route path="/" element={ <Home /> } /> <!-- 맨 위에서 Home.js 를 import 해준다.-->
        </Routes>
    </BrowserRouter>

*주의 사항*
    BrowserRouter 는 index.js 또는 App.js 에서 사용한다.
    만약, App.js 를 index.js 바로 하위에서 사용하지 않는다면,
    index.js 바로 하위에서 표현되는 js 파일에서 표기한다.
*/