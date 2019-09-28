const axios = require('axios');

export class slideImages {
    constructor() {
        this.data = [];
    }
    async getSlideImages() {
        try {
            const response = await axios.get(`https://api.unsplash.com/photos/?per_page=100&client_id=f9e64943eba7a74598e26d650184ff6266b5b4b356fae25ad22361031a1bdc1f`)
            response.data.forEach((el) => {
                this.data.push({
                    id: el.id,
                    description: el.description,
                    image_url: `${el.urls.raw}&fit=fill&fill=blur&w=1366&h=725`,
                    download_url: el.links.download
                })
            })
        }
        catch (error) {
            console.log("error")
        }
    }
}