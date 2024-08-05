import React, {useState, useContext} from "react";

// 사용할 외부 Context 객체 import
import UserContext from "./UserContext";

// 자식 컴포넌트 정의
const Child = () => {
    /* Context 를 이용하여 제공받은 값 가져오기*/

    // Context 로 전달받은 객체
    // {"userList" : userList,
    //  "setUserList" : setUserList}
    // 전달 받은 값의 key 값을 변수명과 똑같이 작성하여, 값이 알아서 들어갈 수 있도록 해준다.
    // 다르게 작성하면 따로 설정을 해주어야 한다.
    const {userList, setUserList} = useContext(UserContext);

    /* 자식에서 컴포넌트 상태 변수 선언*/
    const [inputName, setInputName] = useState(''); // { } 인지 [ ] 인지 반드시 유념해야 한다.
    const [inputAge, setInputAge] = useState('');

    const 사용자추가 = () => {
        // 상태 변수 값을 이용하여, user 객체 생성하기
        // const 유저 = {"부모에 전달할 변수명" : 부모에 전달할 값};
        const 유저 = {"name" : inputName, "age" : inputAge};
        
        // userList 복사 == ...userList
        // ...userList, 유저 == 기존 userList 를 복사 + 유저 데이터 추가
        // 대화에서 ... 을 쓰면, 함축적인 의미가 담겨있는 것처럼,
        // ...userList 에는, 기존에 있는 모든 유저가 담겨진 리스트의 값을 복사하겠다는 의미와 같다.
        // ... 변수명 == 변수명에 담긴 모든 값을 복사하겠다.
        const 새로운유저 = [...userList, 유저]; 
        // 기존에 있는 내용을 복제하고,
        // 복제한 내용에 새로운 항목을 추가하여
        // 덮어쓰기 한 것이다.

        setUserList(새로운유저); // 새로운 유저가 추가된 리스트로 값을 변경해준 것
    }

    return (
        <div>
            <label htmlFor="inputName">이름</label> &nbsp;
            <input type="text" id="inputName" onChange={(e) => {setInputName(e.target.value)} } value={inputName}/>
            {/* onChange={(e) => {setInputName(e.target.value)} } 
                변경되는 값 설정 e == event == 동작, 상태의 움직임이 발생
                e(움직임이 발생).target(움직임이 발생한 곳).value(값 가져옴)

                value={inputName}
                값={초기값(=useState(''))}

                움직임이 발생하면, value 에 작성된 초기 값이 감지된 값으로 변경된다.
            */}

            <br></br>
            <br></br>

            <label htmlFor="inputAge">나이</label> &nbsp;
            <input type="number" id="inputAge" onChange={(e) => {setInputAge(e.target.value)}} value={inputAge}/>
            &nbsp; <button onClick={사용자추가}>추가버튼</button>
        </div>
    )
}
export default Child;