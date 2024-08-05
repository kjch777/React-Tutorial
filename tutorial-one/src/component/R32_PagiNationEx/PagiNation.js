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

    const totalPages = Math.ceil(totalItems / itemPerPage); // 전체 페이지 수를 계산하고, 올림 처리한 것

    for(let i = 1; i <= totalPages; i++) {
        console.log("PagiNation i Value: " + i);
        pageNumbers.push(i); // push == 값 추가 / pageNumbers 에 만들어진 번호들을 모두 추가해주는 것이다.
    }

    // 페이지 번호 새로고침 함수
    // 모든 페이지 번호를 전부 한 번에 보여주는 것이 아니라, 10 개씩만 보여줄 것
    const renderPageNumber = () => {
        if(totalPages <= 10) {
            return pageNumbers;
        }

        // 시작 페이지 번호
        // currentPage -5 ◀ 현재 페이지에서 5를 뺀 값
        // 현재 페이지를 중심으로, 앞쪽에 있는 5개의 페이지 번호를 표시할 수 있도록 설정해준 것이다.
        // 시작 페이지 번호로 -가 나올 것을 방지하기 위해, Math.max 를 사용한 것이다.
        // Math.max(1, 현재 페이지 번호 -5) 시작 페이지 번호의 최소값은 무조건 1이어야 한다.
        // Math.max(max가 되는 숫자 작성/해당 숫자보다 작은 수는 max 값으로 가져오지 못하도록 설정, 숫자 비교 값)
        const startPage = Math.max(1, currentPage -5);

        // 끝 페이지 번호
        // totalPages == 가장 큰 수
        // 끝 페이지 번호는 전체 페이지 수를 초과할 수 없기 때문에,
        // 전체 페이지 수인 totalPages 이상으로는 값을 가져오지 못하도록 설정한 것이다.
        // Math.min(총 페이지 수 15, 현재 페이지 12 + 4 = 16) 15를 초과하는 수가 들어올 수 없도록 마지노선을 설정한 것이다.
        const endPage = Math.min(totalPages, currentPage +5);

        // 현재 페이지를 중심으로, 최대 11개의 페이지 번호를 전달할 것
        // startPage == 1
        // 배열의 index == 0
        // index 값을 맞추기 위해 1 -1 = 0 ~ 마지막 페이지
        // 예를 들어, startPage 가 3이고 endPage 가 9 라면, 2, 9 가
        return pageNumbers.slice(startPage -1, endPage); // startPage -1
    }

    return (
        <nav>
            <ul className='pagination'>
                {/* 총 11 페이지까지만 보여주고, << 모양으로 이동하는 기능 만들기 */}
                {currentPage > 1 && (<li><a onClick={() => paginate(currentPage -1)} href='!#' className='page-link'>&laquo;</a></li>)}
                {/* 모든 페이지 번호 전부*/}
                {renderPageNumber().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                {/* 총 11 페이지까지만 보여주고, >> 모양으로 이동하는 기능 만들기 */}
                {currentPage < totalPages && (<li><a onClick={() => paginate(currentPage +1)} href='!#' className='page-link'>&raquo;</a></li>)}
            </ul>
        </nav>
    )
}