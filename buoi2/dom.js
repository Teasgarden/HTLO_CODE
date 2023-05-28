// let Tung1 = document.getElementById("Tung1");
// Tung1.style ="background-color: blue; color: red;"
// Tung1.innerHTML = "Tung"
// // console.log(Tung1.innerHTML);

let divImg = document.getElementById("img");
divImg.style ="border: 1px solid red; height: 100px";

let img = document.createElement("img");
img.src = "https://th.bing.com/th/id/R.3b6f3256d05654ac99968e0c27be4d2f?rik=Nf%2fcqd26KGE03w&pid=ImgRaw&r=0";
img.style = "width:100%"
console.log(img);
divImg.appendChild(img);