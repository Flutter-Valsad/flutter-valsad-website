var slideIndex = 1;

const plusSlides = (n) =>{
    showSlides(slideIndex+=n);
}
const minusSlides = (n) =>{
    showSlides(slideIndex-=n);
}

const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("abtslider--item");
    console.log(slideIndex-1);
    if(n>slides.length)
        slideIndex = 1;
    if(n<1)
        slideIndex = slides.length;
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
//showSlides(slideIndex);