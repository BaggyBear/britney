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
    //console.log(image[1])
    let dots  = document.getElementsByClassName("dot");
    //console.log(dots)
    if (n > image.length){        galleryIndex = 1    }
    //console.log(galleryIndex)
    if(n < 1){        galleryIndex = image.length    }
    //console.log(image.length)    
    //console.log(galleryIndex)
    for (i = 0; i < image.length; i++){
        console.log(i)
        image[i].style.display = "none";
    }
    for (i - 0; i <dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    image[galleryIndex - 1].style.display = "block";
    //dots[galleryIndex - 1].className += " active";
}