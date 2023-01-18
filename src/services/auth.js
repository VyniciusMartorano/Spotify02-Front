import axios from "axios"


export const TOKEN_KEY = "token"
export const REFRESH_TOKEN_KEY = "refresh_token"


export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = token => localStorage.setItem(TOKEN_KEY, token)
export const setRefreshToken = refresh_token => localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)
export const doLogout = () => localStorage.removeItem(TOKEN_KEY)


export const refreshToken = async (error) => {
    const refresh_token = getRefreshToken()

    return await axios.post(process.env.REACT_APP_API_CORE_URL + 'token/refresh/', {refresh: refresh_token})
}

