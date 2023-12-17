import React from "react"
import './style.css'

const Card = ({ title, description, thumbnail }) => {
    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`

    return (
        <div>
            <div className="card-main-container">
                <img
                    className="img-card"
                    width={"155px"}
                    height={"155px"}
                    src={url + thumbnail}
                    alt=""
                />
                <span className="title-card-main-container">{ title }</span>
                <p className="subtitle-card-main-container">{ description }</p>
                <div className="btn-play-playlist">
                    <i className="fa-solid fa-play icon-play-playlist"></i>
                </div>
            </div>
        </div>
    )
}

export default Card