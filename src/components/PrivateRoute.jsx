import React from "react"
import { Navigate, Route } from "react-router-dom"




 function PrivateRoute ({ children }) {
    const tokenIsValid = false

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