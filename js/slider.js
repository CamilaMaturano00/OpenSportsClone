let images = ['img/os-boca.jpg','img/kr5_bannerdesktop_ok.jpg','img/banner3.jpg'];

//Elemento para cargar el slide
let slider = document.getElementById("slider-js");

//Elemento general del slider
let sliderContainer = document.getElementById("slider-container");

//Ancho del contenedor en función de las imágenes
slider.style.width = images.length * 100 + "%";

//Elemento para cargar la navegación
let sliderNav = document.getElementById("slider-navigation");

//Variable para saber si el slide está activo
let active = true;

//Dibujar slide y navegación
for(let img in images){
    
    //Cargar imágenes
    slider.innerHTML += `<a href=""><img src="${images[img]}" class="slider_img" style="width: ${100/images.length}%"></a>`;
    
    //Cargar navegación
    sliderNav.innerHTML += `<span class="${img==0 ? 'slider-nav slider-nav-active' : 'slider-nav'}" id="slider-nav-${img}">`;
}

//Variable contador de imágenes
let cont =0;

//Función que cambia de imagen
const counter = () => {
    if(active){
        cont++;
        if(cont>=images.length) cont=0;
        setInterval(slideImage(cont), 2000);
        setInterval(setActive(cont), 2000);
    }
}

//Intervalos de tiempo para el contador
const startInterval = ()=> setInterval(counter, 2000);

//Iniciar el contador
startInterval();


const slideImage = (id) => {
    if(!active && !isNaN(id)){
        cont=id;
        setActive(id);
    }
    
    slider.style.left = "-" + id + "00%";
}

let navIcons = [...document.getElementsByClassName("slider-nav")];

const setActive = (id) => {
    
    /*for(let icon in navIcons){
        
        if(icon<navIcons.length){
            if(navIcons[icon].id === "slider-nav-"+id){
                document.getElementById(navIcons[icon].id).classList.add("slider-nav--active");
            }else{
                document.getElementById(navIcons[icon].id).classList.remove("slider-nav-active");
            }
        }
    }*/
    
    navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
    idValue.classList.add("slider-nav-active") :
    idValue.classList.remove("slider-nav-active")
    )

}

//Eventos para saber si el ratón está sobre el slide
sliderContainer.addEventListener("mouseover", ()=>{
    if(active) active = false;
});

//Eventos para saber si el ratón no está sobre el slide
sliderContainer.addEventListener("mouseout", ()=>{
    if(!active) active = true;
});

//Evento al pulsar en la navegación
sliderNav.addEventListener("click", (e)=> slideImage(e.target.id.slice(-1)));