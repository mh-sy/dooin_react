import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Detail = (props) => {
    const navigate = useNavigate();
    const today = useParams();

    return (
        <div>
            <h3><span className = "orange">{today.day}요일</span> 평점 남기기</h3>
            <button className="score" onClick={() => {
                navigate('/')
            }
            }>평점 남기기
            </button>
        </div>
    )
}

export default Detail