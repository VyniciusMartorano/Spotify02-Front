import React from "react";
import Card from "./cardplaylist/CardPlaylist"


const RowPlaylists = ({ title, playlists, mode }) => {

    return (
        <div className={`row-main-container ${mode == 'home' ? 'home-heigth' : 'library-heigth'}`}>
            { title != null && (<h3 className="h3-main-container-title-row">{ title }</h3>)}
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