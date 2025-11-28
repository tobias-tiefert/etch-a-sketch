/*

divs im grid-container platzieren:
    -> größe des containers herausfinden
        -> container in einer variablen speichern und width rauslesen
    -> anzahl container pro seite in variablen festhalten
    schleife: 
        -> anzahl mal anzahl divs erstellen und in grid container platzieren
        -> width und height sind grid-container-width/anzahl
        -> divs in einem array speichern um auf sie zugreifen zu können
        -> zum testen eine classe mit inner shadow geben 


divs im grid ändern
    -> eventlistener für grid-contaienr ->mouse enter
    -> herausfinden welches div -> schleife durch array mit divs (evtl. mit map oder filter arbeiten)
    -> den divs eine klasse zuweisen, die die farbe ändert

divs im grid zurücksetzen
    -> alle inhalte aus altem grid löschen
    -> neues grid malen

*/

let sideSize = 50;
const gridContainer     = document.querySelector("#grid-container");
const etchASketch       = document.querySelector("#etch-a-sketch");
const resetButton       = document.querySelector("#reset");
let gridContainerSize   = gridContainer.offsetWidth;
let numberOfPixels      = sideSize*sideSize;
let pixelsArray         = [];
let pixelSize = 0;




function roundPixels(num){
    return Math.floor(num*100)/100
}


function drawGrid(numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++){
        let pixel  = document.createElement("div");
        pixelSize = gridContainerSize/sideSize;
        pixel.style.width = roundPixels(pixelSize) + "px";
        pixel.style.height = roundPixels(pixelSize) + "px";
        pixel.id = "pixelNr" + i;
        pixelsArray.push(pixel);
        gridContainer.appendChild(pixel);
        
    }

}
drawGrid(numberOfPixels) 


function etchHover(){
    let target = event.target;
    target.classList.add("screen-drawn");

}
gridContainer.addEventListener("mousemove", etchHover);


window.onresize = resizePixels;
function resizePixels(){
    gridContainerSize   = gridContainer.offsetWidth;
    pixelSize   = gridContainerSize/sideSize;
    for (let i = 0; i < pixelsArray.length; i++  ){
        pixelsArray[i].style.width = roundPixels(pixelSize) + "px";
        pixelsArray[i].style.height = roundPixels(pixelSize) + "px";
    }
}

resetButton.addEventListener("click", resetPixels);

function resetPixels(){
    for (let i = 0; i < pixelsArray.length; i++  ){
        pixelsArray[i].classList.remove("screen-drawn");
    }
}