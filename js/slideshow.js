let slideAuto = 0;
autoSlides()

    function autoSlides(){
        let i;
        let slides = document.getElementsByClassName("autoSlides");
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
    }
slideAuto++;
if(slideAuto > slides.length){slideAuto = 1}
slides[slideAuto-1].style.display = "block";
setTimeout(autoSlides, 3000);
}