import React from "react";
import Card from "./CardPlaylist"


const RowPlaylists = ({ title, playlists }) => {

    return (
        <div className="row-main-container">
        <h3 className="h3-main-container-title-row">{ title }</h3>
        <div className="container-cards">
        {
            playlists.map((item) => (
                <Card 
                    key={item.id} 
                    title={item.title} 
                    description={item.descricao} 
                    thumbnail={item.thumbnail} 
                />
            ))
        }
        </div>
    </div>
    )
}

export default RowPlaylists