import { Component, React } from "react"
import LibraryService from "../services/LibraryService"
import RowPlaylists from "../RowPlaylist"
import addToastMessage from './../addToastMessage'
import { ToastContainer } from "react-toastify"



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
            ({ data }) => console.log(data),
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao buscar as playlists!')
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.playlists.map(
                        (item, index) => <RowPlaylists key={index} title={null} playlists={item.playlists} />
                    )
                }
                <ToastContainer/>
            </div>
        )
    }

}

export default MyLibrary