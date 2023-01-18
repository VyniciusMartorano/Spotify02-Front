const CURRENT_MUSIC = 'CURRENT_MUSIC'

export const setCurrentMusic = (music) => localStorage.setItem(CURRENT_MUSIC, JSON.stringify(music)) 

export const getCurrentMusic = () => JSON.parse(localStorage.getItem(CURRENT_MUSIC))
