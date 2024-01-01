

function welcomeMe(e,mam){
    let mams = document.getElementsByClassName('tebContent');
    let tabsLinks = document.getElementsByClassName('tabsLinks');
    for(let i=0;i<mams.length;i++){
        mams[i].style.display = "none";
        tabsLinks[i].className = tabsLinks[i].className.replace(" active", " ");
    }
    document.getElementById(mam).style.display = "block";
    e.currentTarget.className += " active";

}
export {welcomeMe};