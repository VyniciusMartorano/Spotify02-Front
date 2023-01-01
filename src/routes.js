import React from "react"
import { Routes, BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'

import getPrivateRoute from './components/PrivateRoute'
import getDefaultRoute from "./utils/getDefaultRoute"

import MusicRegistration  from "./pages/MusicRegistration"
import Login  from "./pages/Login"
import HomePage  from "./pages/HomePage"





function App(props) {
    const defaultRoutes = [
        {component: <Login />, path: '/login'},
    ]
    const privateRoutesComponents = [
        {component: <HomePage />, path: '/'},
        {component: <MusicRegistration />, path: '/addmusic'},
    ]

    return (
        <Provider store={store} >
            <PersistGate persistor={persistor} >
                <BrowserRouter>
                    <Routes>
                        {defaultRoutes.map((item) => getDefaultRoute(item))}
                        {privateRoutesComponents.map((item) => getPrivateRoute(item))}
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App