let togglerFlag = false;
let running = false;
var navbarToggler = document.querySelector(".expander,.expander *");

navbarToggler.addEventListener("click", animeToggler)


function animeToggler() {
    var collapser = document.querySelector(".expand")
    if (!togglerFlag && !running) {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'linear',
            height: ['0%', '100%'],
            begin: function () {
                running = true;
                hamRotate();
            },
            complete: function () {
                togglerFlag = true;
                running = false;
            }
        });
    }
    else if (togglerFlag && !running) {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'linear',
            height: [collapser.style.height, '0%'],
            begin: function () {
                running = true;
            },
            complete: function () {
                togglerFlag = false;
                running = false;
                hamReverseRotate();
            }
        });
    }
}

const hamRotate = () => {
    let top = document.querySelector(".top");
    let center = document.querySelector(".center")
    let bottom = document.querySelector(".bottom");
    center.style.display = "none";
    anime({
        targets: top,
        translateY: '2.8px',
        rotate: '45'
    });
    anime({
        targets: bottom,
        translateY: '-4.5px',
        rotate: '-45'
    });
}
const hamReverseRotate = () => {
    let top = document.querySelector(".top");
    let center = document.querySelector(".center")
    let bottom = document.querySelector(".bottom");
    center.style.display = "block";
    anime({
        targets: top,
        translateY: '0',
        rotate: '0'
    });
    anime({
        targets: bottom,
        translateY: '0',
        rotate: '0'
    });
}

