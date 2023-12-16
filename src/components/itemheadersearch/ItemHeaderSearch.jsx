import React from "react"
import './style.css'


const Item = ({ item, activeId, onClick }) => {

    return (
        <div 
            className={`item-header-search ${activeId == item.id ? 'item-search-active': 'inactive'}`} 
            onClick={() => onClick(item.id)}
        >
            {item.description}
        </div>
    )
}

export { Item }