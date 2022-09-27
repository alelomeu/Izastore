// Lista de Produtos
const listaDeProdutos = document.querySelector(".lista-de-produtos")
function listarProdutos (lista, refereciaHtml){
 
        for(let i=0; i<lista.length; i++){
            
            let produtos = lista[i] 
            
            let templeteMontado = criarTemplate(produtos)

            refereciaHtml.appendChild(templeteMontado)

            
        } 

        
}

listarProdutos (data_produtos, listaDeProdutos)

function criarTemplate(produtos){


        let nome = produtos.nome
        let valor = produtos.valor
        let parcelas = produtos.parcelas
        let imagem = produtos.imagem
        let link = produtos.linkShoppe

        
        let tagLi   = document.createElement('li')
        let tagImg  = document.createElement('img')
        let tagH3   = document.createElement('h3')
        let tagH2   = document.createElement('h2')
        let tagP    = document.createElement('p')
        let tagA    = document.createElement('a')

        tagH3.classList.add("name")
        tagH2.classList.add("price")
        tagP.classList.add("price-split")
        tagLi.classList.add("product")


        tagImg.src      = `../assets/Produtos Site/${imagem}`
        tagImg.alt      = nome
        tagH3.innerText = nome
        tagH2.innerText = `R$ ${valor},00`
        tagP.innerText  = parcelas
        tagA.target     = '_blank'
        tagA.href       = link


        tagA.append(tagImg,tagH3,tagH2,tagP)
        tagLi.append(tagA)

        return tagLi
    

}

// Barra de busca

const inputSearch = document.querySelector('#txtBusca')
const product     = document.querySelectorAll('.product')

console.log(product)

const nameProduct = document.querySelectorAll('h3')

const hiddenProduct = (allProducts,inputValue) =>  {

        allProducts
        .filter (toDo => !toDo.textContent.toLowerCase().includes(inputValue))
        //forEach é usado quando eu quero modificar alguma coisa da array pela DOM
        .forEach (toDo => {
                toDo.classList.add ('hidden');
        })

}

const showProdutos = (allProducts, inputValue) => {

        allProducts
        .filter (toDo => toDo.textContent.includes(inputValue))
        .forEach (toDo => {
                toDo.classList.remove ('hidden');
        })

}
inputSearch.addEventListener('input', event => {
        const inputValue = event.target.value.trim().toLowerCase()
        const allProducts =  Array.from(listaDeProdutos.children)

        hiddenProduct (allProducts, inputValue)
        showProdutos(allProducts, inputValue)
     
})


const buttonSearch = document.querySelector("#button-search")
buttonSearch.addEventListener('click', () => {

       
        window.location.href = "./produtos.html"

})