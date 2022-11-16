import { Component, React } from "react"
import '../assets/css/MainContent.css'
import MusicRegistrationService from "./services/MainContentService"



class MainContent extends Component {
    constructor(props) {
        super(props)

        this.MainContServ = new MusicRegistrationService()

    }   
 
    componentDidMount() {  
        this.getDefaultPlaylists()
    }

    getDefaultPlaylists() {
        this.MainContServ.getDefaultPlaylists().then(
            ({ data }) => this.playlists = data
        )
    }

    getPlaylistsByUser() {
        this.MainContServ.getPlaylistsByUser(this.user.id).then(
            ({ data }) => this.playlists += data
        )
    }
    


    render() {
        return (
            <section id="main-content-container" >
                <div className="row-main-container">
                    <h3 className="h3-main-container-title-row">Tocados recentemente</h3>
                    <div className="container-cards">
                        <div className="card-main-container">    
                            <img 
                                className="img-card"
                                width={"195px"}
                                height={"195px"}
                                src={require('./this-is-drake.jpg')} 
                                alt="" 
                            />
                            <span className="title-card-main-container">This Is Drake</span>
                            <p className="subtitle-card-main-container">Os maiores sucessos e as novidades mais esperadas</p>
                        </div>
                        <div className="card-main-container">    
                            <img 
                                className="img-card"
                                width={"195px"}
                                height={"195px"}
                                src={require('./this-is-drake.jpg')} 
                                alt="" 
                            />
                            <span className="title-card-main-container">This Is Drake</span>
                            <p className="subtitle-card-main-container">Os maiores sucessos e as novidades mais esperadas</p>
                        </div>
                    </div>
                </div>
            

            </section>
        )
    }

}

export default MainContent