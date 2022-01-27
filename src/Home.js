import React from "react";
import Week from './Week';

function Home() {
    let randomArr = [];
    for (let i = 0; i < 7; i++) {
        let random = Math.floor(Math.random() * (5)) + 1;
        randomArr[i] = random
    }

    let weekdata =
        [
            {
                id: 1,
                title: '월',
                score: randomArr[0],
            },
            {
                id: 2,
                title: '화',
                score: randomArr[1],
            },
            {
                id: 3,
                title: '수',
                score: randomArr[2],
            },
            {
                id: 4,
                title: '목',
                score: randomArr[3],
            },
            {
                id: 5,
                title: '금',
                score: randomArr[4],
            },
            {
                id: 6,
                title: '토',
                score: randomArr[5],
            },
            {
                id: 7,
                title: '일',
                score: randomArr[6],
            },


        ]

        return (
            <div>
                <h3>내 일주일은?</h3>
              {weekdata.map( (day) => {
                  return (
                      <Week day={day}/>
                  )
              })}
            </div>
        )
}
// const Home = (props) => {
//     return (
//         <div>
//             <h3>내 일주일은?</h3>
//             <Week></Week>
//         </div>

//     )
// }

export default Home