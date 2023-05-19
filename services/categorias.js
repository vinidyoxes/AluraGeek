const listaCategorias = ()=>{
            
    return fetch('http://localhost:3000/categorias')
    .then(response => {
        console.log(response)
         return response.json()
        
     }).catch(error=> {
         console.log(error) })
     }

     export const categoriaServices = {
        listaCategorias
     }