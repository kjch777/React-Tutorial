import React, {useState} from "react";

const 댓글내용 = (props) => {
    const {handler} = props;

    return (
        <>
            <label htmlFor="inputComment">댓글내용</label> &nbsp;
            <textarea id="inputComment" onChange={handler}/>
        </>
    )
}

const 작성자 = ({handler}) => {

    return (
        <>
            <label htmlFor="inputWriter">작성자</label> &nbsp;
            <input type="text" id="inputWriter" onChange={handler}/>
        </>
    )
    
}

const 댓글창 = () => {
    // 상태 변수 선언
    const [comment, setComment] = useState(''); // 여기 빈 값이면 ' ' 를 써줘야 한다.
    const [writer, setWriter] = useState('');

    const writerControl = (e) => {
        setWriter(e.target.value)
    }
    const commentControl = (e) => {
        setComment(e.target.value)
    }

    return (
        <>
            {/* 댓글 입력 창과 댓글 작성자 입력 창을 보여주고,
                둘 중 하나라도 입력되어 있지 않으면 버튼 비활성화,
                둘 다 입력되어 있다면 버튼 활성화 하기*/}

            <작성자 handler={writerControl}/>
            <댓글내용 handler={commentControl}/>
            <button disabled={writer.length === 0 || comment.length === 0}>댓글 작성하기</button>
        </>
    )
}

export default 댓글창;