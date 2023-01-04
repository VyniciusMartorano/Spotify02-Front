import { Component, React } from "react"
import '../../assets/css/PlaylistsContent.css'
import PlaylistsContentService from "../services/PlaylistsContentService"
import RowPlaylists from "../RowPlaylist"
import { connect } from "react-redux"


class PlaylistsContent extends Component {
    constructor(props) {
        super(props)
        this.MainContServ = new PlaylistsContentService()
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
                <div>
                    {
                        this.state.playlists.map(
                            (item) => <RowPlaylists key={item.id} title={item.title} playlists={item.playlists} mode={'home'} />
                        )
                    }
                </div>

   
        )
    }

}

export default connect()(PlaylistsContent)