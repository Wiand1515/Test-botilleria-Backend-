//variables del dom
const $template = document.getElementById('template-producto').content,
$contentBody = document.getElementById('content-body'),
$fragment = document.createDocumentFragment();

//url - produccion
const urlProductos = 'https://bsale-test-wiand1515.herokuapp.com/api/productos';
const urlCategorias = 'https://bsale-test-wiand1515.herokuapp.com/api/search/categorias/';
const urlBuscarProducto = 'https://bsale-test-wiand1515.herokuapp.com/api/search/productos/'

//Obtiene todos los productos
const getProducts = async (url) => {
   let res = await fetch(url),
    json = await res.json();  
        
        json.data.forEach(el => {    
            $template.querySelector("img").setAttribute("src", el.url_image);
            $template.querySelector('h5').textContent = el.name;
            $template.querySelector('span').textContent = el.price
    
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $contentBody.appendChild($fragment);
    

};

//Obtiene los productos por categoria
const getProductsCategory = async (url) => {
    let res = await fetch(url),
    json = await res.json();

    json.data[0].products.forEach(el => {    
        $template.querySelector("img").setAttribute("src", el.url_image);
        $template.querySelector('h5').textContent = el.name;
        $template.querySelector('span').textContent = el.price

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $contentBody.appendChild($fragment);
}


//Cargar todos los productos a la carga del DOM
document.addEventListener('DOMContentLoaded', () => {
    
    getProducts(urlProductos);
});

//Delegacion de eventos on click => para agregar a carrito y filtrar por categorias
document.addEventListener('click', (e) => {
    
    //Agrega al carrito
    if(e.target.matches('.boton-agregar')) {
        alert('Agregado al carrito')
    };
    
    //Filtra por categoria
    if(e.target.matches('.botones-hilera button')) {
       $contentBody.innerHTML = '';

       if(e.target.value == 0) {
        getProducts(urlProductos);
       } else {
        getProductsCategory(urlCategorias + e.target.value);
       }
    }
});


//Evento on submit => para la Search-bar
document.addEventListener('submit', (e) => {    
    const searchResult = document.getElementById('search-text').value;    
    e.preventDefault();
    $contentBody.innerHTML = '';
    getProducts(urlBuscarProducto + searchResult);

    if(searchResult === '') {
        getProducts(urlProductos)
    }
});
