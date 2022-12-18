import React from "react"


const ItemSearched = ({ item }) => {


    return (
        <div className="container-item-searched">
            <div className="left-side-searched-item">
                <div className="btn-play-box">
                    <i className="fa fa-play"></i>
                </div>
                <img src="" alt="" />
                <div className="box-description-item-searched">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>
                </div>
            </div>
            <div className="right-side-searched-item">
                <i className="fa fa-heart"></i>
                {/* icone de reticentias em baixo */}
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}