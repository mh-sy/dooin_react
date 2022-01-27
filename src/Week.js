import React from "react";
import {useNavigate} from 'react-router-dom';

function Week({day}) {
    let {id, score, title} = day

    const Good = () => {
        let scoreArr1 = [];
        for (let i = 0; i < score; i++) {
            scoreArr1.push(<div className="yellow"></div>)
        }

        return scoreArr1;
    }

    const Bad = () => {
        let scoreArr2 = [];
        for (let j = 0; j < 5 - score; j++) {
            scoreArr2.push(<div className="gray"></div>)
        }
        return scoreArr2;
    }

    let Navigate = useNavigate()
    const toHome = () => {
        Navigate("/" + title)
    }

    return (
        <div className="week" key={id}>
            <p>{title}</p>
            {Good()}
            {Bad()}
            <div className="triangle" onClick={toHome}></div>
        </div>
    )
}

export default Week