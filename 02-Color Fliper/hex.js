const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexColor = document.querySelector(".color");
const btn = document.querySelector("#btn");
const btnRGBA = document.querySelector(".rgb");
const btnHEX = document.querySelector(".hex");
let newStr = "#f1f5f8";
let rgb = hexToRGB("#f1f5f8");

btn.addEventListener("click", function () {
  newStr = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    newStr = newStr + hexArray[randomNumber];
  }
  if (btnRGBA.classList.contains("active")) {
    hexColor.textContent = hexToRGB(newStr);
  }
  if (btnHEX.classList.contains("active")) {
    hexColor.textContent = newStr;
  }

  document.querySelector("body").style.backgroundColor = newStr;
});

btnRGBA.addEventListener("click", () => {
  hexColor.textContent = rgb;
  btnHEX.classList.remove("active");
  btnRGBA.classList.add("active");
});

btnHEX.addEventListener("click", () => {
  hexColor.textContent = newStr;
  btnRGBA.classList.remove("active");
  btnHEX.classList.add("active");
});

function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return "(" + r + ", " + g + ", " + b + ")";
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexArray.length);
}
