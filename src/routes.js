import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage  from "./pages/HomePage"
import MusicRegistration  from "./pages/MusicRegistration"

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'



function App(props) {
    return (
        <Provider store={store} >
            <PersistGate persistor={persistor} >
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/addmusic" element={<MusicRegistration />} />

                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App