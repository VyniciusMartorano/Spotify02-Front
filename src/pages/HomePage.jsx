import React from "react"
import Player from "../components/Player"
import "../css/HomePage.css"


export default () => {
    const musics = ['Post Malone - Circles.mp3']
    return (
        <section className="container-master">
            <Player queueMusics={musics}></Player>
        </section>
        
    )
}