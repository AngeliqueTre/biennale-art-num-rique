/*START NAV*/
let eltNav = document.getElementById('navigation');
let eltBtnMenu = document.getElementById('cone');
let eltCanvas2 = document.getElementById('monCanvas2');
let close = true;

eltNav.style.display = "none";
eltCanvas2.style.display = "none";

eltBtnMenu.addEventListener('click', menuHomePage, false);

function menuHomePage() {
  if (close === true) {
    eltNav.style.display = "block";
    eltCanvas2.style.display = "block";
    close = false;
  } else {
    eltNav.style.display = "none";
    eltCanvas2.style.display = "none";
    close = true;
  }
}

/*END NAV*/
