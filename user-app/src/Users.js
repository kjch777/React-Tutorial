const User = ({user, userList, setUserList, setEditUserBtn}) => {
  /*
    const User = ({user, userList, setUserList, setEditUser}) => {
      ▲ 와 ▼ 는 동일하다.
    const User = (props) => {
    const user = props.user;
    const userList = props.userList;
    const setUserList = props.setUserList;
    const setEditUser = props.setEditUser;
  */

  const deleteUser = () => {
    const newUserList = userList.filter((item) => (
      item !== user // 선택한 번호만 모두 삭제
      // return item === user; ◀ 선택한 번호 이외에 모두 삭제
    ));

  {/* 
    const deleteUser = () => {
    const newUserList = userList.filter((item) => {
      return item !== user; // 선택한 번호만 모두 삭제
      // return item === user; ◀ 선택한 번호 이외에 모두 삭제
    }); ◀ 옛날 형식 / 위와 기능은 동일하다.
  */}

    setUserList(newUserList);
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>

      <td>
        <button onClick={deleteUser}>삭제하기</button>
      </td>

      <td>
        <button onClick={() => setEditUserBtn(user)}>수정하기</button>
      </td>
    </tr>
  );
};
export default User;
