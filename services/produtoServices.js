



//GET

const listaProdutos = ()=>{
            
     return fetch('http://localhost:3000/produto')
     .then(response => {
         console.log(response)
          return response.json()
         
      })
}


 

// POST

const criaProdutos = (name,preco,imageURL, categoria,descricao)=>{

    return fetch('http://localhost:3000/produto', {
          method:"POST",
          headers:{ 'Content-type':"application/json"},
          body: JSON.stringify({ 
               name,
               preco,
               imageURL,
               categoria,
               descricao  
               })
     }).then(resposta=>{
               return resposta.body
     })
     
     throw new Error(`nao foi possivel criar o produto`)
}



//DELET

const removeProdutos = (id)=>{
     return fetch(`http://localhost:3000/produto/${id}`, {
          method:"DELETE"})
     }


     
          //UPDATE
     
          const editaProdutos = (id)=>{
               return fetch(`http://localhost:3000/produto/${id}`)
               .then(response => {
                    console.log(response)
                     return response.json()
                    
                 })
     
          }
          
          const atualizaProdutos = (id,name,preco,imageURL,categoria,descricao)=>{
               return fetch(`http://localhost:3000/produto/${id}`, { 
                    method:'PUT',
                    headers: {'Content-type':"application/json"},
                    body: JSON.stringify({
                         id,
                         name,
                         preco,
                         imageURL,
                         categoria,
                         descricao
                    })}
               )
          .then(resposta => {
               return resposta.json()
          })
          }

     export const produtoServices = {
          criaProdutos,
          listaProdutos,
          removeProdutos,
          editaProdutos,
          atualizaProdutos
     }
