// node_module 폴더가 없을 경우, import 완성이 자동으로 되지 않는다.
import React from 'react';

function UseEffectEx() {
    return (
        <> {/* return (여기서, 전체를 감싸주는 <> </> 또는 <div></div> 가 없을 경우, 오류가 발생한다.)*/}
            <h1>useEffect 란,</h1>
            <pre>
                useEffect 함수는 컴포넌트(function, const) 가 렌더링(시작) 될 때마다
                특정 작업을 실행할 수 있도록 하는 Hook 이다.

                React 에서 컴포넌트를 렌더링하다 == React 에서 ○○.js 코드를 실행하다
            </pre>
            [useEffect] 사용 방법
            import {useEffect} from 'react';
            useEffect(function, deps)
                             ▼, ▼
            useEffect(() => {}, []); ◀ function 의 이름이나 특정 기능이 없을 때, 익명 함수로 표현한 것이다.

            function: ○○.js 를 들어왔을 때 실행하고자 하는 작업
            
            deps: 배열 형태. 배열 안에는 검사하고자 하는 특정 값을 넣거나, 빈 배열로 작성
                  deps 에 특정 값을 넣게 되면 컴포넌트가 실행 될 때나 지정한 값이 업데이트 될 때,
                  useEffect 에 적힌 function 을 실행한다. 
                  
                  필수로 작성해야 하는 것이 아니기 때문에, 
                  deps 를 작성하지 않고 function 만 작성해서 사용하면,
                  ○○.js 를 다시 시작할 때마다 useEffect 에 작성된 function 함수가 호출된다.
        </>
    )
}

export default UseEffectEx;