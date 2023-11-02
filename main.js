const contents = document.getElementById('content');
const parent = contents.parentNode;

parent.removeChild(contents);

image = document.createElement("IMG")
image.setAttribute("src", "./images/12.jpg")
image.setAttribute("width", "500")
image.setAttribute("alt", "picture")
parent.appendChild(image)
