import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import MainContent from '../components/MainContent'
import '../assets/css/HomePage.css'


export default function () {
  return (
    <section className="container-master">
      <TopBar/>
      <main id='mid-content'>
        <LeftBar/>
        <MainContent/>
      </main>
      <Player/>
    </section>
  )
}
