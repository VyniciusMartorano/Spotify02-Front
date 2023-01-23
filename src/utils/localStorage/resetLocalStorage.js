import { KEYS } from "./keysLocalStorage"



const resetLocalStorage = () => {
    KEYS.forEach(
        (key) => localStorage.removeItem(key)
    )
}

export default resetLocalStorage