import { produtoServices } from "../services/produtoServices.js"

let url = new URL(window.location)
const id = url.searchParams.get('id')


const imageURL = document.getElementById(`urlProduto`)
const categoria = document.getElementById(`categoriaProduto`)
const nome = document.getElementById(`nomeProduto`)
const preco = document.getElementById(`precoProduto`)
const descricao = document.getElementById(`descricaoProduto`)

produtoServices.editaProdutos(id).then(
    dados => {
        console.log(dados)
        nome.value = dados.name,
        preco.value = dados.preco,
        categoria.value = dados.categoria,
        imageURL.value = dados.imageURL,
        descricao.value = dados.descricao

        
    }) 

const form = document.querySelector(`[data-form-novoProduto]`)
    form.onsubmit = (evento)=>{
        evento.preventDefault()            
        produtoServices.atualizaProdutos(id,nome.value,preco.value,imageURL.value,categoria.value,descricao.value)
    .then(alert('produto atualizado')) }