var element1 = Math.floor(Math.random() * 3) + 1;
var image1 = "images/image" + element1 + ".png";

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", image1);

var element2 = Math.floor(Math.random() * 3) + 1;
var image2 = "images/image" + element2 + ".png";

var image = document.querySelectorAll("img")[1];
image.setAttribute("src", image2);

if (element1 === element2) {
  document.querySelector("h2").innerText = "draw!";
}
else if (element1 === 1) {
  if (element2 === 3) {
    document.querySelector("h2").innerText = "Player 1 wins!";
  }
  else{
    document.querySelector("h2").innerText = "Player 2 wins!";
  }
}
else if (element1 === 2){
if (element2 === 1) {
  document.querySelector("h2").innerText = "Player 1 wins!";
}
else{
  document.querySelector("h2").innerText = "Player 2 wins!";
}
}

else if (element1 === 3){
if (element2 === 2) {
  document.querySelector("h2").innerText = "Player 1 wins!";
}
else{
  document.querySelector("h2").innerText = "Player 2 wins!";
}
}
