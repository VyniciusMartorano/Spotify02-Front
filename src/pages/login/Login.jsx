import { Component, React } from "react"
import './../../assets/css/Login.css'
import listHaveEmptyItem from "../../utils/isEmpty"
import { ToastContainer } from "react-toastify"
import LoginService from "./Service"
import { Navigate } from "react-router-dom"
import addToastMessage from "../../components/addToastMessage"
import { setToken, setRefreshToken } from "../../utils/localStorage/auth"
import { connect } from "react-redux"
import { actSetIsLogged, actSetUser } from "../../store/actions/coreActions"
import { setCurrentUser } from "../../utils/localStorage/user"



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: null,
            password: null,
            inPromise: false,
        }
        this.LogServ = new LoginService()
    }


    handleChange(event, func) {
        if (event.key == 'Enter') {
            func()
        }
    }

    formIsValid(){
        const formFields = [this.state.login, this.state.password]
        if (listHaveEmptyItem(formFields)) {
            addToastMessage('error', 'Existem campos incompletos', 'Preencha todos os campos e tente novamente')
            return false
        }
        return true
    }

    async getUser() {
        await this.LogServ.getUser().then(
            ({ data }) => {
                setCurrentUser(data)
                this.props.dispatch(actSetUser(data))
            },
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao setar o úsuario!')
        )
    }


    async setNewUser(token, refresh_token) {
        setToken(token)
        setRefreshToken(refresh_token)
        
        await this.getUser()
        this.props.dispatch(actSetIsLogged({isLogged: true}))
    }

    sendForm = () => {
        if (!this.formIsValid()) return

        this.setState({inPromise: true})
        this.LogServ.Logar({username: this.state.login, password: this.state.password}).then(
            ({ data }) => {
                addToastMessage('success', 'Sucesso!', 'Login realizado com sucesso')
                this.setNewUser(data.access, data.refresh)
            },
            () => addToastMessage('error', 'Erro!', 'Ocorreu um erro ao fazer login')
            ).finally(
                () => this.setState({inPromise: false})
            )
    }


    render() {
        return (
            <div id="container-login" >
                <ToastContainer/>
                {this.props.isLogged && (<Navigate to={'/'} state={{fromLogin: true}} />)}
             

                <header className="header-login-container">
                    <div id="container-image">
                        <img src={require('./../../utils/images/logo.png')} className="img-logo-login" alt="" />                        
                    </div>
                    <div className="line-login"></div>
                </header>
                
                <main className="main-container-login">
                    <div id="form-login-container" action="off">
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
                            autoComplete="off"
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
                            className={`btn btn-login ${this.state.inPromise ? 'disabled':''}`}>Entrar
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
const mapStateToProps = (state) => {
    return {
        isLogged: state.coreReducer.isLogged
    }
}

export default connect(mapStateToProps)(Login)