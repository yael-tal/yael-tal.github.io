
const menuToggle = () => {
    const menu = document.getElementById("menu");
    console.log('activated');
    if (menu.style.opacity == 1) {
        menu.style.opacity = "0";
        setTimeout(() => {
            menu.style.display = 'none';
        }, 1000)
    }
    else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.opacity = "1";
        }, 0)

    }

};

$(document).ready(() => {
    console.log('loaded');
    const menuBtn = document.getElementById("menu-btn");
    const menuExit = document.getElementById("menu-exit");
    menuBtn.addEventListener('click', e => menuToggle());
    menuExit.addEventListener('click', e => menuToggle());
});