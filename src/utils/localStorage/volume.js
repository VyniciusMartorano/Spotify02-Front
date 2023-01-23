import { VOLUME } from "./keysLocalStorage"


export const setVolume = (value) => localStorage.setItem(VOLUME, value)

export const getVolume = () => localStorage.getItem(VOLUME) 