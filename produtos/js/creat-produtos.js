
const listaDeProdutos = document.querySelector(".lista-de-produtos")
function listarFuncionarios (lista, refereciaHtml){
 
        for(let i=0; i<lista.length; i++){
            
            let produtos = lista[i] 
            
            let templeteMontado = criarTemplate(produtos)

            refereciaHtml.appendChild(templeteMontado)

            
        } 

        
}

listarFuncionarios (data_produtos, listaDeProdutos)

function criarTemplate(produtos){


        let nome = produtos.nome
        let valor = produtos.valor
        let parcelas = produtos.parcelas
        let imagem = produtos.imagem

        
        let tagLi   = document.createElement('li')
        let tagImg  = document.createElement('img')
        let tagH3   = document.createElement('h3')
        let tagH2   = document.createElement('h2')
        let tagP    = document.createElement('p')

        tagH3.classList.add("name")
        tagH2.classList.add("price")
        tagP.classList.add("price-split")

        tagImg.src      = `../assets/Produtos Site/${imagem}`
        tagImg.alt      = nome
        tagH3.innerText = nome
        tagH2.innerText = `R$ ${valor},00`
        tagP.innerText  = parcelas

        tagLi.append(tagImg,tagH3,tagH2,tagP)

        return tagLi
    

}


