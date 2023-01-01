import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/top_bar/TopBar'
import LeftBar from '../components/LeftBar'
import PlaylistsContent from '../components/mid_content/PlaylistsContent'
import '../assets/css/HomePage.css'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'
import switchBetweenComponents from '../utils/SwitchBetweenComp'
import MyLibrary from '../components/mid_content/MyLibrary'
import Search from '../components/mid_content/Search'



const enumComponents = {
  playlists: <PlaylistsContent/>,
  myLibrary: <MyLibrary/>,
  createPlaylist: (<h1 style={{color: 'white', userSelect: 'none'}}>Create Playlist</h1>),
  search: (<Search/>),
}

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        component: 'search',
    }
  }

  changeMidComponentTo(keyComponent) {
    this.setState({component: keyComponent})
  }



  render() {
    return (
      <section className="container-master">
        <TopBar changeMidComponentTo={(keyComp) => this.changeMidComponentTo(keyComp)} />
        <main id='mid-content'>

          <LeftBar changeMidComponentTo={(keyComp) => this.changeMidComponentTo(keyComp)}/>
          <section id="main-content-container">
            {switchBetweenComponents(enumComponents, this.state.component)}
          </section>
          
        </main>
        <Player/>
        <ToastContainer/>
      </section>
    )
  }

}
