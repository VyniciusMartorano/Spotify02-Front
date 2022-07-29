import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage"


function App (props) {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<HomePage/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default App