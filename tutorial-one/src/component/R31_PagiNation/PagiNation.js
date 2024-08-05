import './Pagination.css';
/* 
    itemPerPage: 한 페이지 안에 보여줄 항목 수 
    totalItems: 전체 항목 수 
    paginate: 페이지의 번호를 업데이트 하는 함수 
    currentPage: 현재 보고 있는 페이지의 번호
*/
export const PagiNation = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];

    // 전체 항목 수와 페이지 당 항목 수를 바탕으로 전체 페이지의 수를 계산하고,
    // pageNumbers 에 페이지 번호를 저장할 것
    /* 
    전체 항목 수: 53개의 글이 존재한다. 한 페이지 당 10개의 글씩 보여줄 것이다.
    ceil == 올림 / 5.3 ▶ 6
    */
    for(let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        console.log("PagiNation i Value: " + i);
        pageNumbers.push(i); // push == 값 추가 / pageNumbers 에 만들어진 번호들을 모두 추가해주는 것이다.
    }

    return (
        <nav>
            <ul className='pagination'>
                {/* className={`page-item ${currentPage === number ? 'active' : ''}`}
                    page-item 이라는 className 이 존재하는 것
                    만약, 현재 페이지 번호와 map 에서 가리키는 번호가 서로 일치한다면
                    className = "page-item active"
                    현재 페이지 번호와 map 에서 가리키는 번호가 서로 다르다면
                    (현재 페이지 이외의 다른 페이지 번호들)
                    className = "page-item */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        {/* !# 은, 클릭 이벤트가 발생했을 때, 페이지가 새로고침 되는 것을 막아준다.
                            <a onClick={(e) => {e.preventDefault(); paginate(number); } } href='/'>
                                        ▲ 코드와 ▼ 코드는 서로 같다.*/}
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}