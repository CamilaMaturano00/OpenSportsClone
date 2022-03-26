let imageRopa = ['img/DD4923-630_0.jpg','img/52180333_0.jpg','img/52107233_0.jpg','img/DD4423-010_0_4.jpg','img/58645002_0.jpg','img/76675101_0.jpg',];
let modelosRopa =["Short Nike Dri-Fit Femme","Remera Puma Run Favorite","Short Puma 2 in 1","Calza Nike Air Dri-Fit","Musculosa Puma Rgt Logo Sportstyle","Camiseta Puma CAI Training 2021/2022"];
let preciosRopa = ["6.999,00","4.999,00","6.999,00","12.499,00","3.999,00","7.099,00"];
//Elemento para cargar el slide
let sliderRopa = document.getElementById("slider-js4");

//Elemento general del slider
let sliderConteinerRopa = document.getElementById("slider-ropa");

//Ancho del contMarenedor en función de las imágenes
sliderRopa.style.width = images.length * 100 + "%";

let sliderRop = document.getElementById("slider-ronav");
//Variable para saber si el slide está activo
let activeRopa = true;

//Dibujar slide y navegación
for(let imgRopa in imageRopa){
    //Cargar imágenes
    sliderRopa.innerHTML += `<div class="ropa-mod"><a href=""><img src="${imageRopa[imgRopa]}" class="slider_rop" ></a>
                                <p><a href="">${modelosRopa[imgRopa]}</a></p>
                                <p ><strong>$ ${preciosRopa[imgRopa]}</strong></p>
                            </div>`;     
    if(imgRopa < 2){
         sliderRop.innerHTML += `<span class="${imgRopa==0 ? 'slider-rop slider-rop-active' : 'slider-rop'}" id="slider-rop-${imgRopa}">`;   
    }    
}

//Variable contMarador de imágenes
let contRopa =0;

//Función que cambia de imageMarcasn
const counterRopa = () => {
    if(activeRopa){
        contRopa++;
        if(contRopa> 3) contRopa=0;
        setInterval(slideimageRopa(contRopa), 2000);
        setInterval(setActiveRopa(contRopa), 2000);
    }
}

//Intervalos de tiempo para el contMarador
const startIntervalRopa= ()=> setInterval(counterRopa, 4000);

//Iniciar el contMarador
startIntervalRopa();


const slideimageRopa = (id) => {
    if(!activeRopa && !isNaN(id)){
        contRopa=id;
        setActiveRopa(id);
    }
    sliderRopa.style.left = "-" + id + "0%";
}


let navIconsRopa = [...document.getElementsByClassName("slider-rop")];

const setActiveRopa = (id) => {
    
    navIconsRopa.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
    idValue.classList.add("slider-ropa-active") :
    idValue.classList.remove("slider-ropa-active")
    )

}

sliderRopa.addEventListener("mouseover", ()=>{
    if(activeRopa) activeRopa = false;
});

sliderRopa.addEventListener("mouseout", ()=>{
    if(!activeRopa) activeRopa = true;
});

sliderRop.addEventListener("click", (e)=> slideimageRopa(e.target.id.slice(-1)));
