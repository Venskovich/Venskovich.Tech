// Getting data from the page
let divCollection = document.getElementsByClassName("picture-gallery")
let div = divCollection[0]

// Adding images to the page
for (let i = 128; i >= 1; i--) {

    let img = document.createElement("img")
    img.src = `images/hermitage/pic${i}.jpg`
    img.alt = `pic${i}`

    div.appendChild(img)

}