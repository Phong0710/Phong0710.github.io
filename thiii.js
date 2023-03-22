function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = this.getRandomHex();
    let green = this.getRandomHex();
    let blue = this.getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

let clickedTime;
let createdTime;
let reactionTime;
let a = document.getElementById("diem");
let name = "";
let arr = [];


function setTimeout() {

    let x = Math.random() *600;
    let y = Math.random() * 600;
    a.style.top = x + "px";
    a.style.left = y + "px";
    a.style.backgroundColor = getRandomColor();
    document.getElementById("bodyy").style.backgroundColor = getRandomColor();
    a.style.display = "block";
    createdTime = Date.now();

}


document.getElementById("Start").addEventListener("click", function () {
    name = prompt("Nhập tên bạn:");
    setTimeout();
})


document.getElementById("End").addEventListener("click", function () {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min)
    alert('Thời gian nhanh nhất của ' + name + ' là : ' + min + " giây");
    location.reload();
})

a.onclick = function () {

    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    setTimeout();
    document.getElementById("ppp").innerHTML = name + ' có thời gian là: ' + reactionTime + " giây";
    console.log(typeof reactionTime)
    arr.push(reactionTime);
    console.log(arr)
}
