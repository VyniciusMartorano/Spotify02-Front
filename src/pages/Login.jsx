import { Component, React } from "react"
import './../assets/css/Login.css'
import listHaveEmptyItem from "../utils/isEmpty"
import CustomMessage from "../utils/CustomMensageToast"
import {ToastContainer, toast} from "react-toastify"
import LoginService from "../components/services/LoginService"



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: null,
            password: null,
        }
        this.LogServ = new LoginService()

    }

    handleChange(event, func) {
        if (event.key == 'Enter') {
            func()
        }
    }


    addToastMessage (type, title, bodyMsg) {
        toast[type](
            <CustomMessage 
                title={title}
                bodyMsg={bodyMsg} 
            />,
            {autoClose: 3000}
        )
    }


    formIsValid(){
        const formFields = [this.state.login, this.state.password]
        if (listHaveEmptyItem(formFields)) {
            
            return false
        }
        return true
    }

    sendForm = () => {
        if (!this.formIsValid()) {
            this.addToastMessage('error', 'Existem campos incompletos', 'Preencha todos os campos e tente novamente')
        }

        this.LogServ.Logar({user: this.state.login, password: this.state.password}).then(
            (response) => {
                console.log(response)
            }
        )
    }


    render() {
        return (
            <div id="container-login">
                <ToastContainer/>
                <header className="header-login-container">
                    <div id="container-image">
                        <img src={require('./../utils/images/logo.png')} className="img-logo-login" alt="" />                        
                    </div>
                    <div className="line-login"></div>
                </header>
                
                <main className="main-container-login">
                    <div id="form-login-container">
                        <label 
                            htmlFor="email" 
                            className="label-input"
                            >Endereço de e-mail ou nome de usuário
                        </label>
                        <input 
                            className="input-login" 
                            onKeyUp={e => this.handleChange(e, this.sendForm)} 
                            onChange={e => this.setState({login: e.target.value})} 
                            type="text" 
                            name="email" 
                            id="email" />
                        <label 
                            className="label-input" 
                            htmlFor="password">Senha
                        </label>
                        <input 
                            className="input-login" 
                            onKeyUp={e => this.handleChange(e, this.sendForm)} 
                            onChange={e => this.setState({password: e.target.value})} 
                            type="password" 
                            name="password" 
                            id="" />
                        <a className="label-remember" href="">Esqueceu sua senha?</a>
                        <div id="rememberme-container">
                            <input 
                                type="checkbox" 
                                name="rememberme" 
                                id="checkbox" />
                            <span id="remember-text-checkbox">Lembrar de mim</span>
                        </div>
                        <button 
                            onClick={this.sendForm} 
                            className="btn btn-login">Entrar
                        </button>
                        <div id="strong" className="line-login"></div>
                        <h3 className="sem-conta-h3">Não tem uma conta?</h3>
                        <button className="btn btn-inscrever-se">inscrever-se no spotify</button>
                    </div>
                </main>
            </div>
        )
    }

}


export default Login