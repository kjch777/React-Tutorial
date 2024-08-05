import React, {useState} from 'react';
import './R33_Profile.css';

export const Profile = () => {
    const [selectedImages, setSelectedImages] = useState(null);

    const changeImg = (event) => {
        {/*
            const file = event.target.files[0]; // 파일은 리스트(목록) 로 존재한다. 0번째부터 ~까지
            // 이미지 다중 선택이 가능해지면, 이미지를 순서대로 가져올 것이다.
            // 파일은 모두 파일들이라는 전제 하에 파일을 선택하는 것이기 때문에,
            // 하나의 이미지를 선택할 때는 첫번째 자리(index == 0) 인 0번째 사진을 가져오는 것이다.
            if(file) { // 만약, 이미지 파일이 존재한다면
                const reader = new FileReader(); // 파일 읽기 모드 준비 FileReader 객체 생성
                reader.onloadend = () => { // 파일 읽기가 완료되었을 때, 실행 될 함수를 표현한 것이다.

                    // setSelectImg: 읽어온 파일 데이터를, selectImg 에 담겠다.
                    // reader.result: 파일의 내용(이미지를 컴퓨터 언어로 변환하여 작성한 코드를 주소 값으로 변경한 것. 데이터 주소(URL))
                    setSelectImg(reader.result);
                }
                // readAsDataURL 기능: 데이터 URL 을 글자 취급하여 읽기 시작. 
                // 주소는 String 문자열로 표현
                reader.readAsDataURL(file);
            }
        */}
        const files = event.target.files;
        const imagesArray = [];
        for(let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onloadend = () => {
                imagesArray.push(reader.result);
                if(imagesArray.length === files.length) {
                    setSelectedImages(imagesArray);
                }
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='profile-container'>
            <h1>프로필 사진 변경</h1>
            {/* accept="image/*" ◀ 이미지 파일 jpg, png, gif, ... 등과 같은 이미지 확장자 전부 허용*/}
            {/* input 태그를 숨기고, label 태그를 클릭하여 이미지 출력되게 하기*/}
            <label htmlFor='imgSelect'>사진 선택</label>
            <input type='file' accept='image/*' onChange={changeImg} id='imgSelect' multiple/>
            {/* 만약, 선택한 이미지가 존재한다면, 이미지 미리보기를 제공하기*/}
            {selectedImages && (
                <div>
                    <h2>미리보기</h2>
                    <img src={selectedImages} />
                </div>
            )}
        </div>
    )
}