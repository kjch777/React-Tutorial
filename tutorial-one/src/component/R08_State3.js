import React, {useState} from "react";

const 예제3번 = (props) => {

    // props 로 전달받을 값 중, init 값을 count 초기 값으로 설정하기

    // setCount() 를 이용하여, count 값을 변경하는 코드 작성
    // ▶ 예제 3번 객체에서 변경이 되는 부분만 다시 표현한 것

    // JavaScript 안에 있는 Number 라는 객체를 이용하여, 받아오는 숫자 값을 한번 더 처리한 것
    // String 처럼 문자열로 오는 값일 수 있으니, 한번 더 숫자화를 진행한 것
    // useState(숫자로변경(App.js에서가져온값.초기값(==init)이라는변수에담긴값가져오기));
    // useState(Number   (props            .init));

    //                                        props.init == init='50'
    const [count, setCount] = useState(Number(props.init)); 
    //     count == init == 50

    return(
        <div className="count-container"> {/* <div> 태그나 <> 태그 사용하기*/}
        <button onClick={() => setCount(count - Number(props.step))}>
            -{props.step}
        </button>
        

        <h3>{count}</h3>

        <button onClick={() => setCount(count + Number(props.step))}>
            +{props.step}
        </button>
        </div>
    )
}

export default 예제3번;