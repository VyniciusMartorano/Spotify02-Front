import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import PlaylistsContent from '../components/PlaylistsContent'
import '../assets/css/HomePage.css'
import { useLocation } from 'react-router-dom'
import addToastMessage from '../components/addToastMessage'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'



export default class HomePage extends Component {
  //comportamento de rederizar 2x é culpa d redux
  //https://cursos.alura.com.br/forum/topico-metodo-render-sendo-chamado-duas-vezes-75241

  componentDidMount() {
    console.log(this.context.router)
  }

  // console.log(location.state.fromLogin)
  // if (location.state.fromLogin) {
  //   addToastMessage('success', 'Sucesso!', 'Login realizado com sucesso')
  // }

  render() {
    return (
      <section className="container-master">
        <TopBar/>
        <main id='mid-content'>
          <LeftBar/>
          <section id="main-content-container" >
            <PlaylistsContent/>
          </section>
        </main>
        <Player/>
        <ToastContainer/>
      </section>
    )
  }

}
