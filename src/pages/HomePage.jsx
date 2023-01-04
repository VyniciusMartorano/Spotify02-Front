import React from 'react'
import Player from '../components/Player'
import TopBar from '../components/top_bar/TopBar'
import LeftBar from '../components/LeftBar'
import '../assets/css/HomePage.css'
import { ToastContainer } from "react-toastify"
import { Component } from 'react'
import switchBetweenComponents from '../utils/SwitchBetweenComp'
import { connect } from 'react-redux'
import { enumComponents, COMPONENTS } from '../utils/enumComponents'
import { actChangeMidComponent } from '../store/actions/coreActions'





class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="container-master">
        <TopBar changeMidComponentTo={(keyComp) => this.props.dispatch(actChangeMidComponent({midComponentActiveId: keyComp}))} />
        <main id='mid-content'>

          <LeftBar />
          <section id="main-content-container">
            {switchBetweenComponents(COMPONENTS, this.props.midComponentActiveId)}
          </section>
          
        </main>
        <Player/>
        <ToastContainer/>
      </section>
    )
  }

}

const mapStateToProps = (state) => {

  return ({
      user: state.coreReducer.user,
      midComponentActiveId: state.coreReducer.midComponentActiveId
    })
}

export default connect(mapStateToProps)(HomePage)