ele = document.getElementById("ele1") 


function pintar(ele, color = 'green') { 
    ele.style.backgroundColor = color 
} 

    ele.addEventListener("click", () => {
        pintar(ele, "yellow")
       
    });

    