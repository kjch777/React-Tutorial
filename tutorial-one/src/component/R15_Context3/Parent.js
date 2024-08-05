import React, {useState} from "react";

// 외부에서 만든 Context 객체를 import 해서 가져와 사용하기
import UserContext from "./UserContext";
import Child from "./Child";

// 부모 컴포넌트 정의
const Parent = () => {
    // 상태 변수 userList, setUserList 선언
    // userList 초기 값 == 비어있는 배열 공간으로 만들어 줄 것
    const [userList, setUserList] = useState([]);
    // userList == 처음엔 유저가 아무도 없기 때문에 목록이 비어있다.
    // setUserList == 앞으로 추가 될 유저 목록

    return (
        <UserContext.Provider value={ {userList, setUserList} }>
            <Child/>
            <div>
                {/* Child 에서 추가한 user 정보를 보여주는 공간*/}
                {/* userList: 초기에 저장된 유저 목록을 보여주는 것
                    새로 유저가 추가된 새로운 유저 리스트는 map 에 담겨서 보여지게 된다.
                    map == key, value(유저의 inputName, inputAge 에 담긴 값이 저장된다.)
                    저장된 모든 값을 index == 순서대로 번호를 매겨 기록한다.

                    const 유저 = {"name" : inputName, "age" : inputAge};
                    
                    0번째 = inputName == "신짱구" == "name" 이라는 명칭으로 신짱구 라는 이름이 저장
                           inputAge == 5 == "age" 라는 명칭으로 5 라는 숫자가 저장
                    
                    1번째 = inputName == "신짱아" == "name" 이라는 명칭으로 신짱아 라는 이름이 저장
                           inputAge == 2 == "age" 라는 명칭으로 2 라는 숫자가 저장
                */}
                {
                    userList.map( (유저, index) => {
                        return (
                            /* key 속성: 배열 반복 출력 시, 태그를 구분하는 key*/
                            <ul key={index}>
                                <li>index: {index}번째 유저</li>
                                <li>name: {유저.name}</li>
                                <li>age: {유저.age}</li>
                            </ul>
                        )
                    } )
                }
            </div>
        </UserContext.Provider>
    )
}
export default Parent;

/*
배열.map((요소, index) => {
    return (
        가져온 값 확인하기
    )
    })

배열의 각 값을 순서대로 하나씩 가져와서, return 에 전달
return 에서는 하나씩 가져온 값을 모두 모아, 최종적으로 새로운 배열을 반환

index 는 0 부터 자동으로 번호 매김이 시작되는 숫자 값이기 때문에, 기존에 작성한 다른 코드와 연관이 없다.
index == 번호매김용
*/