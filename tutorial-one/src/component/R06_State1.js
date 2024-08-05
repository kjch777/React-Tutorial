import React, {useState} from 'react';
/* 
React 초기에는 function 이라는 함수로 묶어서 사용했지만,
기능에 부족한 부분이 있었다.
따라서, class 화로 사용하여 코드를 작성했다.
그런데, class 로 작성하다보니, render 와 같이 불필요한 코드들을 많이 작성하게 되었고,
다시 function 으로 돌아오게 되었다.
단, 기능적으로 보완하기 위해 Hook 이라는 기능을 만들었다.

Hook 종류 = React 에서, 어떤 동작이나 상태를 표현하거나 변경할 때 사용하는 기능들
1. useState 
2. useEffect 
3. useContext 
4. useReducer 
5. useMemo 
6. useCallback 
7. useRef. useRef
8. useCustom Hook ▶ 개발자가 직접 만드는 Hook 종류

use 로 시작하는 Hook 을 사용할 때는, 아래와 같은 형식으로 작성한다.

하나의 Hook 만 작성할 때
import React, {useState} from 'react';

두개 이상의 Hook 을 작성할 때
import React, {useState, useEffect, useContext, ... 넣고 싶은 기능 작성} from 'react';

State: 컴포넌트(객체) 의 상태

useState() 함수
- 컴포넌트(객체) 의 상태(State) 값이 변하게 될 경우
  해당하는 객체를 다시 새로고침하여 실행하는 함수이다.
  다시 새로고침하다 == 다시 렌더링하다 == ReRendering == 다시 표현하다
*/

/* 
ES6(ECMScript 6 == JavaScript 문법으로, 현재 가장 최신 버전이다.)
const State예제1 = () => { 은,
function 예제1 () { (== React 초기 방식) 과
class 예제1 extends Component { 와 같다.

위 3개는 모두 표현하는 방식이 다를 뿐, 의미하는 바는 같다.
*/
const State예제1 = () => {
    
    // test: 가장 처음에 가지고 있는 변수 값이다. (만약, 처음에 값이 없다면 값이 없는 상태로 있는 것이다.)
    // setTest: test 값을 변경하기 위한 값이다.
    // useState('A'): 처음에 test 가 가지고 있을 값이다.
    
    // const [초기값, 변경될값] = useState('처음에 들어갈 값');
    const [test, setTest] = useState('A');
    
    // 버튼을 클릭할 경우, 동작할 함수(이벤트 핸들러) 기능 작성
    const 값변경하기 = () => {
        /*
        if(test === 'A') { 
            setTest('B') 
        } else { 
            setTest('A'); 
        }
        */
        if(test === 'A') setTest('B')
        else setTest('A');
        // React 는 { } 를 생략하는 것이 가능하다.
    }

    return (
        // return 안에는 !Doctype 부터, html 과 head, body 와 같은 태그를 사용하지 않는다.
        // 주로, <> </> 태그 또는 <div> </div> 태그로 전체를 감싸준다.
        
        // public ▶ index.html 코드 안에 있는 <div id="root"> 라는 공간 안에,
        // 개발자가 만드는 javascript 와 html, css 와 같은 코드들이 모두 들어갈 것이기 때문이다.

        <>
            <h1>{test}</h1>
            
            <button onClick={값변경하기}>값 변경</button>
            
            {/* button 을 클릭해서 값이 변경되는 것을 확인해보기
                ReactJs 는 onclick 을 작성할 때, onClick 으로 camelCase 방식을 사용해서 작성한다.
                html, javascript == onclick
                React javascript == onClick
            */}
        </>
    )
}

export default State예제1;