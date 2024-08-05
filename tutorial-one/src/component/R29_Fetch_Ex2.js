import React, {useState, useEffect} from "react";

export const PhotoList = () => { // export default 형식으로 한번 더 작성할 것이라면, 맨 밑에 작성해 주어야 한다.
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            return res.json();
        })

        .then(data => {
            // setPhotos(data); API 주소에 작성된 모든 데이터 가져오기
            // 데이터의 일부분만 가져오려면, slice 를 사용하면 된다.
            // slice(시작지점, 종료지점)
            setPhotos(data.slice(0, 10)); // 데이터 처음 ~ 10 개까지만 가져오기
        })

        .catch(e => {
            alert("오류 발생" + e);
        })
    }, [])

    return (
        <>
            <h1>사진 목록</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.albumId}>
                        <img src={photo.thumbnailUrl}/>
                        <p>{photo.title}</p>
                    </li>
                ))}
                <li>

                </li>
            </ul>
        </>
    )
}