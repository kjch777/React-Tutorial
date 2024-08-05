import React from 'react';

export const Loading = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <div>로딩 중입니다...</div>

    // 또는 아래와 같이 작성해준다.(div 안에 로딩 이미지를 넣을 수도 있다.)
    if(loading) {
        return (
            <div>로딩 중입니다...</div>
        )
    }

    // 주의사항: 데이터를 모두 가지고 왔다면, setLoading 을 false 로 변경해주어야 한다.
    // setLoading(false) 를 작성해주지 않으면, 해당 페이지는 끝까지 로딩 중 만 보이게 된다.

    return (
        <>
            <h1>로딩 표시</h1>
            <pre>
            // JavaScript 에서 innerHTML 을 사용했던 것처럼, React 에서도 innerHTML 을 사용할 수 있다.

            // 만약, 로딩 중이라면 로딩 div 보여주기
            if(loading) return <div>로딩 중입니다...</div>;

            영화 데이터를 가져올 때, 이미지가 있기 때문에 데이터를 가져오는 속도가 느리다.
            사용자에게 화면이 보여지기 전에 로딩 중이라는 표시를 보여주어,
            사용자가 로딩 되기를 기다릴 수 있게 해주는 것이다.
            맨 처음엔 로딩을 true 로 설정하여, 로딩 중 이라는 임시 화면을 출력하고,
            데이터를 모두 가져오면 로딩을 false 로 변경하여, 기존에 return 에 작성한 html 코드를 보여주는 것이다.
            
            {/*
                if(loading) return <div>로딩 중입니다...</div>;
                    ▲ 코드와 ▼ 코드는 서로 같다.
                if(loading) {
                    return (
                        <div>로딩 중입니다...</div>
                    )
                }
            */}
            </pre>
        </>
    )
}