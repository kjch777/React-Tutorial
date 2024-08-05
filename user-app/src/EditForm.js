import { useState } from "react";

const EditForm = ({user, updateUser}) => {
    // 수정하기 form 에, 수정하려는 기존 회원의 정보를 넣어주기 위해 ▶ useState(user); 작성
    /* 
        userList = [
                        { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
                        { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
                        { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
                    ]
        
        {userList.map((item, index) => (
            <User
              key={"user" + index}
              user={item}
              userList={userList}
              setUserList={setUserList}
              setEditUserBtn={setEditUser}
            />
        ))}
        
        userList 에서 user 1명씩 item 으로 정보 전달
        item 에 담긴 전달 받은 user 정보를 user 변수명에 회원 1명의 정보 저장
        
        저장된 user 변수명을 가져와, EditForm.js 에 아래와 같이 작성한다.
        const [formData, setFormData] = useState(user);
        user 에 담긴 정보가 formData 라는 변수에 저장되는 것이다.
    */
    const [formData, setFormData] = useState(user);
    const changeValue = (e) => { // 값 변경에 대한 e(event) 가 발생하면,
        const {name, value} = e.target; // event 가 발생한 곳의 name 과 value 를 가져오는 것이다.
        setFormData({...formData, [name] : value});
    };

    // input 에는 event 가 있지만,
    // button 에는 없다.
    const editUserSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
    }

    return (
        <>
            <form> {/* form ▶ submit === button ▶ onSubmit*/}
                <h2>회원정보 수정하기</h2>
                <label>
                    이름: <input type="text" name="name" value={formData.name} onChange={changeValue} />
                </label>
                <label>
                    나이: <input type="number" name="age" value={formData.age} onChange={changeValue} />
                </label>
                <label>
                    성별: <input type="text" name="gender" value={formData.gender} onChange={changeValue} />
                </label>
                <label>
                    전화번호: <input type="text" name="phone" value={formData.phone} onChange={changeValue} />
                </label>
                <button type="button" onClick={editUserSubmit}>저장하기</button>
            </form>
        </>
    )
}

export default EditForm;