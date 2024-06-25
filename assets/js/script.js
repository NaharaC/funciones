document.getElementById("ele1").addEventListener("click", (event) => {
    pintar(event.target, "yellow")
})

function pintar (ele, bg = "green") {
    ele.style.backgroundColor = bg
}