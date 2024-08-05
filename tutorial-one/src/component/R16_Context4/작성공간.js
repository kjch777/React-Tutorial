import React, {useState, useContext} from "react";

import 유저정보모두저장 from './유저정보모두저장.js';

// input 태그를 만들고, 저장하는 버튼 생성
const 작성공간 = () => {
    const {userList, setUserList} = useContext(유저정보모두저장);
    
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {

        const user = {"inputName" : inputName, "inputPhone" : inputPhone};
     // const user = {inputName : inputName, inputPhone : inputPhone};
     // 영어는 " " 또는 ' ' 로 감싸지 않아도 괜찮다.
        const newUserList = [...userList, user];
        setUserList(newUserList);

        // 유저 정보가 저장되면, input 에 작성된 내용 모두 지우기
        setInputName(''); // 이름 입력 칸 모두 지우기
        setInputPhone(''); // 번호 입력 칸 모두 지우기
    }
    
    return (
        <div>
            <label htmlFor="inputName">이름</label> &nbsp;
            <input type="text" id="inputName" onChange={(e)=>{setInputName(e.target.value)}} value={inputName}/>

            <br></br>
            <br></br>

            <label htmlFor="inputPhone">번호</label> &nbsp;
            <input type="text" id="inputPhone" onChange={(e)=>{setInputPhone(e.target.value)}} value={inputPhone}/>
            &nbsp; <button onClick={유저추가}>추가버튼</button>
        </div>
    )
}
export default 작성공간;