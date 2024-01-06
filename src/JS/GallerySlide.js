let show = 1;

function showPre(){
    showSlide(show-1)
}
function showNext(){
    showSlide(show+1)
}
function showSlide(n){
    let gallerySlides = document.getElementsByClassName('gallerySlides');
    let collum = document.getElementsByClassName('collum');
    show = n;
    if(show>gallerySlides.length) show = 1;
    if(show<1) show = gallerySlides.length;

    for(let i=0;i<gallerySlides.length;i++){
        gallerySlides[i].style.display = "none";
        collum[i].style.opacity = "0.6";
    }
    gallerySlides[show-1].style.display = "block";
    collum[show-1].style.opacity = "1";
}

export {showSlide,showPre,showNext}