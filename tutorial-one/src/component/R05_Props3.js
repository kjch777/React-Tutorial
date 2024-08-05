const 부모3번 = (props) => {
    return(
        <div className="info-ex">
            <ul>
                <li>번호: {props.num} 번</li>
                <li>이름: {props.name}</li>
                <li>나이: {props.age} 세</li>
                <li>성별: {props.gender}</li>
                <li>전화 번호: {props.phone}</li>
            </ul>
        </div>
    );
    {/*
        const {num, name, age, gender, phone} = props;
        return (
            <div className="info-ex">
                번호: {num} / 이름: {name} / 나이: {age} / 성별: {gender} / 전화번호: {phone}
            </div>
        );
        */}
}

export default 부모3번;