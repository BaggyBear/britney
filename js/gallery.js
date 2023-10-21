let galleryIndex = 1;
showGallery(galleryIndex);
// next & prev contorls
function plusGallery(n){
    showGallery(galleryIndex += n);
}
//thumbnail image control
function currentGallery(n){
    showGallery(galleryIndex = n);
}
function showGallery(n){
    let i;
    let image = document.getElementsByClassName("myGallery");
    let dots  = document.getElementsByClassName("dot");
    if (n > image.length){        galleryIndex = 1    }
    if(n < 1){        galleryIndex = image.length    }
    for (i = 0; i < image.length; i++){
        image[i].style.display = "none";
    }
    for (i - 0; i <dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    image[galleryIndex - 1].style.display = "block";
}