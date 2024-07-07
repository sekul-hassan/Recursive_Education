

const galleryHtml = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sliderGallery</title>
    <link rel="stylesheet" href="/gallery.css">
</head>
<body>
    <div class="slides">
        <div class="slide">
            <h4 class="slideNumber">1/6</h4>
        <img class="slideImg" src="/sliderimg/1.png" alt="">
        <h4 class="caption">caption 1</h4>
        </div>
        <div class="slide">
            <h4 class="slideNumber">2/6</h4>
        <img class="slideImg" src="/sliderimg/2.png" alt="">
        <h4 class="caption">caption 2</h4>
        </div>
        <div class="slide">
            <h4 class="slideNumber">3/6</h4>
        <img class="slideImg" src="/sliderimg/6.png" alt="">
        <h4 class="caption">caption 3</h4>
        </div>
        <div class="slide">
            <h4 class="slideNumber">4/6</h4>
        <img class="slideImg" src="/sliderimg/4.png" alt="">
        <h4 class="caption">caption 4</h4>
        </div>
        <div class="slide">
            <h4 class="slideNumber">5/6</h4>
        <img class="slideImg" src="/sliderimg/5.png" alt="">
        <h4 class="caption">caption 5</h4>
        </div>
        <div class="slide">
            <h4 class="slideNumber">6/6</h4>
        <img class="slideImg" src="/sliderimg/6.png" alt="">
        <h4 class="caption">caption 6</h4>
        </div>
        <button onclick="showNext(-1)" class="prev">❮</button>
        <button onclick="showNext(1)" class="next">❯</button>
    </div>
    <div class="preview">
        <img onclick="showSlide(1)" class="previewImg" src="/sliderimg/1.png" alt="">
        <img onclick="showSlide(2)" class="previewImg" src="/sliderimg/2.png" alt="">
        <img onclick="showSlide(3)" class="previewImg" src="/sliderimg/6.png" alt="">
        <img  onclick="showSlide(4)" class="previewImg" src="/sliderimg/4.png" alt="">
        <img onclick="showSlide(5)" class="previewImg" src="/sliderimg/5.png" alt="">
        <img onclick="showSlide(6)" class="previewImg" src="/sliderimg/6.png" alt="">  
    </div>
    <script src="/gallery.js"></script>
</body>
</html>

`

const galleryCss = `
.slideImg{
    width: 100%;
    height: auto;
    margin-bottom: -4px;
} 
.slides{
    position: relative;
}
.slide{
    display: none;
}
.slideNumber{
    position: absolute;
    color: white;
    top: -10px;
    left: 10px;

}
.caption{
    background-color: black;
    color: white;
    text-align: center;
    margin: 0px ;
    padding: 3px;

}
.prev, .next{
    position: absolute;
    top: 45%;
    border: 1px solid gray;
}
.next{
    right: 0px;
}
.prev:hover,.next:hover{
    cursor: pointer;
    background-color: black;
    color: white;
}
.preview{
    display: flex;
}
.previewImg{
    width: 16.7%;
    cursor: pointer;
}

`

const galleryJs = `
let slideIndex=1;

function showSlide(num){
    let slides=document.getElementsByClassName("slide");
    let previewImg=document.getElementsByClassName("previewImg");
    if(num>slides.length) num=1;
    if(num<1) num= slides.length;
     slideIndex=num;
   

     for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
        previewImg[i].style.opacity="0.6";
     }
    slides[slideIndex-1].style.display="block";
    previewImg[slideIndex-1].style.opacity="1";

}
showSlide(1);

function showNext(num){
    showSlide(num+slideIndex);

}
`

export {galleryHtml,galleryCss,galleryJs};