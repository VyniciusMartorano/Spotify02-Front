import { Component, React } from "react"
import '../assets/css/LeftBar.css'
import LeftBarService from './services/LeftBarService'


class LeftBar extends Component {
    constructor(props) {
        super(props)

        this.state = {playlists: []}
        this.LeftBarServ = new LeftBarService()
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists() {
        this.LeftBarServ.getPlaylists().then(
            ({ data }) => this.setState({playlists: data})
        )
    }
    changeMidComponentTo(keyComponent) {
        this.props.changeMidComponentTo(keyComponent)
    }

    render() {
        return (
            <section id="left-bar-container">
                <div id="top-side-left-bar-container">
                    <span id="your-library"  className="left-bar-item-nav">
                       <div id="add-playlist-icon" className="icon-left-bar ">
                            <img
                                onClick={() => this.changeMidComponentTo('myLibrary')}
                                width={27}
                                height={27} 
                                src={require('../utils/images/icone_biblioteca.png')} 
                                alt="" 
                            />
                       </div>
                       <h3 onClick={() => this.changeMidComponentTo('myLibrary')} className="text-item-nav">Sua Biblioteca</h3>
                   </span>
                   <span className="left-bar-item-nav">
                       <div id="add-playlist-icon" className="icon-left-bar ">
                            <i 
                                onClick={() => this.changeMidComponentTo('createPlaylist')} 
                                className="fa-solid fa-plus add-playlist-icon">
                            </i>
                       </div>
                       <h3 onClick={() => this.changeMidComponentTo('createPlaylist')} className="text-item-nav">Criar playlist</h3>
                   </span>
                   <span className="left-bar-item-nav">
                       <div id="bookmark" className="icon-left-bar ">
                            <i className="fa-solid fa-bookmark bookmark" ></i>
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

                    {
                        this.state.playlists.map(
                            (item) => (
                            <div key={item.id} className="item-left-bar-playlist">
                                <span>{item.title}</span>
                            </div>)
                        )
                    }
                    
                    
                </div>
            </section>
        )
    }
}


export default LeftBar