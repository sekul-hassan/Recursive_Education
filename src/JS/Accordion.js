
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
export {openAccordion}