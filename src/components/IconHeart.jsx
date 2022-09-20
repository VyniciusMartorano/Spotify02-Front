import React, { Component } from "react"
import '../assets/css/IconHeart.css'




export default class IconHeart extends Component {
    constructor (props) {
        super(props)
        this.liked = props.state
    }
    
    render () {
        return (
            <div>             
               <i 
               className={this.liked ? 
               "fa-regular fa-heart icon-heart" 
               : "fa-solid fa-heart icon-heart"}></i>  
            </div>
        )
    }
}