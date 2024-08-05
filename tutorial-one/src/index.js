import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // 모두 사용하는 css 는 index 에서 설정해준다.

const root = ReactDOM.createRoot(document.getElementById('root'));

{/*<React.StrictMode> </React.StrictMode> 문제가 없는지 모니터링 하는 코드로, 없어도 된다.*/}

root.render(
    <App />
);

reportWebVitals();
