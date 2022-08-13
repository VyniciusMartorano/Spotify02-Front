import React, { Component } from "react"
import '../assets/css/IconHeart.css'



//fazer um componente para habilitar um e desativar o outro quando a variavel for atualizada
//<i class="fa-solid fa-heart i"></i>
//<i class="fa-regular fa-heart i"></i>

export default class IconHeart extends Component {
    constructor (props) {
        super(props)
        this.liked = props.state
        console.log(this.state)
    }
    
    render () {
        return (
            <div>             
               <i className={this.liked ? "fa-regular fa-heart icon-heart" : "fa-solid fa-heart icon-heart"}></i>  
            </div>
        )
    }
}