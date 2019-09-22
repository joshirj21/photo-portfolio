// window.addEventListener("load", () => {
//     var outerImage = document.querySelector(".outer-image")
//     console.log(outerImage)
// anime({
//     targets: outerImage,
//     scale: 0.99,
//     duration: 2500
//     // easing: 'easeInOutExpo'
// });
// })

var navbarToggler = document.querySelector(".expander,.expander *");

navbarToggler.addEventListener("click", animeToggler)
function animeToggler() {
    var collapser = document.querySelector(".expand")
    if (collapser.style.height === "" || collapser.style.height === "0%") {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'easeInOutExpo',
            height: ['0%', '100%']
        });
    }
    else {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'easeInOutExpo',
            height: [collapser.style.height, '0%']
        });
    }
}