function listarProdutos (lista, refereciaHtml){
 
    for(let i=0; i<lista.length; i++){
        
        let produtos = lista[i] 
        
        let templeteMontado = criarTemplate(produtos)

        refereciaHtml.appendChild(templeteMontado)
        

    } 

    
}


listarProdutos (data_produtos, listaDeProdutos)