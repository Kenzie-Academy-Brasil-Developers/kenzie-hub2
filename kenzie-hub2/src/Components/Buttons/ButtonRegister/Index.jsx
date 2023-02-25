import React from 'react'

const ButtonRegister = ({ Email, Password }) => {

    function validacao(Email){
        if(Email === ""){
            console.log("informe o email")
        } else if(Email.indexOf(".com")==-1) {
            console.log("email inválido 1")
        }else if(Email.indexOf("@")==-1) {
            console.log("email inválido 2")
        } else {
        console.log(true)
        }
    }

        function validacaoPassword(Password){
            if(Password === ""){
                console.log("informe o email")
            } else if(Password.lenght >= 8) {
                console.log("senha Invalida 1")
            } else {
            console.log(true)
            }
    }

  return (

    <button  onClick={Event=>{if(validacao && validacaoPassword(Password)){}}} className='button-cadastrar-se'>Cadastre-se</button>

    )
}

export default ButtonRegister;