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
    }

    getUser() {
        this.LibServ.getUser().then(
            ({ data }) => this.setState({user: data}),
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao buscar o seu usuario!')
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.playlists.map(
                        (item) => <RowPlaylists key={item.id} title={null} playlists={item.playlists} />
                    )
                }
                <ToastContainer/>
            </div>
        )
    }

}

export default MyLibrary