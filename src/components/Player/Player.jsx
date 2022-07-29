import React, { Component } from "react"
import './Player.css'


export default class Player extends Component {
    render() {
        return (
        <div className="player-container">
            <div className="box-player">
                <div id="left-item-player-bar" className="item-player">
                    <div id="box-image-player">
                        //adicionar imagem funcional...
                        
                    <img src="../../images/capa_post.jpg" alt="" />
                    </div>
                   
                    
                </div>
                <div id="center-item-player-bar" className="item-player"></div>
                <div id="right-item-player-bar" className="item-player"></div>
            </div>
        </div>
        )
    }
}
