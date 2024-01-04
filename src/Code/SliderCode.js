const cssCode = `
.slideShowContainer {
    position: relative;
}

.slideShowContainer img {
    width: 100%;
    height: 400px;
    max-height: 350px;
}

.numberText {
    position: absolute;
    left: 5px;
    color: #000000;
    font-size: 22px;
    font-family: Popin, serif;
    font-weight: 500;
}

.mySlides {
    display: none;
}

.text {
    position: absolute;
    top: 43%;
    color: #000000;
    font-family: Raleway, serif;
    font-size: 20px;
    font-weight: 600;
    left: calc(50% - 55px);
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s ease;
}

.active,
.dot:hover {
    background-color: #605c5c !important;
}

.prev {
    position: absolute;
    top: 40%;
}

.next {
    position: absolute;
    right: 2px;
    top: 40%;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
}

.dotDiv{
    display: flex;
    justify-content: center;
}

.fades {
    animation-name: fades;
    animation-duration: 1.5s;
}

@keyframes fades {
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
}

    `;
const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000000" />
  <link rel="stylesheet" href="slider.css">
  <title>Recursive Education</title>
</head>
<body>
  <div class="slideShowContainer">
    <div class="mySlides fades">
      <div class="numberText">1/3</div>
      <img src="one.jpg" alt="1/3" />
      <div class="text">Caption 1</div>
    </div>
    <div class="mySlides fades">
      <div class="numberText">2/3</div>
      <img src="three.jpg" alt="2/3" />
      <div class="text">Caption 2</div>
    </div>
    <div class="mySlides fades">
      <div class="numberText">3/3</div>
      <img src="two.png" alt="3/3" />
      <div class="text">Caption 3</div>
    </div>
    <button class="prev" onclick="plusSlides(-1)">❮</button>
    <button class="next" onclick="plusSlides(1)">❯</button>
  </div>
  <div class="dotDiv">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>

  <script src="slider.js"> </script>
</body>
</html>

    `
const jsCode = `
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }

  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}
    `

export {cssCode,htmlCode,jsCode};