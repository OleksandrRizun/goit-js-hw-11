import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {PixabayAPI} from "./pixabayapi";
import {createGalleryCard} from "./createmarkup";

const apiService = new PixabayAPI;

let counter = 1;

const refs = {
    input: document.querySelector ("input"),
    button: document.querySelector ("button"),
    gallery: document.querySelector (".gallery"),
    load: document.querySelector (".load-more")
}

refs.load.hidden = true;

refs.button.addEventListener ("click", (event) => {
    event.preventDefault();
    refs.load.hidden = true;
    let search = refs.input.value.trim ();
    if (!search) {
        return Notify.info ("Enter something for search.");
    }
    refs.gallery.innerHTML ="";
    apiService.query = search;
    counter = 1;
    apiService.page = 1;
    apiService.getImage ().then (({data}) => {
        if (!data.total){
            return Notify.failure ("Sorry, there are no images matching your search query. Please try again.");
        }
        const markup = createGalleryCard(data.hits);
        refs.gallery.innerHTML = markup;
        refs.load.hidden = false;
    });
});

refs.load.addEventListener ("click", () => {
    refs.load.hidden = true;
    counter += 1;
    apiService.page = counter;
    apiService.getImage ().then (({data}) => {
        if (data.hits.length == 0){
            return Notify.info ("We're sorry, but you've reached the end of search results.");
        }
        const markup = createGalleryCard(data.hits);
        refs.gallery.insertAdjacentHTML ("beforeend", markup);
        refs.load.hidden = false;
    });
});

