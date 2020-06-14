
// left: 37, up: 38, right: 39, down: 40,
// space bar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = {38: -1, 40: 1};

function preventDefaultMouse(e) {
    e.preventDefault();
    if(e.deltaY > 0) {
        nextSlide();
    }
    else if (e.deltaY < 0) {
        prevSlide();
    }
}

let slide = 0;
function nextSlide() {
    alert(slide)
    if(slide < 2) {
        slide++;
    }
    else {
        enableScroll()
    }
}

function prevSlide() {
    alert(slide);
    if(slide > 0) {
        slide--;
    }
    else {
        enableScroll()
    }
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    e.preventDefault();
    if(e.keyCode == 40) {
        nextSlide();
    }
    if(e.keyCode == 38)
        prevSlide();
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefaultMouse, false); // older FF
  window.addEventListener(wheelEvent, preventDefaultMouse, wheelOpt); // modern desktop
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefaultMouse, false);
  window.removeEventListener(wheelEvent, preventDefaultMouse, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const isVisible = (elem) => {
    let win = $(".snapping-container");
    let viewport = win.scrollTop() + 50;
    let viewport_b = viewport + win.height();

    let bounds = elem.offsetTop;
    console.log(bounds, viewport);

    return (bounds < viewport) && ((bounds + 300) > viewport);

};

$(document).ready(() => {
    let slider = $("#projects-row")[0];
    let container = $(".snapping-container");
    container.scroll((e) => {
        console.log(e);
        if(isVisible(slider)) {
            if(slide === 0 && e.deltaY > 0) {
                disableScroll();
            }
            else if(slide === 2 && e.deltaY < 0) {
                disableScroll();
            }
        }
    });

});