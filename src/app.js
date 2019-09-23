let togglerFlag = false;

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
            }
        });
    }
}

