let imagesZap = ['img/zapatillas/37649101_0.jpg','img/zapatillas/AP9971_0.jpg','img/zapatillas/DC1456-300_0.jpg','img/zapatillas/F02TN004172-4809_0.jpg','img/zapatillas/FV4735_0.jpg','img/zapatillas/GZ8166_0.jpg','img/zapatillas/H00898_0.jpg','img/zapatillas/SCH12_0.jpg','img/zapatillas/F02AT007-156_0.jpg'];
let modelos =["Zapatillas Flyer Flex","Ojotas Adidas Adilette Comfort","Zuecos Nike Burrow","Zapatillas Fila Axilus Ace Clay","Zapatillas Galaxy Run","Zapatillas adidas Run 80s","Zapatillas Reebok Lite Plus 3","Zapatillas Footy Columbia Kids","Zapatillas Fila Territory"];
let precios = ["9.999,00","8.499,00","11.499,00","16.990,00","15.999,00","15.499,00","11.999,00","5.899,00","10.990,00"];
let sliderMod = document.getElementById("slider-js2");

let sliderModelos = document.getElementById("slider-modelos");

sliderMod.style.width = imagesZap.length * 100 + "%";

let sliderZap = document.getElementById("slider-zapatillas");

let activeZap = true;

for(let zap in imagesZap){
    //Cargar imágenes
            sliderMod.innerHTML += `<div class="zap-mod"><a href=""><img src="${imagesZap[zap]}" class="slider_zap" style="width: ${800/imagesZap.length}%"></a>
                                        <p><a href="">${modelos[zap]}</a></p>
                                        <p ><strong>$ ${precios[zap]}</strong></p>
                                    </div>`;     
                              
    if(zap < 2){
        sliderZap.innerHTML += `<span class="${zap==0 ? 'slider-zap slider-zap-active' : 'slider-zap'}" id="slider-zap-${zap}">`;   
       }                       
}
  
let contZap =0;

const counterZap = () => {
    if(activeZap){
        contZap++;
        if(contZap >1) contZap=0;
        setInterval(slideImageZap(contZap), 2000);
        setInterval(setActiveZap(contZap), 2000);
    }
}
const startIntervalZap = ()=> setInterval(counterZap, 4000);
startIntervalZap();


const slideImageZap = (id) => {
    if(!activeZap && !isNaN(id)){
        contZap=id;
        setActiveZap(id);
    }
    
    sliderMod.style.left = "-" + id + "00%";
}
let navIconsZap = [...document.getElementsByClassName("slider-zap")];

const setActiveZap = (id) => {
    
    navIconsZap.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
    idValue.classList.add("slider-zap-active") :
    idValue.classList.remove("slider-zap-active")
    )

}

sliderModelos.addEventListener("mouseover", ()=>{
    if(activeZap) activeZap = false;
});

sliderModelos.addEventListener("mouseout", ()=>{
    if(!activeZap) activeZap = true;
});

sliderZap.addEventListener("click", (e)=> slideImageZap(e.target.id.slice(-1)));