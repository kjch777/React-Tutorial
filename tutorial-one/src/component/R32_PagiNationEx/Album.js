import React, { useEffect, useState } from "react";
import { PagiNation as PagiNation } from "./PagiNation";
import axios from "axios";

export const Album = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const imagePerPage = 5;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        
        .then((res) => {
            setData(res.data);
        })
        
        .catch((err) => {
            console.error("데이터를 가져오는데 실패했습니다.", err);
            // alert(err + " 발생");
        })
    }, [])

    const lastImage = currentPage * imagePerPage;
    const firstImage = lastImage - imagePerPage;
    const albumList = data.slice(firstImage, lastImage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1>React 페이지네이션 Album</h1>
                {albumList.map(album => (
                    <div key={album.id}>
                        <img src={album.thumbnailUrl}/>
                    </div>
                ))}
            <PagiNation itemPerPage={imagePerPage} totalItems={data.length} paginate={paginate} currentPage={currentPage}/>
        </>
    )
}