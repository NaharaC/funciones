const colorA = "pink"
const colorS = "orange"
const colorD = "#51D1F6"

document.addEventListener("keydown", (event) =>{

    const box = document.getElementById("key")

    if (event.key ==="a" || event.key === "A") {
        changeColor(box, colorA);
    } else if (event.key ==="s" || event.key === "S") {
        changeColor(box, colorS);
    } else if (event.key ==="d" || event.key === "D") {
        changeColor(box, colorD)
    } else if (event.key ==="q" || event.key === "Q") {
        addBox("purple")
    } else if (event.key ==="w" || event.key === "W") {
        addBox("grey")
    } else if (event.key ==="e" || event.key === "E") {
        addBox("brown")
    } 
})

function changeColor(element, bg) {
    element.style.backgroundColor = bg
}

function addBox(color){
    const contenedor = document.getElementById("container");
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = color;
    newElement.style.width = "200px";
    newElement.style.height = "200px"
    contenedor.appendChild(newElement);

}