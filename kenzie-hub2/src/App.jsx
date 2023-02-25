import { useState } from 'react'
import './App.css'
import ButtonRegister from './Components/Buttons/ButtonRegister/Index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from './Pages/RegisterPage/Index';


function App() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")


  return ( 
    <>
    <Router>
      <Switch>
        <ul>
        <Link to={"/RegisterPage"}>teste</Link>
        </ul>
        <Route path='/' component={<Index></Index>}> 
        </Route>
        <Route path='/RegisterPage' component={<Index></Index>}> 
        </Route>
      </Switch>
      </Router>
    <div className="App">
      <h2>Kenzie Hub</h2>
      <div className='container'>
        <h3>Login</h3>
        <div className='input'>
          <label>Email</label>
            <input onChange={(event) =>setEmail(event.target.value)} type="text" placeholder='Digite seu E-mail'>
            </input>
        </div>
        <div className='input'>
            <label>Senha</label>
            <input onChange={(event) =>setPassword(event.target.value)} type="password" placeholder='Digite sua senha'>
            </input>
        </div>
        <button className='button-entrar'>Entrar</button>
        <a className='cadastro'>ainda não possui uma conta?</a>
        <ButtonRegister Email={Email} Password={Password}/>
      </div>

    </div>
    </>
  )
}

export default App
