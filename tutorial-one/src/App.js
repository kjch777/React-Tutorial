import logo from './logo.svg';
import './App.css'; /* css 를 가져와, 아래 작성된 태그 옆에 className 으로 적용한다.*/
/*
기본 html 에서는 css 를 적용할 때, class 라는 명칭을 사용하지만,
React 에서 작성한 html 에서는 css 를 적용할 때, className 이라는 명칭을 사용한다.

css 나 다른 js 파일을 가져올 때는 import 를 사용한다.

  css 를 가져올 때는, import 'css 경로와 css 파일명' 형식으로 작성한다.
  js 를 가져올 때는, import [여기서 사용할 이름] from 'javascript 파일경로 / javascript 파일명';

R01_ClassComponent.js 를 가져와, App.js 에 적용해보기
R01_ClassComponent.js R01 이라는 별칭을 사용하여 App.js 적용해보기
*/

import R01 from './component/R01_ClassComponent.js';
import R02 from './component/R02_FunctionComponent.js';
import Props1 from './component/R03_Props.js';
import Props2 from './component/R04_Props2.js';
import Props3 from './component/R05_Props3.js';
import 예제1번 from './component/R06_State1.js'; // ' ' 와 " " 둘 다 사용 가능하다.
import 예제2번 from './component/R07_State2.js';
import 예제3번 from './component/R08_State3.js';
import 예제4번 from './component/R09_State4.js';
import 예제5번 from './component/R10_State5.js';
import 예제6번 from './component/R11_State6.js';
import 컨텍스트1 from './component/R12_Context1.js';
import 컨텍스트2 from './component/R13_Context2.js';
import 컨텍스트3 from './component/R15_Context3/Parent.js';
import 컨텍스트4 from './component/R16_Context4/최종출력공간.js'
import 부트스트랩1 from './component/R14_BootStrap.js';
import Ref예제1번 from './component/R19_useRef.js';
import Ref예제2번 from './component/R20_useRefInput.js';
import Ref예제3번 from './component/R21_useRefSignUp.js';
// R22_useRefEx ▶ {RefEx as Ref예제4번} ◀ named export
import {RefEx as Ref예제4번} from './component/R22_useRefEx.js';
import Dodgegobelin from './component/R23_Dodgegobelin/Dodgegobelin.js';
import {Axios_Ex1 as Axios예제1번} from './component/R25_Axios_Ex1.js';
import {Axios_Ex2 as Axios예제2번} from './component/R26_Axios_Ex2.js';
import {Fetch_Ex1 as Fetch예제1번} from './component/R28_Fetch_Ex1.js';
import {PhotoList as Fetch예제2번} from './component/R29_Fetch_Ex2.js';
import {Board as Board} from './component/R31_PagiNation/Board.js';
import {Album as Album} from './component/R32_PagiNationEx/Album.js';
import {Board as Board2} from './component/R32_PagiNationEx2/Board.js';
import {Profile as Profile} from './component/R33_Profile.js';
// import 할 명칭 맨 앞은 반드시 대문자여야 한다.

function App() {
  return (
    // react 는 주기적으로 자동 새로고침 된다.
    // 주석: /* 주로 설명이나 추가 내용을 작성할 때 사용 */
    //      {/* 주로 코드를 주석 처리할 때 사용 */} 
    <div className="App-header">
      {/*<R01/>*/}
      {/*<R02/>*/}
      {/*<Props1 num='1' name='신짱구' age='5' score='50'/>
      <Props1 num='2' name='이유리' age='5' score='75'/>
      <Props1 num='3' name='김철수' age='5' score='100'/>

      <h3>Props 예제 2번 확인하기</h3>
      <Props2 name='홍길동' age='15' gender='남자'/>
      {/* 
      <Props2 name='홍길동' age='15' gender='남자'/>
      Props2 객체는 아래와 같은 코드를 한 줄로 작성하기 위해 가져온 명칭이다.

      <div className="info">
            이름: 홍길동  / 나이: 15    / 성별: 남자
            이름: {name} / 나이: {age} / 성별: {gender}
        </div>
      */}

      {/*<h3>Props 예제 3번 확인하기</h3>
      <Props3 num='4' name='이훈이' age='5' gender='남자' phone='010-123-4567'/>
      {/* <Props3 num='4' name='이훈이' age='5' gender='남자' phone='010-123-4567'/>  */}

      {/*<예제1번/>

      <예제2번/>

      <예제3번 init='50' step='10'/>
      {/* init: 처음에 시작할 숫자값
          step: 숫자값이 얼마씩 변경될지 설정*/}

      {/*<예제4번 init='30' years='1'/>*/}

      {/*<예제5번/>

      <예제6번/>*/}
      {/*<컨텍스트1/>*/}
      {/*<부트스트랩1/>*/}
      {/*<컨텍스트2/>*/}
      {/*<컨텍스트3/>*/}
      {/*<컨텍스트4/>*/}
      {/*<Ref예제1번/>*/}
      {/*<Ref예제2번/>*/}
      {/*<Ref예제3번/>*/}
      {/*<Ref예제4번/>*/}
      {/*<Dodgegobelin/>*/}
      {/*<Axios예제1번/>*/}
      {/*<Axios예제2번/>*/}
      {/*<Fetch예제1번/>*/}
      {/*<Fetch예제2번/>*/}
      {/*<Board/>*/}
      {/*<Album/>*/}
      {/*<Board2/>*/}
      <Profile/>
    </div>
  );
}

export default App;
