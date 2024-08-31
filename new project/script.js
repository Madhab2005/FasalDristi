const heroSection = document.querySelector('.hero');
const images = [
    'background-img.jpg',
    'background-img-2.jpg',
    'background-img-3.jpg'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change the background image every 4 seconds
setInterval(changeBackgroundImage, 4000);

// Initially set the first background image
changeBackgroundImage();

document.getElementById("home").addEventListener("click", function() {
    // Replace 'home.html' with the actual path to your home page
    window.location.href = "home.html";
});

document.getElementById("about").addEventListener("click", function() {
    // Replace 'about.html' with the actual path to your about page
    window.location.href = "about.html";
});

document.getElementById("service").addEventListener("click", function() {
    // Replace 'service.html' with the actual path to your service page
    window.location.href = "service.html";
});

document.getElementById("contact").addEventListener("click", function() {
    // Replace 'contact.html' with the actual path to your contact page
    window.location.href = "contact.html";
});

document.getElementById("imageUpload").addEventListener("change", function(event) {
    var file = event.target.files[0];

    // Handle the selected file here
    console.log(file);
});