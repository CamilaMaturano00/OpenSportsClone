let imageMarcas = ['img/marcas/adidas.svg','img/marcas/puma.svg','img/marcas/fila.svg','img/marcas/nike.svg','img/marcas/converse.svg','img/marcas/topper.svg','img/marcas/asics.svg','img/marcas/crocs.svg','img/marcas/footy.svg','img/marcas/under-armour.svg','img/marcas/reebok.svg'];
//Elemento para cargar el slide
let sliderMarcas = document.getElementById("slider-js3");

//Elemento general del slider
let sliderConteinerMarcas = document.getElementById("slider-marcas-conteiner");

//Ancho del contMarenedor en función de las imágenes
sliderMarcas.style.width = imageMarcas.length * 100 + "%";


//Variable para saber si el slide está activo
let activeMar = true;

//Dibujar slide y navegación
for(let imgMar in imageMarcas){
    //Cargar imágenes
    sliderMarcas.innerHTML += `<a href=""><img src="${imageMarcas[imgMar]}" class="slider_img_marcas" style="width: ${9.2/imageMarcas.length}%"></a>`;
}

//Variable contMarador de imágenes
let contMar =0;

//Función que cambia de imageMarcasn
const counterMar = () => {
    if(activeMar){
        contMar++;
        if(contMar >= images.length) contMar=0;
        setInterval(slideimageMarcas(contMar), 2000);
    }
}

//Intervalos de tiempo para el contMarador
const startIntervalMar = ()=> setInterval(counterMar, 2000);

//Iniciar el contMarador
startIntervalMar();


const slideimageMarcas = (id) => {
    if(!activeMar && !isNaN(id)){
        contMar=id;
        setActiveMar(id);
    }
    sliderMarcas.style.left = "-" + id + "0%";
}



//Eventos para saber si el ratón está sobre el slide
sliderConteinerMarcas.addEventListener("mouseover", ()=>{
    if(activeMar) activeMar = false;
});

//Eventos para saber si el ratón no está sobre el slide
sliderConteinerMarcas.addEventListener("mouseout", ()=>{
    if(!activeMar) activeMar = true;
});
