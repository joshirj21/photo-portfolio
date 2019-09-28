import { run } from "./app/app";
import "./style.css";
import { slideImages } from "./app/model/home"
import * as homeView from "./app/views/homeView"

run();
const state = {

}
let i = 0;
window.addEventListener('load', (event) => {
    controlSlide();
});

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 40 && i <= state.slideImages.data.length) {
        homeView.renderImages(state.slideImages.data[i])
        i++;
    }
})

const controlSlide = async () => {
    // 1. creating slideImages object
    state.slideImages = new slideImages();

    // 2. requesting images
    await state.slideImages.getSlideImages()
    // render results on UI
}


