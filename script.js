const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.png",
    "images/img4.jpg"
];

function randomImage() {
    const img = document.getElementById("image");
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

function nextImage() {
    randomImage();
}

randomImage();
