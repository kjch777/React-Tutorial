import {Routes, Route} from "react-router-dom";
// Routes, Route 를 import 하여 링크 설정
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      
      <Navbar /> {/* 링크들 모음이 시작되기 전에, 네비게이션 바에 이동 경로가 보이게 설정해준 것*/}
      
      <Routes> {/* 링크들 모음집 설정*/}
        {/* 
        Java 에서, @GetMapping("/") 형식으로 주소를 설정해주는 것이
        React 에서는 path="/" 이다.

        Java 에서, return "html파일명" 으로 보여줄 화면을 설정해주는 것이
        React 에서는 element={<Home />} 이다.

        단, index.js 는 React 에서 이미 사용하고 있는 이름이기 때문에,
        Index.js 또는 index 로 시작하는 이름은 피하는게 좋다.
        */}
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
