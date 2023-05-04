



//GET

const listaProdutos = ()=>{
            
     return fetch('http://localhost:3000/produto')
     .then(response => {
         console.log(response)
          return response.json()
         
      })
}


 

// POST

const criaProdutos = (name,preco,imageURL, categoria)=>{

     fetch('http://localhost:3000/produto', {
          method:"POST",
          headers:{ 'Content-type':"application/json"},
          body: JSON.stringify({ 
               name,
               preco,
               imageURL,
               categoria    
               })
     }).then(resposta=>{
               return resposta.body
     })
     
     throw new Error(`nao foi possivel criar o produto`)
}


export const produtoServices = {
     criaProdutos,
     listaProdutos
}