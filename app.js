const currentImage = document.querySelector("#image");

const images = ["images/pilt_1.jpg", "images/pilt_2.jpeg", "images/pilt_3.jpg"];

function changeImage() {

    let randomnumber = Math.floor(Math.random() * images.length);
    console.log(randomnumber);
    currentImage.src = images[randomnumber];

}