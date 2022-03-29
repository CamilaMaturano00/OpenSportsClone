let imagesZap = ['img/zapatillas/37649101_0.jpg','img/zapatillas/AP9971_0.jpg','img/zapatillas/DC1456-300_0.jpg','img/zapatillas/F02TN004172-4809_0.jpg','img/zapatillas/FV4735_0.jpg','img/zapatillas/GZ8166_0.jpg','img/zapatillas/H00898_0.jpg','img/zapatillas/SCH12_0.jpg','img/zapatillas/F02AT007-156_0.jpg'];
let modelos =["Zapatillas Flyer Flex","Ojotas Adidas Adilette Comfort","Zuecos Nike Burrow","Zapatillas Fila Axilus Ace Clay","Zapatillas Galaxy Run","Zapatillas adidas Run 80s","Zapatillas Reebok Lite Plus 3","Zapatillas Footy Columbia Kids","Zapatillas Fila Territory"];
let precios = ["9.999,00","8.499,00","11.499,00","16.990,00","15.999,00","15.499,00","11.999,00","5.899,00","10.990,00"];


let sliderMod = document.getElementById("slider-js2");
let sliderModelos = document.getElementById("slider-modelos");
let sliderZap = document.getElementById("slider-zapatillas");
let activeZap = true;
var anchoVentana = window.innerWidth


sliderMod.style.width = imagesZap.length * 100 + "%";
for(let zap in imagesZap){
    //Cargar imágenes
    if(anchoVentana > 1000){
        sliderMod.innerHTML += `<div class="zap-mod"><a href=""><img src="${imagesZap[zap]}" class="slider_zap" style="width: ${900/imagesZap.length}%"></a>
                                    <p><a href="">${modelos[zap]}</a></p>
                                    <p ><strong>$ ${precios[zap]}</strong></p>
                                </div>`;         
    }else{
        sliderMod.innerHTML += `<div class="zap-mod" style="width: ${11}%"><a href=""><img src="${imagesZap[zap]}" class="slider_zap" ></a>
                                    <p><a href="">${modelos[zap]}</a></p>
                                    <p ><strong>$ ${precios[zap]}</strong></p>
                                </div>`; 
    }                                           
}
  
let contZap =0;

const counterZap = () => {
    if(activeZap){
        contZap++;
        if(contZap > imagesZap.length) contZap=0;
        setInterval(slideImageZap(contZap), 2000);
    }
}
const startIntervalZap = ()=> setInterval(counterZap, 2000);
startIntervalZap();


const slideImageZap = (id) => {
    if(!activeZap && !isNaN(id)){
        contZap=id;
        setActiveZap(id);
    }
    if(anchoVentana > 1000){
       sliderMod.style.left = "-" + id + "0%"; 
    }else{
        sliderMod.style.left = "-" + id + "00%"; 
    }

    
}
