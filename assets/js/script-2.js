const divUno =document.getElementById("cajauno")
const divDos =document.getElementById("cajados")
const divTres =document.getElementById("cajatres")
const divCuatro =document.getElementById("cajacuatro")
const keyDiv = document.getElementById("key")

function CambiarColor(div, color = "black") {
div.target.style.backgroundColor = color
}

divUno.addEventListener("click", CambiarColor)
divDos.addEventListener("click", CambiarColor)
divTres.addEventListener("click", CambiarColor)
divCuatro.addEventListener("click", CambiarColor)

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        keyDiv.style.backgroundColor = "pink"
    } else if (event.key ==="s"){
        keyDiv.style.backgroundColor = "orange"
    } else if (event.key === "d"){
        keyDiv.style.backgroundColor = "skyblue"
    } else if (event.key === "r"){
        keyDiv.style.backgroundColor = "red"
    } else if (event.key === "q"){
        newDiv("purple")
    } else if (event.key === "w"){
        newDiv("gray")
    }  else if (event.key === "e"){
        newDiv("brown")
     }
    })

newDiv = (color) => {
    crearDiv = document.createElement("div")
    crearDiv.style.height = "200px"
    crearDiv.style.width = "200px"
    crearDiv.style.backgroundColor = color
    document.body.appendChild(crearDiv)

}


