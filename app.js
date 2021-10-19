const currentImage = document.querySelector("#image");

const images = ["images/pilt_1.jpg", "iamges/pilt_2.jpg", "images/pilt_3.jpg"];

function changeImage() {

    let randomnumber = Math.floor(Math.random() * images.length);
    console.log(randomnumber);
    currentImage.scr = images[randomnumber];

}