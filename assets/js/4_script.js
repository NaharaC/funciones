document.getElementById("box-1").addEventListener("click", (event) => {
    pintar(event.target, "black", "blue")
})

document.getElementById("box-2").addEventListener("click", (event) => {
    pintar(event.target, "black", "red")
})

document.getElementById("box-3").addEventListener("click", (event) => {
    pintar(event.target, "black", "green")
})

document.getElementById("box-4").addEventListener("click", (event) => {
    pintar(event.target, "black", "yellow")
})

function pintar(box, bg, originBg) {
    if (box.style.backgroundColor == "black") {
        box.style.backgroundColor = originBg
    } else {
    box.style.backgroundColor = bg
    }
}