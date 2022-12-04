import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import PlaylistsContent from '../components/PlaylistsContent'
import '../assets/css/HomePage.css'
import addToastMessage from '../components/addToastMessage'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'
import switchBetweenComponents from '../utils/SwitchBetweenComp'



const enumComponents = {
  0: (<PlaylistsContent/>)
}

export default class HomePage extends Component {
  //comportamento de rederizar 2x é culpa do redux
  //https://cursos.alura.com.br/forum/topico-metodo-render-sendo-chamado-duas-vezes-75241

  componentDidMount() {
    console.log(this.context.router)
  }



  render() {
    return (
      <section className="container-master">
        <TopBar/>
        <main id='mid-content'>
          <LeftBar/>
          <section id="main-content-container" >
            {switchBetweenComponents(enumComponents, 0)}
          </section>
        </main>
        <Player/>
        <ToastContainer/>
      </section>
    )
  }

}
