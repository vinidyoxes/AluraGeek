 import { produtoServices } from "../services/produtoServices.js"
    
    const form = document.querySelector(`[data-form-novoProduto]`)
    form.onsubmit = (evento)=>{

        evento.preventDefault()
        const url = document.getElementById(`urlProduto`).value
        const categoria = document.getElementById(`categoriaProduto`).value
        const nome = document.getElementById(`nomeProduto`).value
        const preco = document.getElementById(`precoProduto`).value
        const descricao = document.getElementById(`descricaoProduto`).value

        produtoServices.criaProdutos(nome, preco, url,categoria).then(window.location.href = '../produtos.html')
        console.log(nome,preco)
    }   

