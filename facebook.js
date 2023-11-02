const contents = document.getElementsByClassName("_li");
contents[0].innerHTML = "";

const array = [
  "https://assets3.thrillist.com/v1/image/3005223/1584x1632/scale;webp=auto;jpeg_quality=60.jpg",
  "https://assets3.thrillist.com/v1/image/3005224/1584x1746/scale;webp=auto;jpeg_quality=60.jpg",
  "https://assets3.thrillist.com/v1/image/3005227/1584x1630/scale;webp=auto;jpeg_quality=60.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLBk2yuYgBqIADi0MIZ81h59tQvPy6vuBxFtvLmYhaC-pj0qm",
  "https://www.dailypaws.com/thmb/uOCuf9oXdXmWGv0LuiR8pb_pHU4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-pounce-158906394-2000-8d4fa56377264aefa98b34b09534bfb9.jpg",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg", 
];

const imageIndex = Math.floor(Math.random() * array.length);

// const styleObj =
//   "img:hover = {animation: shake 0.5s; animation-iteration-count: infinite;} @keyframes shake = {0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); }}";

let newDiv = document.createElement("div");
newDiv.style.position = "relative";
newDiv.style.textAlign = "center";
contents[0].appendChild(newDiv);

let image = document.createElement("IMG");
image.setAttribute("src", `${array[imageIndex]}`);
image.setAttribute("width", "1000");
image.setAttribute("alt", "picture");
newDiv.appendChild(image);

let newText = document.createElement("div");
newText.innerHTML = "get back to work >:(";
newText.style.color = "red";
newText.style.fontSize = "800%";
newText.style.position = "absolute";
newText.style.top = "50%";
newText.style.left = "50%";
newText.style.transform = "translate(-50%, -50%)";
newDiv.appendChild(newText);

const synth = window.speechSynthesis;
let ourText = "We love cats, we love cats. Cats cats cats cats cats.";
const utterThis = new SpeechSynthesisUtterance(ourText);

synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);


