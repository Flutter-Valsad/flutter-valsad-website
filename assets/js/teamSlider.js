var slideIndex = 1;
//Right Slide Function
const plusSlides = (n) =>{
    showSlides(slideIndex+=n);
}
//Left Slide Function
const minusSlides = (n) =>{
    showSlides(slideIndex-=n);
}
//Slider function
const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("abtslider--item");
    if(n>slides.length)
        slideIndex = 1;
    if(n<1)
        slideIndex = slides.length;
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
//  showSlides(slideIndex);