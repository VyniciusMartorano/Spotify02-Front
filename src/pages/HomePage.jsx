import React from 'react';
import Player from '../components/Player';
import TopBar from '../components/TopBar';
import '../assets/css/HomePage.css';


export default function () {
  return (
    <section className="container-master">
      <TopBar/>
      <Player/>
    </section>
  )
}
