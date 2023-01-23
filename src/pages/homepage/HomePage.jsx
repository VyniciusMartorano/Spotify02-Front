import React from 'react'
import Player from '../../components/bottom_bar/player/Player'
import TopBar from '../../components/top_bar/TopBar'
import LeftBar from '../../components/left_bar/LeftBar'
import '../../assets/css/HomePage.css'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'
import switchBetweenComponents from '../../utils/SwitchBetweenComp'
import { connect } from 'react-redux'
import { COMPONENTS } from '../../utils/enums/enumComponents'
import { Navigate } from 'react-router-dom'
import Service from './Service'





class HomePage extends Component {
  constructor(props) {
    super(props)

    this.Serv = new Service()
  }


  render() {
    return (
      <section className="container-master">
        <TopBar />
        <main id='mid-content'>

          <LeftBar />
          <section id="main-content-container">
            {switchBetweenComponents(COMPONENTS, this.props.midComponentActiveId)}
          </section>
          
        </main>
        <Player />
        <ToastContainer />
        {!this.props.isLogged && (<Navigate to={'/login'} />)}
      </section>
    )
  }

}

const mapStateToProps = (state) => {

  return ({
      user: state.coreReducer.user,
      midComponentActiveId: state.coreReducer.midComponentActiveId,
      isLogged: state.coreReducer.isLogged
    })
}

export default connect(mapStateToProps)(HomePage)