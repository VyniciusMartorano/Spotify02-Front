import React from "react"
import CustomMessage from "./CustomMensageToast"
import { toast } from "react-toastify"



//Importar o componente abaixo no arquivo alvo, em seguida adicionar no html
//import { ToastContainer } from "react-toastify"

const addToastMessage = (type, title, bodyMsg) => {
    toast[type](
        <CustomMessage 
            title={title}
            bodyMsg={bodyMsg} 
        />,
        {autoClose: 3000}
    )
}

export default addToastMessage
