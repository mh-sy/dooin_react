import React from "react";
import {Route, Routes} from "react-router-dom"
import './App.css'

import Home from "./Home";
import Week from "./Week";
import Detail from "./Detail";

function App() {
    return (
        <div className="App">
            <div className="wrap">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/:day" element={<Detail />}/>
                </Routes>
            </div>
        </div>
    );
}



export default App;