/* JS 파일과 JAVA 파일을 외부에서 사용할 때는, 무조건 대문자로 시작한다.
   R01_ClassComponent - 외부에서 파일을 사용할 수 있다.
   r01_ClassComponent - 외부에서 파일을 사용할 수 없다.
*/
import React, { Component } from "react";
// ▶ node-modules 폴더에서 react 폴더에 있는 파일을 가져와,
// R01_ClassComponent.js 페이지에서 사용하겠다는 의미의 코드이다.
// react 폴더를 가져와 사용하는데, 사용할 이름을 React 로 지정한 것이다.

// node_modules : Node.js 에서 프로젝트가 사용할 패키지나, 라이브러리가 저장된 폴더이다.

// 만든 class 를 export default 를 지정해야지만, 외부에서 사용이 가능하다.

// old version
class 컴포넌트 extends Component {
    // class 컴포넌트 extends 방식은 예전 방식이다.
    render() {
        console.log("javascript 를 작성하는 공간")

        // render 함수: return 되는 html 형식의 코드(jsx, js + xml) 를 화면에 출력하는 함수
        // 화면이 변경되어야 할 시점에 자동으로 호출된다.
        // Component 를 상속받는 하위 클래스에 반드시 있어야 하는 함수이다.

        return(
            <>
            <pre>
                react 에서는 return 으로 시작한 다음,
                코드를 처음부터 끝까지 감싸줄 tag 가 필요하다.
                코드를 감싸주기 위해 주로 <div></div> 나 <></> 를 사용한다.

                <div></div> 와 <></> 의 차이점

                div 는 html 표준 태그로, 주로 레이아웃 스타일링을 위한 컨테이너로 사용한다.
                <></> html 표준에 없는 사용자 정의 태그로, 특정 기능이나 화면을 감싸는 데 사용한다.
            </pre>
            <h2>클래스형 컴포넌트</h2>
            </>
        )
    }
}

// 컴포넌트 라는 코드를 외부로 내보내겠다는 의미이다.
// 다른 javascript 에서, 여기서 내보낸 코드를 import 해서 사용 가능하다.

export default 컴포넌트;