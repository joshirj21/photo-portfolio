const axios = require('axios');

export class slideImages {
    constructor() {
        this.data = [];
    }
    async getSlideImages() {
        try {
            // const response = await axios.get(`https://api.unsplash.com/photos/?per_page=10&client_id=f9e64943eba7a74598e26d650184ff6266b5b4b356fae25ad22361031a1bdc1f`)
            response.data.forEach((el) => {
                if (el.description !== null) {
                    this.data.push({
                        id: el.id,
                        description: el.description,
                        image_url: el.urls.regular,
                        download_url: el.links.download
                    })
                }
            })
        }
        catch (error) {
            console.log("error")
        }
    }
}