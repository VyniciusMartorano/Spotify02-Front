import { Component, React } from "react"
import '../assets/css/LeftBar.css'


class LeftBar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        return (
            <section id="left-bar-container">
                <div id="top-side-left-bar-container">
                   <span className="">
                       <div className="icon-left-bar">
                            <i className="fa-solid fa-plus"></i>
                       </div>
                       <h3>Criar playlist</h3>
                   </span>
                </div>
                <div id="bottom-side-left-bar-container">
                    
                </div>
            </section>
        )
    }
}


export default LeftBar