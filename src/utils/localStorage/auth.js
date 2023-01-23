import { TOKEN_KEY, REFRESH_TOKEN_KEY } from "./keysLocalStorage"



export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => localStorage.setItem(TOKEN_KEY, token)
export const setRefreshToken = refresh_token => localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)
export const doLogout = () => localStorage.removeItem(TOKEN_KEY)