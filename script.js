var hexAlphabet = ["0","1","2","3","4","5","6","7","8","9","A",
    "B","C","D","E","F"];

function changeColor() {
    let color = "#";
    for (let i= 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += hexAlphabet[index];
    }

    // thay đổi màu 
    let hexColorElement = document.querySelector(".hex-color");

    // cách 1
    // hexColorElement.style.backgroundColor = color;

    // cách 2 
    hexColorElement.style = `background-color:${color}`;
    hexColorElement.textContent = color;
}

function resetColor() {
    let hexColorElement = document.querySelector(".hex-color");
    hexColorElement.style = "background-color:#27d377";
    hexColorElement.textContent = "#27d377";
}