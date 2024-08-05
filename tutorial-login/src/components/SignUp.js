import React, {useState} from "react";

/* 
F12 로 콘솔(console) 창에서 에러(error) 가 없는지 확인
만약 에러가 발생했다면, 백엔드 서버와 연결이 제대로 되지 않았을 가능성이 높다.
*/

export const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [result, setResult] = useState('');

    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');

    // 아이디 중복 검사와 아이디 중복 검사 이벤트 핸들러 추가
    
    // 아이디 중복 검사
    const [idValid, setIdValid] = useState(false);
    // false == 사용불가 true == 사용가능

    // 아이디 중복 검사 이벤트 핸들러
    const idDupCheck = (eventId) => {
        // eventId: 현재, 입력하는 이벤트가 발생한 Id
        setId(eventId);

        // 4글자 미만이면 중복 검사 자체를 실행하지 않게 만들기
        if(eventId.trim().length < 4) { // 입력된 Id 값에서 맨 앞과 맨 뒤의 공백을 제거하고, 제거 한 총 길이가 4보다 작다면
               // .trim() ◀ text 앞과 뒤의 공백 제거
                      // .length ◀ 길이
            setIdValid(false);
            return;

            // DB 에 중복되는 ID 가 있는지, 비동기로 ID 중복 검사 수행
            // axios 또는 fetch 를 사용해서 만들 수 있다.
        }
        fetch("/idCheck?id=" + eventId) // SpringBoot Controller 와 연결할 Mapping url
        .then(response => response.text())
        .then(result => {
            // 중복이 아닐 때 true, 중복일 때 false
            // Number(result) === 0 ◀ SpringBoot 에서, ID 가 중복되지 않았다면 0 을 전달 / ID 가 중복되었다면 0 이외의 값을 전달
            // 0 이 아니라 다른 숫자를 써도 된다.
            if(Number(result) === 0) {
                setIdValid(true);
            } else {
                setIdValid(false);
            }
        })
    }

    // 회원가입 버튼
    const SignupBtn = () => {
        // ID 가 유효하지 않으면 가입 불가
        if(!idValid) {
            alert('아이디가 유효하지 않습니다.');
            return;
        }
        // 비밀번호, 비밀번호 확인이 서로 일치하지 않으면 가입 불가
        if(pw !== pwCheck) {
            alert("비밀번호가 서로 일치하지 않습니다.");
            return;
        }

        // 회원가입 비동기 요청
        const inputValues = {}; // 맨 처음엔 들어온 값이 없으니, 빈 공간으로 설정한다.
        inputValues.id = id; // id 값이 들어오면 inputValues 에 id 값을 삽입
        inputValues.pw = pw; // pw 값이 들어오면 inputValues 에 pw 값을 삽입
        inputValues.name = name;
        
        // 만약, input 에 id 값으로 khT 를 작성하고, pw 값으로 kh123 을 작성하면,
        /* 
            const inputValues = {}; 에서,
        inputValues = {khT, kh123}; 으로 변경된다.
        */

        fetch("/signup", {
            method: "POST", // SpringBoot Container 에, @PostMapping("/signUp") 에 전달하겠다는 표시
            
            // headers: 메일로 비유하면 메일 주소 또는 메일 제목처럼, 초기에 어떤 것을 보내는지 설정해주는 곳이다.
            headers: {"Content-Type" : "application/json"},
            // <form> 태그에는, "Content-Type" : "application/json" 이 기본으로 설정되어있다.(눈에 보이지만 않을 뿐이다.)
            // 여기서는 form 태그를 사용하지 않았기 때문에, 적어주는 것이다.
            // Content-Type 을 작성해주어야 하는 이유
            // 데이터를 전달할 때, 이미지 파일 or 동영상 파일 or 다중 이미지 파일 or text only 등, 어떠한 데이터 종류인지 정보를 전달해주는 것이다.
            // application/json 이란, 
            // application == 코딩하는 폴더 자체를 의미한다. 폴더 1개 == application 1개
            // json == 개발자나 사용자가 작성한 여러 값을, key-value 형태로 1개 이상 주고 받을 수 있는 형태이다.
            
            body: JSON.stringify(inputValues) // 사용자가 작성한 모든 값을 전달하기
            // body: 내용 본문 작성 공간
        })
        // 결과를 응답 받아 저장해놓고,
        .then(response => response.text())
        .then(result => {
            if(Number(result) > 0) { // 결과가 0 보다 크다면(result === 1), 회원가입 완료
                setResult("회원가입 성공");
                
                // input 값들 모두 초기화
                setId('');
                setPw('');
                setPwCheck('');
                setName('');
            } else {
                setResult("회원가입 실패");
            }
        })
    }

    return (
        <div className="signup-container">
            {/* label 태그 내부에 htmlfor 코드를 작성하고 싶지 않다면,
                <label><input /></label> 형식으로 작성해주면 된다.
                ▲ 와 ▼ 의 코드는 서로 같다.
                <label htmlfor="id"></label><input id="id" />*/}
            <label>
                ID: 
                <input type="text" onChange={e => idDupCheck(e.target.value)} value={id} className={idValid ? '' : 'id-err'} />
            </label>
            <label>
                PW:
                <input type="password" onChange={e => {setPw(e.target.value)}} value={pw} />
            </label>
            <label>
                PW Check:
                <input type="password" onChange={e => {setPwCheck(e.target.value)}} value={pwCheck} />
            </label>
            <label>
                Name:
                <input type="text" onChange={e => {setName(e.target.value)}} value={name} />
            </label>
            <button onClick={SignupBtn}>회원가입 하기</button>
            <hr/>
            
            {/* 회원가입이 정상적으로 완료됐는지 결과 표시*/}
            <h3>{result}</h3>
        </div>
    )
}