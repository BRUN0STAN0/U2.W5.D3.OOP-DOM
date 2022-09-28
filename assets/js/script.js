let listImages = document.getElementById("list-images")

listImages.innerHTML = `<img onclick="changeImg()" src="./assets/img/1.jpg">`

let imagesArray = [1,2,3,4,5,6]
function changeImg() {
    for (let i = 0; i < imagesArray.length+1; i++) {
    listImages.innerHTML = `<img onclick="changeImg()" src="./assets/img/${imagesArray}.jpg">`
}
}