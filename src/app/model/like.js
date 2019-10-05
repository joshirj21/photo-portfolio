const axios = require('axios');

export class likeImages {
    constructor() {
        this.data = [];
    }
    setLikedImages(image) {
        this.data.push(image);
    }
    getLikedImages(image) {

    }
}