export const renderImages = (image) => {
    const element = document.querySelector(".outer");
    // const heading = document.querySelector("#heading")
    element.style.background = `url(${image.image_url})`
    // if (image.description) {
    //     heading.style.textContent = image.description;
    // }

}