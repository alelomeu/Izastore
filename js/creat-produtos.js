// Lista de Produtos
const listaDeProdutos = document.querySelector(".container-products")




function criarTemplate(produtos){


        let nome = produtos.nome
        let valor = produtos.valor
        let parcelas = produtos.parcelas
        let imagem = produtos.imagem
        let link = produtos.linkShoppe
        let type = produtos.tipo

        
        let tagLi   = document.createElement('li')
        let tagImg  = document.createElement('img')
        let tagH3   = document.createElement('h3')
        let tagH2   = document.createElement('h2')
        let tagP    = document.createElement('p')
        let tagA    = document.createElement('a')
        let tagType = document.createElement('span')

        tagH3.classList = "text-big margin-top name-product"
        tagH2.classList = "text-small"
        tagP.classList  = "text-smallest"
        tagLi.classList = "product"
        tagType.classList = "hidden"
        tagImg.classList = "img-vitrine"



        tagImg.src      = `../assets/Produtos Site/${imagem}`
        tagImg.alt      = nome
        tagH3.innerText = nome
        tagH2.innerText = `R$ ${valor},00`
        tagP.innerText  = parcelas
        tagA.target     = '_blank'
        tagA.href       = link
        tagType.innerText = type


        tagA.append(tagImg,tagH3,tagH2,tagP,tagType)
        tagLi.append(tagA)

        return tagLi
    

}

