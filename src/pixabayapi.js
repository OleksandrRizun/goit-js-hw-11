import axios from "axios";

export class PixabayAPI {
    #BASE_URL = "https://pixabay.com/api";
    #API_KEY = "41032962-13a1f4b46a16f1c84256e5234";
    #query = "";
    #page = 1;
    #searchParams = new URLSearchParams({
        key: this.#API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40
    });
    async getImage () {
        const url = `${this.#BASE_URL}?${this.#searchParams}&q=${this.#query}&page=${this.#page}`;
        // const url = "https://pixabay.com/api?key=41032962-13a1f4b46a16f1c84256e5234&q=flower&image_type=photo&orientation=horizontal&per_page=40&page=1";
        try {
            const data = await axios (url);
            return data;
        } catch (error) {
            console.error (error)
        }
    }
    set query (newQuery) {
        this.#query = newQuery;
    }
    set page (newPage) {
        this.#page = newPage;
    }
}