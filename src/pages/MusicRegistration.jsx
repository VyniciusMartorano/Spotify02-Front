import React, { useState } from "react"
import './../assets/css/MusicRegistration.css'
import Dropdown from "../components/DropDown"
import InputMusic from "../components/InputMusic"
import MusicRegistrationService from "../components/services/MusicRegistrationService"
import listHaveEmptyItem from "../utils/isEmpty"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import CustomMessage from "../utils/CustomMensageToast"
import getFileExtension from "../utils/getFileExtension"


function MusicRegistration () {
    const [responseIsLoading, SetResponseIsLoading] = useState(false)
    const [downloadMode, setDownloadMode] = useState(0)

    const [nameMusic, setNameMusic] = useState('')
    const [artist, setArtist] = useState(0)
    const [genero, setGenero] = useState(0)
    const [music_url, setMusicUrl] = useState(null)
    const [music_file, setMusicFile] = useState(null)
    const [image, setImage] = useState('')

    const MusicRegServ = new MusicRegistrationService()

    const ACCEPTED_MUSIC_EXTENSIONS = ['mp3', 'mp4', 'wav']
    

    const artists = [
        {id: 0, name: 'Nenhum'},
        {id: 1, name: 'Post Malone'},
    ]

    const generos = [
        {id: 0, name: 'Nenhum'},
        {id: 1, name: 'Pop'},
        {id: 2, name: 'Mpb'},
    ]

    const allFieldsAreFilled = () => {
        const formFields = [nameMusic, artist, genero, (downloadMode ? music_url : music_file)]
        if (listHaveEmptyItem(formFields)) return false
        else return true
    }

    const musicFormatIsValid = () => {
        if (
            !ACCEPTED_MUSIC_EXTENSIONS.includes(
            getFileExtension(music_file[0].name)
            )
        ) {
            return false
        }
        return true
    }

    const addToasMessage = (type, title, bodyMsg) => {
        toast[type](
            <CustomMessage 
                title={title}
                bodyMsg={bodyMsg} 
            />,
            {autoClose: 3000}
        )
    }

    const saveMusic = () => {
        if (!allFieldsAreFilled()) {
            addToasMessage('error', 'Existem campos incompletos', 'Preencha todos os campos e tente novamente')
            return
        }

        if (!musicFormatIsValid()) {
            addToasMessage('error', 'Formato de música inválido ', `Formatos aceitos: ${ACCEPTED_MUSIC_EXTENSIONS}`)
            return 
        }
        
        SetResponseIsLoading(true)
        const formData = new FormData()
        formData.append("name_music", nameMusic)
        formData.append("artist_id", artist)
        formData.append("genero_id", genero)
        formData.append('image', image)

        if (music_url) formData.append("music_url", music_url)
        else if (music_file) formData.append("music_file", music_file[0])
        
        
    
        MusicRegServ.insertMusic(formData).then(
            () => {
                SetResponseIsLoading(false)
                addToasMessage('success','Sucesso', 'A música foi enviada com sucesso')
            },
            (error) => {
                SetResponseIsLoading(false)  
                addToasMessage('info','Erro!',error.response.data)
            }
        )

    }


    return (
        <div>
            <ToastContainer/>
            <h1 className="page-title">Bem vindo a o cadastro de musicas do Spotify 2</h1>
            <section className="container">
                <div className="form-box">
                    <label htmlFor="name" className="label">Nome</label>
                    <input 
                        id="name" 
                        type="text" 
                        className="text-input"
                        value={nameMusic} 
                        onChange={(e) => setNameMusic(e.target.value)}
                    />
                    <label htmlFor="artist" className="label">Artistas</label>
                    <Dropdown 
                        IdforSelectLabel="artist" 
                        data={artists}
                        optionLabel="name"
                        optionValue="id"
                        onChange={(value) => setArtist(value)}
                    />

                    <label className="label" htmlFor="genero">Genero</label>
                    <Dropdown 
                        IdforSelectLabel="genero" 
                        data={generos}
                        optionLabel="name"
                        optionValue="id"
                        onChange={(value) => setGenero(value)}
                    />

                    <label htmlFor="image" className="label">Imagem</label>
                    <input 
                        type="file" 
                        id="image" 
                        className="input-file-mode"
                        onChange={(e) => setImage(
                            e.target.files[0] ? e.target.files[0] : ''
                            ) }
                        accept="image/*"
                    />

                    <label htmlFor="downloadMode" className="label">Música</label>
                    <Dropdown 
                        onChange={(value) => setDownloadMode(value)}
                        IdforSelectLabel="downloadMode" 
                        optionLabel="option"
                        optionValue="id"
                        data={[
                            {id: 0, option: 'Por arquivo'},
                            {id: 1, option: 'Por link'}
                        ]}
                    />

                    <label htmlFor="music" className="label label-input-file">
                            {downloadMode == 1 ? 'Digite a url da música' : 'Enviar arquivo' }
                    </label>

                    <div className={downloadMode == 1 ? 'input-music-container' : ''}>
                        <InputMusic 
                            downloadMode={downloadMode} 
                            onChange={
                                (value) => {
                                if (typeof value == typeof ''){
                                    setMusicUrl(value)
                                    setMusicFile(null)
                                }
                                else {          
                                    setMusicFile(value)
                                    setMusicUrl(null)
                                }
                            }
                            }
                        />

                        {
                            <button onClick={saveMusic} 
                            className={`button-download ${responseIsLoading ? "disabled" : ""}`}>Salvar Música</button>
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default MusicRegistration