import React, { Component } from "react"
import './style.css'
import Dropdown from "../../DropDown"
import InputMusic from "../../InputMusic"
import MusicRegistrationService from "./Service"
import listHaveEmptyItem from "../../../utils/isEmpty"
import 'react-toastify/dist/ReactToastify.css'
import CustomMessage from "../../CustomMensageToast"
import getFileExtension from "../../../utils/getFileExtension"


class MusicRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameMusic: '',
            responseIsLoading: false,
            downloadMode: 0,
            artist: 0,
            genero: 0,
            music_url: null,
            music_file: null,
            image: '',
            artists: [],
            generos: [],
        }

        this.ACCEPTED_MUSIC_EXTENSIONS = ['mp3', 'mp4', 'wav']
        this.MusicRegServ = new MusicRegistrationService()
    }
   

    componentDidMount() {
        this.setArtists()
        this.setGeneros()
    }

    setArtists () {
        this.MusicRegServ.getArtists().then(
            ({ data }) => this.setState({artists: data, artist: data[0].id}),
            (error) => this.addToastMessage('error', 'Houve um erro ao recuperar os artistas', error.response.data)
        )
    }

    async setGeneros () {
        await this.MusicRegServ.getGeneros().then(
            ({ data }) =>  this.setState({generos: data, genero: data[0].id}),
            (error) => this.addToastMessage('error', 'Houve um erro ao recuperar os gêneros', error.response.data)
        )
    }


    allFieldsAreFilled  () {
        const formFields = [
            this.state.nameMusic, 
            this.state.artist, 
            this.state.genero, 
            ((this.state.downloadMode == 1) ? this.state.music_url : this.state.music_file)
        ]
        if (listHaveEmptyItem(formFields)) return false
        else return true
    }

    musicFormatIsValid () {
        if (
            !this.ACCEPTED_MUSIC_EXTENSIONS.includes(
                getFileExtension(this.state.music_file[0].name)
            )
        ) return false
        
        return true
    }

    addToastMessage (type, title, bodyMsg) {
        toast[type](
            <CustomMessage 
                title={title}
                bodyMsg={bodyMsg} 
            />,
            {autoClose: 3000}
        )
    }


    saveMusic = () => {
        if (!this.allFieldsAreFilled()) {
            this.addToastMessage('error', 'Existem campos incompletos', 'Preencha todos os campos e tente novamente')
            return
        }

        if(this.state.music_file) {
            if (!this.musicFormatIsValid()) {
                this.addToastMessage('error', 'Formato de música inválido ', `Formatos aceitos: ${this.ACCEPTED_MUSIC_EXTENSIONS}`)
                return 
            }
        }

        this.setState({responseIsLoading: true})

        const formData = new FormData()
        formData.append("name_music", this.state.nameMusic)
        formData.append("artist_id", this.state.artist)
        formData.append("genero_id", this.state.genero)
        formData.append("image", this.state.image)

        if (this.state.music_url) formData.append("music_url", this.state.music_url)
        else if (this.state.music_file) formData.append("music_file", this.state.music_file[0])
        
    
        this.MusicRegServ.insertMusic(formData).then(
            () => this.addToastMessage('success','Sucesso', 'A música foi salva com sucesso'),
            (error) => this.addToastMessage('info','Atenção!', error.response.data)
            
        ).finally(
            () => this.setState({responseIsLoading: false})
        )

    }

    render () {
        return (
            
            <section className="mt-4">
                <div className="grid mb-3">
                    <div className="col-3">
                        <label htmlFor="name" className="label">Nome</label>
                        <input
                            id="name"
                            type="text"
                            className="text-input"
                            value={this.state.nameMusic}
                            onChange={({ target }) => this.setState({nameMusic: target.value})}
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="artist" className="label">Artista</label>
                        <Dropdown
                            IdforSelectLabel="artist"
                            data={this.state.artists}
                            optionLabel="name"
                            optionValue="id"
                            onChange={(value) => this.setState({artist: value})}
                        />
                    </div>
                    <div className="col-3">
                        <label className="label" htmlFor="genero">Genero</label>
                        <Dropdown 
                            IdforSelectLabel="genero" 
                            data={this.state.generos}
                            optionLabel="descricao"
                            optionValue="id"
                            onChange={(value) => this.setState({genero: value})}
                        />
                    </div>
                </div>

               
                <div className="grid mb-3">
    
                    <div className="col-2">
                        <label htmlFor="image" className="label">Imagem</label>
                        <input
                            type="file"
                            id="image"
                            className="input-file-mode"
                            onChange={({ target }) => this.setState({image: target.files[0] ? target.files[0] : ''}) }
                            accept="image/*"
                        />
                    </div>
                   
                </div>

                <div className="grid mb-3">
                    <div className="col-2"> 
                        <label htmlFor="downloadMode" className="label">Música</label>
                        <Dropdown
                            onChange={(value) => this.setState({downloadMode: value})}
                            IdforSelectLabel="downloadMode"
                            optionLabel="option"
                            optionValue="id"
                            data={[
                                {id: 0, option: 'Por arquivo'},
                                {id: 1, option: 'Por link'}
                            ]}
                        />
                    </div>
                </div>

                <div className="grid mb-3">
                    <div className="col-4">
                        <label htmlFor="music" className="label label-input-file">
                                {this.state.downloadMode == 1 ? 'Digite a url da música' : 'Enviar arquivo' }
                        </label>
                        <div className={this.state.downloadMode == 1 ? 'input-music-container' : ''}>
                            <InputMusic
                                downloadMode={this.state.downloadMode}
                                onChange={
                                    (value) => {
                                    if (typeof value == typeof '') {
                                        this.setState({music_url: value})
                                        this.setState({music_file: null})
                                    }
                                    else {
                                        this.setState({music_file: value})
                                        this.setState({music_url: null})
                                    }
                                }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-2">
                        <button
                            onClick={this.saveMusic}
                            className={`w-8 button-download ${this.state.responseIsLoading ? "disabled" : ""}`}
                        >
                            Salvar Música
                        </button>
                    </div>
                </div>
            </section>
           
        )
    }
    
}

export default MusicRegistration