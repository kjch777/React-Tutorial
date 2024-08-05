import React, {useState} from "react";

function 예제2번 () {

    // const 안에 작성하는 변수명에는, set 이라는 글자를 사용하지 않아도 되지만,
    // 초기값을 변경하는 코드를 작성할 것이기 때문에,
    // const [초기값변수명, set초기값변수명] 형식으로 작성해 주는 것이 좋다.
    const [abc, efg] = useState('Z')

    // 버튼을 클릭하면 Z 가 X 로 변경되는 기능 만들기
    const 값변경 = () => {
        if(abc === 'Z') efg('X')
            else efg('Z');
    }

    return (
        <>
            <h1>{abc}</h1>
            <button onClick={값변경}>값변경하기</button>
        </>
    )
}

export default 예제2번;