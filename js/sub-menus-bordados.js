function listarProdutos (lista, refereciaHtml){
 
        for(let i=0; i<lista.length; i++){
            
            let produtos = lista[i] 
            
            let templeteMontado = criarTemplate(produtos)
    
            refereciaHtml.appendChild(templeteMontado)
            
    
        } 
    
        
    }
    
    const productsBrodados = data_produtos.filter((products) => products.tipo === "bordado")
    
    console.log(productsBrodados)
    
    
    listarProdutos (productsBrodados, listaDeProdutos)