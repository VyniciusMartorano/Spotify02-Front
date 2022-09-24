import React from "react"
import { useState } from "react"
import './../assets/css/MusicRegistration.css'
import Dropdown from "../components/DropDown"
import InputMusic from "../components/InputMusic"
import MusicRegistrationService from "../components/services/MusicRegistrationService"
import listHaveEmptyItem from "../utils/isEmpty"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import CustomMessage from "../utils/CustomMensageToast"


function MusicRegistration () {
    const [responseIsLoading, SetResponseIsLoading] = useState(false)
    const [downloadMode, setDownloadMode] = useState(false)

    const [nameMusic, setNameMusic] = useState('')
    const [artist, setArtist] = useState(0)
    const [genero, setGenero] = useState(0)
    const [music, setMusic] = useState('')

    const MusicRegServ = new MusicRegistrationService()
    

    const artists = [
        {id: 0, name: 'Nenhum'},
        {id: 1, name: 'Matue'},
        {id: 2, name: 'Zé Ramalho'}
    ]

    const generos = [
        {id: 0, name: 'Nenhum'},
        {id: 2, name: 'Pop'},
        {id: 3, name: 'Trap'},
        {id: 1, name: 'Mpb'},
    ]

    const allFieldsAreFilled = () => {
        const formFields = [nameMusic, artist, genero, music]
        if (listHaveEmptyItem(formFields)) return false
        else return true
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

        const formData = new FormData()
        formData.append("name_music", nameMusic)
        formData.append("artist_id", artist)
        formData.append("genero_id", genero)
        formData.append("music", downloadMode ? music : music[0])

        MusicRegServ.insertMusic(formData).then(
            () => {
                addToasMessage('success','Sucesso','A música foi enviada com sucesso')
            }
        )

    }

    const downloadMusic = () => {
        SetResponseIsLoading(true)
        MusicRegServ.DownloadUrlMusic(music).then(
            (response) => {
                console.log(response.data.status)
                SetResponseIsLoading(false)
            },
            (erro) => {
                SetResponseIsLoading(false)    
                console.log(erro.response.data)
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
                        src="" 
                        alt="" 
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
                            onChange={(value) => setMusic(value)}
                        />

                        {
                            downloadMode == 1 && (
                            <button onClick={downloadMusic} 
                            className={`button-download ${responseIsLoading ? "disabled" : ""}`}>Baixar</button>
                            )
                        }
                        {
                    
                            <button onClick={saveMusic} 
                            className={`button-download`}>Baixar</button>
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default MusicRegistration