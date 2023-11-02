const contents = document.getElementById('content');
const parent = contents.parentNode;

parent.removeChild(contents);

image = document.createElement("IMG")
image.setAttribute("src", "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg")
image.setAttribute("width", "500")
image.setAttribute("alt", "picture")
parent.appendChild(image)
