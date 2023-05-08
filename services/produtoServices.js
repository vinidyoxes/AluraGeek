

//https://my-json-server.typicode.com/vinidyoxes/AluraGeek
//https://my-json-server.typicode.com/vinidyoxes/AluraGeek

//GET

const listaProdutos = ()=>{
            
     return fetch('https://my-json-server.typicode.com/vinidyoxes/AluraGeek/produto')
     .then(response => {
         console.log(response)
          return response.json()
         
      })
}


 

// POST

const criaProdutos = (name,preco,imageURL, categoria,descricao)=>{

    return fetch('https://my-json-server.typicode.com/vinidyoxes/AluraGeek', {
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
     return fetch(`https://my-json-server.typicode.com/vinidyoxes/AluraGeek/${id}`, {
          method:"DELETE"})
     }


     
          //UPDATE
     
          const editaProdutos = (id)=>{
               return fetch(`https://my-json-server.typicode.com/vinidyoxes/AluraGeek/${id}`)
               .then(response => {
                    console.log(response)
                     return response.json()
                    
                 })
     
          }
          
          const atualizaProdutos = (id,name,preco,imageURL,categoria,descricao)=>{
               return fetch(`https://my-json-server.typicode.com/vinidyoxes/AluraGeek/${id}`, { 
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
