
function openNav(){
    let sideNav = document.getElementById('sideNav');
    let contentArea = document.getElementById('contentArea');

    sideNav.style.width = "130px";
    contentArea.style.marginLeft = "135px";

}

function closeNav(){
    let sideNav = document.getElementById('sideNav');
    let contentArea = document.getElementById('contentArea');

    sideNav.style.width = "0";
    contentArea.style.marginLeft = "0";
}

export {openNav,closeNav}