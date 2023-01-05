import PlaylistsContent from "../../components/mid_content/playlist_content/PlaylistsContent"
import MyLibrary from "../../components/mid_content/my_library/MyLibrary"
import Search from "../../components/mid_content/search/Search"
import React from "react"

const enumComponents = {
    PLAYLISTS: 1,
    MY_LIBRARY: 2,
    CREATE_PLAYLIST: 3,
    SEARCH: 4 
}

const COMPONENTS = {
    1: <PlaylistsContent/>,
    2: <MyLibrary/>,
    3: (<h1 style={{color: 'white', userSelect: 'none'}}>Create Playlist</h1>),
    4: <Search/>,
  }


export { enumComponents, COMPONENTS }
