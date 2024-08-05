/***** express: 백엔드 자바스크립트에서 많이 사용되는 프레임워크이다.
 *        자바에는 ◀ 스프링부트
 * 자바스크립트에는 ◀ 익스프레스 느낌이다.
 * 
 * require node 라는, JavaScript 를 편하게 이용할 수 있게 도구를 제공해주는 곳에서
 * express 라는 프레임워크를 가져와 백엔드 기능을 할 수 있도록 설정
 * app 이라는 객체를 생성하여, express 서버를 사용할 수 있는 공간을 만들어주는 것이다.
 * 
 * app.use(express.static("public")); // public 이라는 폴더에 있는 static(정적) 파일(HTML, CSS, JavaScript) 을 가져와 사용하겠다는 것
 * app.use(express.json()); // 내공간에서.사용하겠다(서버에서가져온.json파일을);
 * 클라이언트(HTML) 에서 보낸 json 데이터를, 서버에서 사용할 수 있도록 가져온 것이다.
 *  *****/
const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.json());

// TODO: 개발자센터에 로그인해서 내 결제위젯 연동 키 > 시크릿 키를 입력하세요. 시크릿 키는 외부에 공개되면 안돼요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
const apiSecretKey = "test_sk_5OWRapdA8dmqOla5DMzn3o1zEqZK"; // 여기를 내 시크릿키 로 수정

// 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
// 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
// @docs https://docs.tosspayments.com/reference/using-api/authorization#%EC%9D%B8%EC%A6%9D
const encryptedWidgetSecretKey = "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");
const encryptedApiSecretKey = "Basic " + Buffer.from(apiSecretKey + ":").toString("base64");

/*****
 * app.post("/confirm/widget", // 에서, post 로 들어오는 요청을 가져오는 주소 설정("HTML 과 통신할 주소(URL) 설정")
 * 
 * function (req, res) { // 요청이 들어오면 수행할 기능 작성 ( ) { 기능들 작성하는 공간}
 *                       // 요청이 들어오면 수행할 기능 작성 (req, res)
 *                                                         req: server 에 요청하는 값
 *                                                         res: server 에서 html 로 응답을 전달하는 값
 * 
 * const { paymentKey, orderId, amount } = req.body;
 *                                         req.body: server 에, DB 에 값을 삽입/수정해 달라고 요청하는 값들을 가지고 있는 body 에서,
 *         
 *         paymentKey: id 이름에서 paymentKey 로 된 id 이름의 값을 가지고 있는 변수
 *         orderId: id 이름에서 orderId 로 된 id 이름의 값을 가지고 있는 변수
 *         amount: id 이름에서 amount 로 된 id 이름의 값을 가지고 있는 변수
 *  *****/
// 결제위젯 승인
app.post("/confirm/widget", function (req, res) {
  const { paymentKey, orderId, amount } = req.body;

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기

  /*****
   * fetch("https://api.tosspayments.com/v1/payments/confirm", {
   * fetch 함수는 네트워크 요청을 보낼 때 사용한다.
   * 결제 승인을 받기 위해서는, toss 에 결제 확인을 전달해야 한다.
   * https://api.tosspayments.com ◀ toss 결제에 관련된 모든 내용이 들어있는 주소
   *                             /v1 ◀ 1 버전
   *                                /payments ◀ 결제에 관련된
   *                                         /confirm ◀ 확인하는 창구
      
      method: "POST", // 사용자(클라이언트) 가 결제 한 방식을 toss 에 전달 / toss 에서 잔액을 확인하거나, 결제 금액을 확인할 때는 GET
      
      headers: { // 데이터가 어떤 종류(영상/사진/글자 등) 인지 toss 에 미리 전달하는 것
      
      Authorization: encryptedWidgetSecretKey,
      Authorization: 여기서 결제한 것이 맞다는 인증 Key 를 보내는 것
      계좌비밀번호: 위에서 이미 작성해둔 계좌 비밀번호 가져오기

      "Content-Type": "application/json",
       Content-Type: 사용자(클라이언트) 가 전달하는 데이터가 어떤 종류/형식(영상/사진/글자 등) 인지 알려주는 것
     },
   *  *****/
  fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedWidgetSecretKey,
      "Content-Type": "application/json",
    },

    /***** 
     * body: JSON.stringify({ // 위의 코드가 모두 끝나면, 그 때부터 본문(목적) 확인을 진행한다.
     * 
     * orderId: orderId, 누구한테 돈을 보낼 것인지(사용자가 결제 한 곳)
     * amount: amount, 돈을 얼마 보낼 것인지(사용자가 얼마를 보낼 것인지 작성한 값)
     * paymentKey: paymentKey, 보내기 전에 마지막으로 비밀번호 입력
    }),
     * *****/
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
    }),

    /*****
     * body 에 요청한 값을 제대로 처리했는지, 처리 유무 확인
     * }).then(async function (response) {
         const result = await response.json();
         결과를 출력할테니 잠시 대기(await)

         console.log(result); // 결과 출력을 기다리면서 나오는 값 == 개발자 확인용

         if (!response.ok) { // 돈을 보내는 데 문제(잔액이 부족한지, 계좌에 문제는 없는지 등) 가 있다면,
      
         res.status(response.status).json(result);

         return;
       }
       
       res.status(response.status).json(result); 
    // 처리가 거의 끝났으니, 사용자(클라이언트) 의 결제 내용 결과를 전달하겠다. ▶ 여기까지 됐다면 결제 결과 조회 페이지로 이동시키면 된다.
     *  *****/
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 결제 완료 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

