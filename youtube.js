const contents = document.getElementById('content');
const parent = contents.parentNode;

parent.removeChild(contents);

const array = ["https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg", "https://assets3.thrillist.com/v1/image/3005223/1584x1632/scale;webp=auto;jpeg_quality=60.jpg", "https://assets3.thrillist.com/v1/image/3005224/1584x1746/scale;webp=auto;jpeg_quality=60.jpg", "https://assets3.thrillist.com/v1/image/3005227/1584x1630/scale;webp=auto;jpeg_quality=60.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLBk2yuYgBqIADi0MIZ81h59tQvPy6vuBxFtvLmYhaC-pj0qm","https://www.dailypaws.com/thmb/uOCuf9oXdXmWGv0LuiR8pb_pHU4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-pounce-158906394-2000-8d4fa56377264aefa98b34b09534bfb9.jpg", "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg"]

const imageIndex = Math.floor(Math.random() * array.length)

image = document.createElement("IMG")
image.setAttribute("src", `${array[imageIndex]}`)
image.setAttribute("width", "1000")
image.setAttribute("alt", "picture")
parent.appendChild(image)

newDiv = document.createElement('div')
newDiv.innerHTML = 'go do work >:('
newDiv.style.color = 'red'
newDiv.style.fontSize = '1000%'
newDiv.style.textAlign = 'center'
parent.appendChild(newDiv)


