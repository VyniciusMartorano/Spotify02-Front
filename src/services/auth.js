import axios from "axios"
import { getRefreshToken, doLogout } from "../utils/localStorage/auth"


export const refreshToken = async () => {

    const refresh_token = getRefreshToken()

    return await axios.post(process.env.REACT_APP_API_CORE_URL + 'token/refresh/', {refresh: refresh_token}).then(
        ({ data }) => {
            setToken(data.access)
            return Promise.resolve(data)
        },
        (error) => {
            //usar state redux aqui pra quando o token expirar
            doLogout()
            return Promise.reject(error)
        }
    )
}

