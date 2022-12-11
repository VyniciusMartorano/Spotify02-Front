import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import PlaylistsContent from '../components/mid_content/PlaylistsContent'
import '../assets/css/HomePage.css'
import addToastMessage from '../components/addToastMessage'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'
import switchBetweenComponents from '../utils/SwitchBetweenComp'
import MyLibrary from '../components/mid_content/MyLibrary'



const enumComponents = {
  playlists: <PlaylistsContent/>,
  myLibrary: <MyLibrary/>,
  createPlaylist: (<h1 style={{color: 'white'}}>Create Playlist</h1>)
}

export default class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        component: 'playlists',
    }
  }

  //comportamento de rederizar 2x é culpa do redux
  //https://cursos.alura.com.br/forum/topico-metodo-render-sendo-chamado-duas-vezes-75241



  changeMidComponentTo(keyComponent) {
    console.log(keyComponent)
    this.setState({component: keyComponent})
  }

  render() {
    return (
      <section className="container-master">
        <TopBar changeMidComponentTo={(keyComp) => this.changeMidComponentTo(keyComp)} />
        <main id='mid-content'>

          <LeftBar changeMidComponentTo={(keyComp) => this.changeMidComponentTo(keyComp)}/>
          <section id="main-content-container" >
            {switchBetweenComponents(enumComponents, this.state.component)}
          </section>
          
        </main>
        <Player/>
        <ToastContainer/>
      </section>
    )
  }

}
