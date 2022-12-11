import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes';


//componente rederiza 2x por causa do react.strickMode
//ele é usado em ambiente de desenvolvimento para descobrir efeitos colaterais
//para remover o comportamento basta deixar comentado
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <App />
  //</React.StrictMode> 
)
