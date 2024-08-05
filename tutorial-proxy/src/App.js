function App() {
  return (
    <>
      <h1>백엔드 스프링과 연결하기</h1>
      <pre>
        package.json 내부에
        
        ,
        /* 백엔드 주소: 포트와 연결하기 위해 설정*/
        "proxy" : "http://localhost:9090" 코드를 작성해주면,
        9090 포트로 설정한 spring-boot 와 연결할 수 있다.  

        "proxy" 의 위치는 package.json 내부에서, { } 바깥이라면 어느 위치에 작성하건 상관없다.
      </pre>
    </>
  );
}

export default App;
