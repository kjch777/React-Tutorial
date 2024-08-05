/* props 예제 1 (함수형 컴포넌트)

@Param {*} props : 부모 ▶ 자식 컴포넌트로 데이터 전달 시 사용하는 객체

props: 부품

*/

const 부모1번 = (props) => {
    // 부모 컴포넌트로 전달받은 데이터 확인
    console.log("부모 1번: " , props);
    return(
        <>
            <h3>Props 예제 1번 확인하기</h3>{/* js 값 또는 코드를 html 내부에 사용할 땐, { } 안에 작성한다.*/}
            <ul>
                <li>번호: {props.num} 번</li>
                <li>이름: {props.name}</li>
                <li>나이: {props.age} 세</li>
                <li>점수: {props.score} 점</li>
            </ul>
        </>
    );
}

export default 부모1번;