import React, {useRef, useEffect} from 'react';

const Ref = () => {
    const countRef = useRef(0); // 맨 처음 숫자 값은 0

    useEffect(() => {
        countRef.current++; // 새로고침될 때마다 countRef 값 증가
        console.log('React 가 새로고침 되었습니다.');
    })

    return (
        <>
            <h1>useRef</h1>
            <pre>
                React 는 주기적으로 자동 새로고침되기 때문에, 작성한 코드가 실시간으로 반영된다.    
                oo.js 또는 컴포넌트가 새로고침될 때마다, 
                특정 기능이나 값이 초기화되지 않고 값이 유지될 수 있게 하고 싶을 때 사용한다.
                
                예를 들어, 로그 인을 한 상태에서 새로고침을 하더라도, 
                사용자가 따로 로그 아웃을 하거나 로그 인 시간이 다 되어 로그 아웃이 자동으로 풀리기 전까지, 
                로그 인을 유지할 때 사용한다.
                
                또는 입력 필드의 포커스 설정(입력창에 커서를 올리거나, 버튼을 클릭하는 행위) 을 하지 않아도, 
                값 입력을 제일 먼저 할 수 있도록 커서를 위치 시킬 때 사용한다.
                (스크롤 위치 관리)
            </pre>

            <p>React 가 새로고침할 때마다, 숫자 값 증가시키기</p>
            <p>{countRef.current}</p>
        </>
    )
}

export default Ref;