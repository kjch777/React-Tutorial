import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './MovieRating.css';

export const MovieRating = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')

        .then(res => {

            // 위 url 은 [ ] 가 아니라 { } 에서 시작하기 때문에, { } 데이터를 감싸줄 임의의 변수명 res 를 사용한 것이다.
            // res = [ ] .data ◀ 데이터를 가져오겠다.
            // 주소 값에 key 명칭으로 작성된 data 에서, movies 라는 key 명칭 안에 적힌 title 과 이미지들을 가져오겠다.
            // [ { data{movie{를 가져올 것} } } ]
            setMovies(res.data.data.movies); // { } 들에서 data 를 가져오겠다.

            // 영화 데이터를 모두 가져왔다면, 로딩 중을 false 로 변경하기
            setLoading(false);
        })

        .catch(e => {
            alert("오류 발생" + e);
        })
    }, [])

    // JavaScript 에서 innerHTML 을 사용했던 것처럼, React 에서도 innerHTML 을 사용할 수 있다.

    // 만약, 로딩 중이라면 로딩 div 보여주기
    if(loading) return <div>로딩 중입니다...</div>;

    /*
        영화 데이터를 가져올 때, 이미지가 있기 때문에 데이터를 가져오는 속도가 느리다.
        사용자에게 화면이 보여지기 전에 로딩 중이라는 표시를 보여주어,
        사용자가 로딩 되기를 기다릴 수 있게 해주는 것이다.
        맨 처음엔 로딩을 true 로 설정하여, 로딩 중 이라는 임시 화면을 출력하고,
        데이터를 모두 가져오면 로딩을 false 로 변경하여, 기존에 return 에 작성한 html 코드를 보여주는 것이다.

        if(loading) return <div>로딩 중입니다...</div>;
            ▲ 코드와 ▼ 코드는 서로 같다.
        if(loading) {
            return (
                <div>로딩 중입니다...</div>
            )
        }
    */

    return (
        <div className='movie-container'>
            <h1>평점 좋은 영화들</h1>
            <div className='movie-contents'>
                {movies.map(movie => (
                    <div key={movie.id} className='movie'>
                        <img src={movie.medium_cover_image} />
                        <h2>{movie.title}</h2>
                        <p>평점: {movie.rating}점</p>
                        <p>개봉 년도: {movie.year}년</p>
                        <p>상영 시간: {movie.runtime}분</p>
                    </div>
                ))}
            </div>
        </div>
    )
}