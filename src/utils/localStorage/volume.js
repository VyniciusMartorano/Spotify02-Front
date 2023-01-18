const VOLUME = 'VOLUME'


export const setVolume = (value) => localStorage.setItem(VOLUME, value)

export const getVolume = () => localStorage.getItem(VOLUME) 