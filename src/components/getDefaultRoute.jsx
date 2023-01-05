import React from "react"
import { Route } from "react-router-dom"


const getDefaultRoute = ({ path, component }) => {
    return (
        <Route key={0} exact path={path} element={component}/>
    )
}

export default getDefaultRoute