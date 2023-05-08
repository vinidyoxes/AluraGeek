import { userServices } from "../services/userServices.js";

const validaUsuarios = ()=>{
    const form = document.querySelector('[data-login-form]')
    form.onsubmit = (evento)=>{
        evento.preventDefault()
        let user = document.getElementById('email').value
        let pass = document.getElementById('senha').value
        console.log(user,pass)
        
        let todosUsers;
        let usuarios = userServices.users()
        usuarios.then(resposta => { 
            let encontrado = false
            for (let index = 0; index < resposta.length; index++) {
                let usuarioAtual = resposta[index];
                if(usuarioAtual.user === user && usuarioAtual.pass === pass) { 
                encontrado = true
                console.log("usuario existe")
                window.location.href = "./produtos.html"                    
                }
            }
            
            if(!encontrado){
                alert("Login ou Senha incorretos")
            }
        } 
           
        )
            // resposta.forEach(user => {
            //     console.log(user.login,user.pass)
                
            // });
        }
       
    }

validaUsuarios()