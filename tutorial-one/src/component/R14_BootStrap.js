/* 
bootStrap 을 이용하여 npm install 사용하기

npm == nodeJs 설치나 실행, 환경 설정을 위한 약자

npm 을 이용하여 실행, 설치, 설정 변경을 할 수 있다.

https://www.npmjs.com/

npm == node package manager

npm 으로 무언가를 설치할 때는,
package.json 파일에

npm i 설치할 파일명
npm install 설치할 파일명

형식으로 작성하면 된다.

부트스트랩을 설치할 때는,
package.json 파일에
npm i bootstrap 을 사용하면 된다.

npm i bootstrap 뒤에 @버전을 작성하지 않으면, 자동으로 가장 최신 버전으로 설치된다.

만약, 특정 버전을 설치하고 싶다면
package.json 파일에
npm i bootstrap@5.2.1
npm i bootstrap@버전
형식으로 작성하면 된다.

만약, 부트스트랩을 삭제하고 싶다면
package.json 파일에
npm uninstall bootstrap
형식으로 작성하면 된다.

특정 파일을 삭제하고 싶다면
package.json 파일에
npm uninstall 특정파일명
형식으로 작성하면 된다.

npm 을 이용한 설치는, npm start 로 시작하고 있는 패키지의 실행 여부와 관계 없이 설치가 가능하다.

import 'bootstrap/dist/css/bootstrap.css';
부트스트랩을 가져와서 사용할 때는, index.js 에 import 를 작성해준다.
부트스트랩뿐만 아니라 전체적으로 사용할 css 는, index.js 또는 App.js 에 작성해준다.

npm: 설치 속도가 상대적으로 느리다.
yarn: npm 과 똑같은 패키지 관리자이다. 설치 속도가 상대적으로 빠르다. 
*/
import React from "react";

const 부트스트랩예제1 = () => {
    return (
        <div className="container"> {/* 반응형 레이아웃 컨테이너 생성*/}
            <div className="row"> {/* 행(가로) 생성*/}
                <div className="col-md-auto"> {/* 중간 화면 크기에서, 열(세로) 의 너비를 자동으로 설정*/}
                    <h1>React 와 BootStrap 사용해보기</h1>
                    <button className="btn btn-primary">부트스트랩 버튼</button>
                    {/* btn: 버튼, btn-primary: 파란색 버튼 css*/}
                </div>
            </div>
        </div>
    )
}

export default 부트스트랩예제1;