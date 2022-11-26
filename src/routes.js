import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage  from "./pages/HomePage"
import Login  from "./pages/Login"
import MusicRegistration  from "./pages/MusicRegistration"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import getPrivateRoute from './components/PrivateRoute'





function App(props) {
    const privateRoutesComponents = [
        {component: <HomePage />, path: '/'},
        {component: <MusicRegistration />, path: '/addmusic'},

    ]

    return (
        <Provider store={store} >
            <PersistGate persistor={persistor} >
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />

                        {privateRoutesComponents.map((item) => getPrivateRoute(item))}

                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App