import { produtoServices} from "../services/produtoServices.js"

let edita = true
const cardProduto = (name, id, imageURL, preco) => {
    const card = document.querySelector('[data-todos-produtos]')
    const li = document.createElement('li').classList.add('card--produto')
    const conteudo = ` 
    <li class= "card--produto" data-id-produto=${id}>
    <div class="opcoes" data-opcoes>
    <a href="./editaProduto.html?id=${id}&?edita"=${edita}"><img class="botao-edita" src="/assets/img/icon-edita.png" alt="">
        <img class="botao-deleta" src="/assets/img/icon-deleta.png" alt="">
   </div>
    <img src="${imageURL}" class="img--produto" alt="">
    <h3 class="titulo--produto">${name}</h3>
    <p class="descricao--produto">${preco}</p>
    <button class="verProduto">Ver Produto</button>
    </li>
    `

    card.insertAdjacentHTML("afterbegin", conteudo);
    return {
        card,
         id
    }
    

}

 const opcoes = document.querySelector('[data-todos-produtos]')
  opcoes.addEventListener('click',(evento)=>{
       let botaoEditar = evento.target.className
       console.log(evento.target.className)
       if(botaoEditar === "botao-edita"){
           console.log(' é botao de edita')
       }else if(botaoEditar === "botao-deleta") {
           let produto =  evento.target.closest('[data-id-produto]')
            let id = produto.dataset.idProduto
            console.log(id)
            produtoServices.removeProdutos(id)
          
        }
    })



produtoServices.listaProdutos()
    .then(data => {
        data.forEach(produto => {
            cardProduto(produto.name, produto.id, produto.imageURL, produto.preco)
        })
    })



const cards = document.getElementsByClassName('card--produto');
console.log(cards)