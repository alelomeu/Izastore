const listProducts = document.querySelector(".container-products")
const inputSearch = document.querySelector('#button-search')
let searchValue = document.querySelector("#txtBusca")
let valueSearch = searchValue.value
const allProducts = Array.from(listProducts.children)


inputSearch.addEventListener('click', pesquisarProdutos)


function pesquisarProdutos() {

       let valueSearch = document.querySelector('#txtBusca').value.trim().toLowerCase();
       const allProducts = Array.from(listProducts.children)
       hiddenProduct (allProducts, valueSearch)  
       showProduct (allProducts, valueSearch)  
    
     
} 

function hiddenProduct (allProducts, valueSearch){

        allProducts
        .filter (product => !product.textContent.toLowerCase().includes(valueSearch))
        .forEach (product => {
                product.classList.add ('hidden');
        })
      
}

function showProduct (allProducts, valueSearch){

        allProducts
        .filter (product => product.textContent.toLowerCase().includes(valueSearch))
        .forEach (product => {
                product.classList.remove ('hidden');
        })
      
}
        
 
  


