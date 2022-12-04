export const TOKEN_KEY = "token"



export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => localStorage.setItem(TOKEN_KEY, token)
export const doLogout = () => localStorage.removeItem(TOKEN_KEY)

