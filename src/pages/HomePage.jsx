import React from "react"
import Player from "../components/Player"
import "../css/HomePage.css"


export default () => {
    const musics = ['fsdfd', 'bfsdjf']
    return (
        <section className="container-master">
            <Player nome="bruno" musics={musics}></Player>
        </section>
        
    )
}