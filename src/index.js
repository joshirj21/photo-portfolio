import { run } from "./app/app";
import "./style.css";
import { slideImages } from "./app/model/home"
import { likeImages } from "./app/model/like"
import * as homeView from "./app/views/homeView"

run();


const state = {
}
state.likedImages = new likeImages();
let i = 0;
window.addEventListener('load', (event) => {
    controlSlide();
});

window.addEventListener('keyup', function (event) {
    document.querySelector(".fa-heart").style.color = "white";
    if (event.keyCode === 40 && i <= state.slideImages.data.length) {
        homeView.renderImages(state.slideImages.data[i])
        i++;
        if (state.likedImages.data.length != 0) {
            state.likedImages.data.find(function (element) {
                if (element === state.slideImages.data[i].id) {
                    document.querySelector(".fa-heart").style.color = "red";
                }
            })
        }
    }
})
window.addEventListener("dblclick", function (event) {
    document.querySelector(".fa-heart").style.color = "red";
    console.log(state.slideImages.data[i]);
    state.likedImages.setLikedImages(state.slideImages.data[i]);
})

const controlSlide = async () => {
    // 1. creating slideImages object
    state.slideImages = new slideImages();

    // 2. requesting images
    await state.slideImages.getSlideImages()
    // render results on UI
}


