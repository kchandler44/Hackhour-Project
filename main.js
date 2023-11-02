const contents = document.getElementById('content');
const parent = contents.parentNode;

parent.removeChild(contents);

const array = ["https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3f1qiFRc3QLgdAlr5MkTTI&ust=1698972887406000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjc262NpIIDFQAAAAAdAAAAABAJ", "https://assets3.thrillist.com/v1/image/3005223/1584x1632/scale;webp=auto;jpeg_quality=60.jpg", "https://assets3.thrillist.com/v1/image/3005224/1584x1746/scale;webp=auto;jpeg_quality=60.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F05%2F17%2Fbusiness%2Fmedia%2Fgrumpy-cat-dead.html&psig=AOvVaw28nwMp-Nv0NylOGTpb3CAr&ust=1698973012463000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKit_OuNpIIDFQAAAAAdAAAAABAE", "https://assets3.thrillist.com/v1/image/3005227/1584x1630/scale;webp=auto;jpeg_quality=60.jpg"]

const imageIndex = Math.floor(Math.random() * array.length)

image = document.createElement("IMG")
image.setAttribute("src", `${array[imageIndex]}`)
image.setAttribute("width", "1000")
image.setAttribute("alt", "picture")
parent.appendChild(image)
