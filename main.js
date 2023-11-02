const contents = document.getElementById('content');
const parent = contents.parentNode;

parent.removeChild(contents);

image = document.createElement("IMG")
image.setAttribute("src", "./images/01.png") 
parent.append(image)
