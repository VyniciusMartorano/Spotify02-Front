import { Component, React } from "react"
import LibraryService from "../services/LibraryService"
import RowPlaylists from "../RowPlaylist"
import addToastMessage from './../addToastMessage'
import { ToastContainer } from "react-toastify"
import { connect } from "react-redux"


class MyLibrary extends Component {
    constructor(props) {
        super(props)
        this.LibServ = new LibraryService()
        this.state = {playlists: []}
    }   

    componentDidMount() {
        this.getUser()
        this.getPlaylists()
    }

    getUser() {
        this.LibServ.getUser().then(
            ({ data }) => this.setState({user: data}),
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao buscar o seu usuario!')
        )
    }

    getPlaylists() {
        this.LibServ.getPlaylistsByGroups().then(
            ({ data }) => this.setState({playlists: data}),
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao buscar as playlists!')
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.playlists.map(
                        (item, index) => <RowPlaylists key={index} title={null} playlists={item} mode={'library'} />
                    )
                }
     
                <ToastContainer/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        state
    })
}

export default connect(mapStateToProps)(MyLibrary)