// 결제창 승인
app.post("/confirm/payment", function (req, res) {
  const { paymentKey, orderId, amount } = req.body;

  fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      
      res.status(response.status).json(result);

      return;
    }

    
    res.status(response.status).json(result);
  });
});

// 브랜드페이 승인
app.post("/confirm/brandpay", function (req, res) {
  const { paymentKey, orderId, amount, customerKey } = req.body;

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기
  fetch("https://api.tosspayments.com/v1/brandpay/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: orderId,
      amount: amount,
      paymentKey: paymentKey,
      customerKey: customerKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 결제 완료 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

// 브랜드페이 Access Token 발급
app.get("/callback-auth", function (req, res) {
  const { customerKey, code } = req.query;

  // 요청으로 받은 customerKey 와 요청한 주체가 동일인인지 검증 후 Access Token 발급 API 를 호출하세요.
  // @docs https://docs.tosspayments.com/reference/brandpay#access-token-발급
  fetch("https://api.tosspayments.com/v1/brandpay/authorizations/access-token", {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grantType: "AuthorizationCode",
      customerKey,
      code,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 발급 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 발급 성공 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

const billingKeyMap = new Map();

// 빌링키 발급
app.post("/issue-billing-key", function (req, res) {
  const { customerKey, authKey } = req.body;

  // AuthKey 로 카드 빌링키 발급 API 를 호출하세요
  // @docs https://docs.tosspayments.com/reference#authkey로-카드-빌링키-발급
  fetch(`https://api.tosspayments.com/v1/billing/authorizations/issue`, {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerKey,
      authKey,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 빌링키 발급 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 빌링키 발급 성공 비즈니스 로직을 구현하세요.
    // TODO: 발급된 빌링키를 구매자 정보로 찾을 수 있도록 저장해두고, 결제가 필요한 시점에 조회하여 카드 자동결제 승인 API 를 호출합니다.
    billingKeyMap.set(customerKey, result.billingKey);
    res.status(response.status).json(result);
  });
});

// 카드 자동결제 승인
app.post("/confirm-billing", function (req, res) {
  const { customerKey, amount, orderId, orderName, customerEmail, customerName } = req.body;

  // 저장해두었던 빌링키로 카드 자동결제 승인 API 를 호출하세요.
  fetch(`https://api.tosspayments.com/v1/billing/${billingKeyMap.get(customerKey)}`, {
    method: "POST",
    headers: {
      Authorization: encryptedApiSecretKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerKey,
      amount,
      orderId,
      orderName,
      customerEmail,
      customerName,
    }),
  }).then(async function (response) {
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      // TODO: 자동결제 승인 실패 비즈니스 로직을 구현하세요.
      res.status(response.status).json(result);

      return;
    }

    // TODO: 자동결제 승인 성공 비즈니스 로직을 구현하세요.
    res.status(response.status).json(result);
  });
});

app.listen(port, () => console.log(`http://localhost:${port} 으로 샘플 앱이 실행되었습니다.`));
