/*START NAV*/
let eltNav = document.getElementById('navigation');
let eltBtnMenu = document.getElementById('cone');
let eltCanvas = document.getElementById('monCanvas')
eltNav.style.display = "none";

eltBtnMenu.addEventListener('click', menuHomePage, false);

function menuHomePage() {
    eltNav.style.display = "block";
    let context = eltCanvas.getContext('2d');
    context.fillStyle = "#00000063";
    context.fillRect(0, 0, 1280, 627);
    context.globalCompositeOperation = "source-over";
}

/*END NAV*/
