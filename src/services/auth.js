import axios from "axios"
import { getRefreshToken, setToken } from "../utils/localStorage/auth"
import resetLocalStorage from "../utils/localStorage/resetLocalStorage"

export const refreshToken = async () => {

    const refresh_token = getRefreshToken()

    return await axios.post(process.env.REACT_APP_API_CORE_URL + 'token/refresh/', {refresh: refresh_token}).then(
        ({ data }) => {
            setToken(data.access)
            return Promise.resolve(data)
        },
        (error) => {
            //usar state redux aqui pra quando o token expirar
            resetLocalStorage()
            return Promise.reject(error)
        }
    )
}

