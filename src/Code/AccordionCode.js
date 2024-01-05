const htmlCode =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="accordion.css">
    <title>Recursive Education</title>
</head>
<body>
    <h4><strong>Accordion</strong></h4>
    <div class="accordions">
        <div class="accordion" onclick="openAccordion('0')">
            <h4>Section Item 1</h4>
            <h4 class="sign">+</h4>
        </div>
        <div class="accordionBody">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
            laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
            delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate? 
        </div>
        <div class="accordion" onclick="openAccordion('1')">
            <h4>Section Item 2</h4>
            <h4 class="sign">+</h4>
        </div>
        <div class="accordionBody ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
            laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
            delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate? 
        </div>
        <div class="accordion" onclick="openAccordion('2')">
            <h4>Section Item 3</h4>
            <h4 class="sign">+</h4>
        </div>
        <div class="accordionBody ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
            laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
            delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate?
        </div>
    </div>
    <script src="accordion.js"></script>
</body>
</html>
    
`

const cssCode =
`
.accordion{
    display: flex;
    justify-content: space-between;
    padding: 0;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
}
.sign{
    font-size: 20px;
    font-family: Montserrat, serif;
    font-weight: 500;
}
.accordionBody{
    display: none;
    background-color:rgba(0,0,0,0.05);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s ease-in;
 }    
`

const jsCode =
`
function openAccordion(num){
    let accordionBody = document.getElementsByClassName('accordionBody');
    let sign = document.getElementsByClassName('sign');

    if(sign[num].innerHTML==="+"){
        accordionBody[num].style.display = "block";
        sign[num].innerHTML = "-";
        accordionBody[num].style.maxHeight = accordionBody[num].scrollHeight + "px";
    }
    else{
        accordionBody[num].style.display = "none";
        sign[num].innerHTML = "+";
        accordionBody[num].style.maxHeight = "0px";
    }
}
`
export {htmlCode,cssCode,jsCode};