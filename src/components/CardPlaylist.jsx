import React from "react"
''

const Card = ({ title, description, thumbnail }) => {
    const url = `http://127.0.0.1:10000`

    return (
        <div>
            <div className="card-main-container">
                <img
                    className="img-card"
                    width={"195px"}
                    height={"195px"}
                    src={url + thumbnail}
                    alt=""
                />
                <span className="title-card-main-container">{ title }</span>
                <p className="subtitle-card-main-container">{ description }</p>
            </div>
        </div>
    )
}

export default Card