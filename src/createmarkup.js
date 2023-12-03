export function createGalleryCard (images) {
    return images.map (({webformatURL, tags, likes, views, comments, downloads}) => 
        `<div class="photo-card">
            <div class="photo-img">
                <img src=${webformatURL} alt=${tags} loading="lazy" />
            </div>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b><br/>
                    ${likes}
                </p>
                <p class="info-item">
                    <b>Views</b><br/>
                    ${views}
                </p>
                <p class="info-item">
                    <b>Comments</b><br/>
                    ${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b><br/>
                    ${downloads}
                </p>
            </div>
        </div>`
    ).join("");
}