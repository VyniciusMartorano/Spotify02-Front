import React from "react"
import { Navigate, Route } from "react-router-dom"
import { getToken } from "./services/auth"


 function PrivateRoute ({ children }) {
    const tokenIsValid = getToken() ? true : false
    
    return tokenIsValid ? children : <Navigate to="/login" />
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