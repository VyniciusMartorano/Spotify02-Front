import React from "react"
import { Navigate, Route } from "react-router-dom"
import { useSelector } from "react-redux"

 function PrivateRoute ({ children }) {
    const isLogged = useSelector(state => state.coreReducer.isLogged)

    return isLogged ? children : <Navigate to="/login" />
}


const getPrivateRoute = (item) => {
    return (
        <Route 
            key={0}
            path={item.path} 
            element={<PrivateRoute> {item.component} </PrivateRoute>} 
        />
    )
}

export default getPrivateRoute