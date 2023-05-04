import { produtoServices } from "../services/produtoServices.js"





const cardProduto = (name,id,imageURL,preco) => {
    const card = document.querySelector('[data-produto]')
    const conteudo = ` 
    <li class= "card--produto">
    <img src="${imageURL}" class="img--produto" alt="">
    <h3 class="titulo--produto">${name}</h3>
    <p class="descricao--produto">${preco}</p>
    <button class="verProduto">Ver Produto</button>
    </li>
    `
   
    card.insertAdjacentHTML("afterbegin",conteudo );
    return card
    
}

    produtoServices.listaProdutos()
    .then(data => {
        data.forEach(produto => {
        mostraProdutos.cardProduto(produto.name,produto.id,produto.imageURL,produto.preco)
        })
    })
        
 

   


   

   export const mostraProdutos ={
    cardProduto
}

    