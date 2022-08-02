import React, { Component } from "react"
import '../css/IconHeart.css'



//fazer um componente para habilitar um e desativar o outro quando a variavel for atualizada
//<i class="fa-solid fa-heart i"></i>
//<i class="fa-regular fa-heart i"></i>

export default class IconHeart extends Component {

    
    render () {
        return (
            <div>
                <i className="fa-regular fa-heart icon-heart"></i>
                <i style={{display: 'none'}} className="fa-solid fa-heart icon-heart"></i>
            </div>
        )
    }
}