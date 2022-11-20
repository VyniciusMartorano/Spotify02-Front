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
                    <span id="your-library" className="left-bar-item-nav">
                       <div id="add-playlist-icon" className="icon-left-bar ">
                            <img
                                width={27}
                                height={27} 
                                src={require('../utils/images/icone_biblioteca.png')} 
                                alt="" 
                            />
                       </div>
                       <h3 className="text-item-nav">Sua Biblioteca</h3>
                   </span>
                   <span className="left-bar-item-nav">
                       <div id="add-playlist-icon" className="icon-left-bar ">
                            <i className="fa-solid fa-plus add-playlist-icon"></i>
                       </div>
                       <h3 className="text-item-nav">Criar playlist</h3>
                   </span>
                   <span className="left-bar-item-nav">
                       <div id="bookmark" className="icon-left-bar ">
                            <i className="fa-solid fa-bookmark bookmark"></i>
                       </div>
                       <h3 className="text-item-nav">Seus episódios</h3>
                   </span>
                   <span className="left-bar-item-nav">
                       <div id="liked-musics-button" className="icon-left-bar ">
                            <i className="fa-solid fa-heart"></i>
                       </div>
                       <h3 className="text-item-nav">Seus episódios</h3>
                   </span>
                </div>
                <div className="line"></div>
                <div id="bottom-side-left-bar-container">
                    <div className="item-left-bar-playlist">
                        <span>Rock Forever</span>
                    </div>
                    <div className="item-left-bar-playlist">
                        <span>TRAP 2022 - SÓ AS BRABA</span>
                    </div>
                </div>
            </section>
        )
    }
}


export default LeftBar