import React from "react"
import "./../assets/css/TopBar.css"
import profileImg from "./Victor 3x4-small.png"


const TopBar = () => {


    return (
        <header className="top-bar-container">
            <div className="left-side-bar">
            </div>
            <div className="search-container">

                <div className="home-btn-box">
                    <i className="fa-solid fa-house"></i>
                </div>

                <div className="search-box">
                    <div className="icon-search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input 
                        type="text" 
                        name="" 
                        className="input-search"
                        id="" 
                    />
                    <div className="icon-remove-text-box">

                    </div>
                </div>
            </div>
            <div className="icon-profile-container">
                <img 
                    src={profileImg} 
                    alt=""
                    className="img-profile" 
                />
            </div>
        </header>
    )
}

export default TopBar