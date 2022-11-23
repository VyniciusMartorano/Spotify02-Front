import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import PlaylistsContent from '../components/PlaylistsContent'
import '../assets/css/HomePage.css'


export default function () {
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
    </section>
  )
}
