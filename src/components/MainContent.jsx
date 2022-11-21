import { Component, React } from "react"
import '../assets/css/MainContent.css'
import MainContentService from "./services/MainContentService"
import RowPlaylists from "./RowPlaylist"


class MainContent extends Component {
    constructor(props) {
        super(props)
        this.MainContServ = new MainContentService()
        this.state = {playlists: []}
    }   
 
    async componentDidMount() {  
        await this.getPlaylistsByGroups()
    }


    async getPlaylistsByGroups() {
        await this.MainContServ.getPlaylistsByGroups().then(
            ({ data }) => this.setState({playlists: data})
        )
    }



    render() {
        return (
            <section id="main-content-container" >
                {
                    this.state.playlists.map(
                        (item) => <RowPlaylists key={item.id} title={item.title} playlists={item.playlists} />
                    )
                
                }
            </section>
        )
    }

}

export default MainContent