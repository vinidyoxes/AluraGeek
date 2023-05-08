import { produtoServices } from "../services/produtoServices.js";

let url = new URL(window.location)
const id = url.searchParams.get('id')
console.log(id)

const sectionProduto = (nome,preco,categoria,imageURL,descricao)=>{
        const card = document.querySelector('[data-produto]')
        const conteudo = ` 
        <section class="produtoAtual" data-produto>
            <img src="${imageURL}" alt="" class="produtoAtual--img"></img>
                <container class="coluna--produtoAtual">
                <container class="textos--produtoAtual">
                    <h2 class="titulo--produtoAtual">${nome}</h2>
                    <h4 class="valor--produtoAtual">R$ ${preco}</h4>
                    <p class="descricao--produtoAtual">${descricao}</p>
                </container>
                    <button class="btn">Adicionar ao Carrinho</button>
                </container>
        </section>
        `
       
        card.insertAdjacentHTML("afterbegin",conteudo );
        return card
        
    }

    produtoServices.editaProdutos(id) //utilizando o edita produto e nao o mostraProduto porque o edita produto já tem o fecth com o id do produto
    .then(produto => {
        console.log(produto)
        sectionProduto(produto.name,produto.preco,produto.categoria,produto.imageURL,produto.descricao)
        })