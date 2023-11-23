let slideIndex = 0;

function showSlides() {

    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
}

document.getElementById("next1").addEventListener("click", showSlides);

document.getElementById("next2").addEventListener("click", showSlides);

showSlides(); 