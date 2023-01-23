import { CURRENT_USER } from "./keysLocalStorage"



export const setCurrentUser = (user) => localStorage.setItem(CURRENT_USER, JSON.stringify(user)) 

export const getCurrentUser = () => JSON.parse(localStorage.getItem(CURRENT_USER))

export const removeCurrentUser = () => localStorage.removeItem(CURRENT_USER)
