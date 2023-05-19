import { categoriaServices } from "../services/categorias.js";
import { produtoServices } from "../services/produtoServices.js"



const conteinerCategoria = (nameCategoria,id)=>{
    document.querySelector('[data-todos-categorias]')
    .insertAdjacentHTML('afterBegin',`<div class="secao--catalogo starwars">
    <h1 class="secao--titulo" >${nameCategoria}</h1>
    <ul class="secao--produtos" data-produto=${nameCategoria}>

    </div>`)
}


const cardProduto = (name,id,imageURL,preco,categoria) => {
    const card = document.querySelector(`[data-produto=${categoria}]`)
    const conteudo = ` 
    <li class= "card--produto">
    <img src="${imageURL}" class="img--produto" alt="">
    <h3 class="titulo--produto">${name}</h3>
    <p class="descricao--produto">${preco}</p>
    <a href ="./paginaProduto.html?id=${id}""><button class="verProduto">Ver Produto</button></a>
    </li>
    `
   
    card.insertAdjacentHTML("afterbegin",conteudo );
    return card
    
}   
    categoriaServices.listaCategorias().then(data => {
        data.map((categoriaAtual)=>{
            console.log(categoriaAtual.categoria);
            conteinerCategoria(categoriaAtual.categoria)
            produtoServices.listaProdutos()
            .then(data => {
                data.forEach(produto => {
                    console.log(categoriaAtual.categoria,produto.categoria)
                if(categoriaAtual.categoria === produto.categoria){
                    console.log('produto equivalente')
                    cardProduto(produto.name,produto.id,produto.imageURL,produto.preco,produto.categoria)
                } else {console.log('produto diferente')}
                })
            })

            
        })
    })


   
        
 

   


   

   export const mostraProdutos ={
    cardProduto
}

    