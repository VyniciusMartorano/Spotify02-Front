import React from "react"
import Player from "./Player/Player"
import './HomePage.css'


export default () => {
    const array = ['fdjkhfs', 'joao']

    return (
        <section className="container-master">       
            <Player pp={array}></Player>
        </section>
        
    )
}