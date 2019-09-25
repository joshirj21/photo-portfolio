import { run } from "./app/app";
import "./style.css";
import { slideImages } from "./app/model/home"
import * as homeView from "./app/views/homeView"

const state = {

}
window.addEventListener('load', (event) => {
    controlSlide();
});

const controlSlide = async () => {
    // 1. creating slideImages object
    state.slideImages = new slideImages();

    // 2. requesting images
    await state.slideImages.getSlideImages()
    console.log(state.slideImages)
    // render results on UI
    homeView.renderImages(state.slideImages.data[0])
}


run();
